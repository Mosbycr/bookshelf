import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {

    render(){
        return (
            <Jumbotron>
                <h1>BookShelf</h1>
                <h3>Find a book to add to your library</h3>
            </Jumbotron>
        );
    }
}

export default Home;
