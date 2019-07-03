import React from "react";

export function Card(props){
    return (
      <div className="card">
        <img src={props.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">Title: {props.title}</h3>
          <h2 className="card-author">Author(s): {props.authors}</h2>
          <p className="card-text">Synopsis: {props.description}</p>
          <a href={props.link} className="btn btn-primary">
            Buy Book
          </a>
          <a href="#" className="btn btn-primary">
            Save Book
          </a>
        </div>
      </div>
    );
}