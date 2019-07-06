import React from "react";
// import "./bookForm.css";

export function Input(props){
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn text-white">
      {props.children}
    </button>
  );
}
