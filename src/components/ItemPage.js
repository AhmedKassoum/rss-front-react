import React, { useEffect, useState } from "react";
import * as itemApi from "../api/itemApi";
import ItemList from "./ItemList";
const ItemPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemApi.getItems().then((_items) => {
      setItems(_items);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Guid</th>
              <th scope="col">Titre</th>
              <th scope="col">Categorie</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                items.map((item)=>(
                    <ItemList item={item} key={item.guid} />
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ItemPage;
