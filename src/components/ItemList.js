import React from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  return (
    <tr>
      <td>
        <Link to={"/item/" + props.item.guid}>{props.item.guid}</Link>
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.category}</td>
      <td>{props.item.date}</td>
      <td>
        <div className="row-cols-2">
          <a className="btn btn-sm" href={"/item-details/" + props.guid}>
            <i className="fa fa-solid fa-eye"></i>
          </a>
          <a className="btn btn-sm" href={"/item-details/" + props.guid}>
            <i className="fa fa-duotone fa-trash"></i>
          </a>
        </div>
      </td>
    </tr>
  );
};
export default ItemList;
