import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {Container, Col, Row} from "../components/Grid";
import {Input, FormBtn} from "../components/BookSearchForm";
// import {Card} from "../components/Card";
import API from "../utils/API";
import {List, ListItem} from "../components/BooksList";

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
      // console.log(process.env.REACT_APP_SECRET);
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
                      value={this.state.search}
                      name="search"
                      placeholder="Search book title here"
                      onChange={this.handleInput}
                    />
                    <FormBtn
                      // disabled={
                      //   !(this.state.author && this.state.title)
                      // }
                      onClick={this.handlebookSearchSubmit}
                    >
                      Submit Book
                    </FormBtn>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <List>
                    {/* {this.state.results.map(book => ( */}
                    <ListItem>
                      {/* <h1>{this.state.results[0].volumeInfo.title}</h1> */}
                    </ListItem>
                    {/* ))} */}
                  </List>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Home;

 {/* <Card> */}
                            {/* <Link to={"/search"}> */}
                                {/* <img src="" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn">Save Book</a>
                                </div> */}
                            {/* </Link> */}
                        {/* </Card> */}