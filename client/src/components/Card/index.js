import React, {Component} from "react";
// import API from "../utils/API";


class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      saved: false,
    };

    this.handleSavedBook = this.handleSavedBook.bind(this);
  }

  handleSavedBook = event => {
    event.preventDefault();
    alert("this is clickable!!")
  }

  render(){
    return (
      <div className="card">
        <img src={this.props.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">Title: {this.props.title}</h3>
          <h2 className="card-author">Author(s): {this.props.authors}</h2>
          <p className="card-text">Synopsis: {this.props.description}</p>
          <a href={this.props.link} target="_blank" className="btn btn-primary">
            Buy Book
          </a>
          {
            (this.props.path === "/" || this.props.path === "/search")? 
          <button className="btn btn-primary" onClick = {this.handleSavedBook}>
            Save Book
          </button> : null
          }
        </div>
      </div>
    );
  }
}


export default Card