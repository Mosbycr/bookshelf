import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {Container, Col, Row} from "../components/Grid";

class Home extends Component {
    state = {
        search: ""
    };

    render(){
        return (
          <div>
            <Jumbotron>
              <h1>BookShelf</h1>
              <h3>Find a book to add to your library</h3>
            </Jumbotron>
            <Container>
              <Row>
                <Col size="md-12">
                  <div>Hello this is showing!!</div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Home;
