import React, { useEffect, useState } from "react";
import * as itemApi from "../api/itemApi";


const ItemDetails = (props) => {

  const [item, setItem]=useState();

  useEffect(()=>{
    const guid=props.match.params.guid;
    itemApi.getItemByGuid(guid).then(_item=>setItem(_item));
  },[props.match.params.guid])

  return (
    <div>
      {item && (
        <div className="container mt-5">
          <h2>{item.title}</h2>
          <p>
            <strong>
              (guid=<i>{item.guid}</i>)
            </strong>
          </p>
          <p>
            <img src={item.image.url} alt={item.image.description} />
          </p>
          <p>{item.category}</p>
          <p>{item.date}</p>
          <p>{item.content.content}</p>
          <p>
            <strong>{item.auteur}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
