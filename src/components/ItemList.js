import React from "react";

const ItemList=(props)=>{
    return(
        <tr>
            <td>{props.item.guid}</td>
            <td>{props.item.title}</td>
            <td>{props.item.category}</td>
            <td>{props.item.date}</td>
            <td>
            <div className="row-cols-2">
              <a className="btn btn-sm" href={"/item-details/"+props.guid} >
                <i class="fa fa-solid fa-eye"></i>
              </a>
              <a className="btn btn-sm" href={"/item-details/"+props.guid} >
                <i class="fa fa-duotone fa-trash"></i>
              </a>
            </div>
            </td>
        </tr>
    );
}
export default ItemList;