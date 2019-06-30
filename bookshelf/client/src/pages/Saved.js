import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Saved Books</h1>
        <h3>Pick one and add it to your bookshelf!</h3>
      </Jumbotron>
    );
  }
}

export default Saved;
