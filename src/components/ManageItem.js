import produce from "immer";
import { has, set } from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import * as itemApi from "../api/itemApi";
import ItemForm from "./ItemForm";

function enchancedReducer(state, updateArg) {
  if (updateArg.constructor === Function) {
    return { ...state, ...updateArg(state) };
  }

  if (updateArg.constructor === Object) {
    // does the update object have _path and _value as it's keys
    // if yes then use them to update deep object values
    if (has(updateArg, "_path") && has(updateArg, "_value")) {
      const { _path, _value } = updateArg;

      return produce(state, (draft) => {
        set(draft, _path, _value);
      });
    } else {
      return { ...state, ...updateArg };
    }
  }
}

const initialState = {
  guid: null,
  title: "",
  category: "",
  dateType: "",
  date: Date(),
  image: {
    url: "",
    type: "",
    description: "",
    taille: 0,
  },
  content: {
    url: "",
    type: "",
    content: "",
  },
  creator: {
    type: "",
    name: "",
    mail: "",
    uri: "",
  },
};
const ManageItem = (props) => {
  const [state, updateState] = useReducer(enchancedReducer, initialState);
  const [errors, setErrors] = useState({});

  const updatedForm = React.useCallback(({ target: { value, name, type } }) => {
    const updatePath = name.split(".");
    if (updatePath.length === 1) {
      const [key] = updatePath;

      updateState({
        [key]: value,
      });
    }

    if (updatePath.length === 2) {
      updateState({
        _path: updatePath,
        _value: value,
      });
    }
  }, []);

  useEffect(() => {
    const guid = props.match.params.guid;
    if (guid) {
      itemApi.getItemByGuid(guid).then((_item) => updateState(_item));
    }
  }, [props.match.params.guid]);

  /*function handleChange({ target }) {
    setItem({
      ...item,
      [target.name]: target.value,
    });
  }*/

  function formIsValid(){
    const _errors={};

    if (!state.title) _errors.title = "Title is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!formIsValid) return;
    console.log(state);
  }

  return (
    <div className="container mt-3">
      <h2>
        {state.guid
          ? "Modification d'un article"
          : "Ajout d'un nouveau article"}
      </h2>
      <ItemForm item={state} onChange={updatedForm} onSubmit={handleSubmit} errors={errors} />
    </div>
  );
};

export default ManageItem;
