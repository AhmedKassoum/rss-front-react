import React from "react";

const Input=(props)=>{
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} className="form-control"/>
        </div>
    );
}

export default Input;