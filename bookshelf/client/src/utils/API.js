import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = `"&key=" ${process.env.REACT_APP_SECRET}"`;
const APIKEY = "&key=AIzaSyCxi4h-4WlsrMbQ3e4x2mCf8j6a3ESiPPg";

export default {

  search: function(query) {
      return axios.get(BASEURL + query + APIKEY);
  },
    
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};