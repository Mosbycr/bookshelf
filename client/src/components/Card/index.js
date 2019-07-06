import React, {Component} from "react";
import API from "../../utils/API";
import "./index.css";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };

    this.handleSavedBook = this.handleSavedBook.bind(this);
  }

  handleSavedBook = event => {
    event.preventDefault();
    this.setState({ saved: true });
    const bookData = {
      title: this.props.title,
      authors: this.props.authors,
      link: this.props.link,
      img: this.props.img,
      description: this.props.description
    };

    API.saveBook(bookData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="card" id={this.props.id ? this.props.id : null}>
        <div className="card-body">
          <h3 className="card-title">{this.props.title}</h3>
        <div className="img-container">
          <img src={this.props.img} className="card-img-top" alt="" />
        </div>
          <h2 className="card-author">Author(s): {this.props.authors}</h2>
          <p className="card-text">Synopsis: {this.props.description}</p>
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            id="buyBtn"
          >
            See More...
          </a>
          {this.props.path === "/" || this.props.path === "/search" ? (
            <button
              className="btn"
              id={this.props.id}
              // onClick={(event) => this.props.handleSavedButton(event)}
            >
              Save Book
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}


export default Card