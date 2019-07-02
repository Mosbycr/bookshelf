import React from "react";

export function Card(props){
    return (
      <div className="card">
        <img src={props.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title" />
          <p className="card-text" />
          <a href="#" className="btn btn-primary">
            Save Book
          </a>
        </div>
      </div>
    );
}