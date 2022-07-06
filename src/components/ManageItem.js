import React, {  useState } from "react";
//import * as itemApi from "../api/itemApi";
import ItemForm from "./ItemForm";

const ManageItem = (props) => {
  const [item, setItem] = useState({
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
  });

  /*useEffect(() => {
    const guid = props.match.params.guid;
    if (guid) {
      itemApi.getItemByGuid(guid).then((_item) => setItem(_item));
    }
  }, [props.match.params.guid]);*/

  function handleChange({ target }) {
    setItem({
      ...item,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(item);
  }

  return (
    <div className="container mt-3">
      <h2>
        {item.guid
          ? "Ajout d'un nouveau article"
          : "Modification d'un nouveau article"}
      </h2>
      <ItemForm item={item} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default ManageItem;
