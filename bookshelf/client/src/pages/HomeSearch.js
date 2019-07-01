import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {Container, Col, Row} from "../components/Grid";
import {Input} from "../components/BookSearchForm";
import {Card} from "../components/Card";
import API from "../utils/API";

class Home extends Component {
    state = {
        search: "",
        results: {}
    };

    componentDidMount() {
      this.searchBooks("Harry Potter");
      console.log(this.state.results);
    }

    searchBooks = query => {
      API.search(query)
        .then(res => this.setState({ results: res.data }))
        .catch(err => console.log(err));  
    }

    handleInput = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
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
                  <form>
                      <Input 
                      value={this.state.search}
                      name="search"
                      placeholder="Search book title here"
                      onChange={this.handleInput}
                      />
                  </form>
                </Col>
              </Row>
              <Row>
                  <Col size="md-12">
                    {/* {this.state.results.map(book => ( */}
                        <Card>
                            {/* <Link to={"/search"}> */}
                                <img src="" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn">Save Book</a>
                                </div>
                            {/* </Link> */}
                        </Card>
                    {/* ))} */}
                  </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Home;
