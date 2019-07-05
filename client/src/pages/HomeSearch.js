import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {Container, Col, Row} from "../components/Grid";
import {Input, FormBtn} from "../components/BookSearchForm";
import ResultsContainer from "../components/BookResults";
import API from "../utils/API";
// import {List, ListItem} from "../components/BooksList";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        bookSearch: "",
        bookResults: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlebookSearchSubmit = this.handlebookSearchSubmit.bind(this);
  }

    componentDidMount() {
      this.searchBooks("Harry Potter");
    }

    searchBooks = query => {
      API.search(query)
        .then(res => this.setState({ bookResults: res.data }))
        .catch(err => console.log(err));  
    }

    handleInput = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handlebookSearchSubmit = event => {
      event.preventDefault();
      this.searchBooks(this.state.bookSearch);
    }

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
                      value={this.state.bookSearch}
                      name="bookSearch"
                      placeholder="Search book title here"
                      onChange={this.handleInput}
                    />
                    <FormBtn
                      disabled={!this.state.bookSearch}
                      onClick={this.handlebookSearchSubmit}
                    >
                      Submit Book
                    </FormBtn>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <ResultsContainer
                    bookResults={this.state.bookResults}
                    path={this.props.match.path}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Home;

 