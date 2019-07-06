import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {Container, Col, Row} from "../components/Grid";
import {Input, FormBtn} from "../components/BookSearchForm";
import ResultsContainer from "../components/BookResults";
import API from "../utils/API";
// import {List, ListItem} from "../components/BooksList";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSearch: "",
      bookResults: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlebookSearchSubmit = this.handlebookSearchSubmit.bind(this);
    // this.handleSavedBook = this.handleSavedBook.bind(this);
  }

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ bookResults: res.data }))
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlebookSearchSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.bookSearch);
  };

  // handleSavedBook = event => {
  //   event.preventDefault();
  //   let savedBook = this.state.bookResults.filter(book => book.id === event.target.id)
  //   savedBook = savedBook[0];

  //   API.saveBook(savedBook)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 id="title">BookShelf</h1>
          <h3 id="secondTitle">Find a book to add to your library</h3>
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
        </Container>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <ResultsContainer
                bookResults={this.state.bookResults}
                path={this.props.match.path}
                // key={this.state.bookResults}
                // handleSavedButton={this.handleSavedBook}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;

 