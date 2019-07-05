import React from "react";
import { Card } from "../Card";

function ResultsContainer(props) {
  console.log(props.bookResults);
  if (props.path === "/" || props.path === "/search") {
    return (
      <div id="resultsContainer">
        {props.bookResults.items &&
          props.bookResults.items.map(book => {
            const bookInfo = book.volumeInfo;
            return (
              <Card
                title={bookInfo.title}
                authors={bookInfo.authors}
                description={bookInfo.description}
                link={bookInfo.infoLink}
                img={bookInfo.imageLinks.smallThumbnail}
                path={props.path}
                key={bookInfo.id}
              />
            );
          })}
      </div>
    );
  } else if (props.path === "/books"){
    return (
      <div id="resultsContainer">
        {
          props.bookResults.items.map(book => {
            const bookInfo = book.volumeInfo;
            return (
              <Card
                title={bookInfo.title}
                authors={bookInfo.authors}
                description={bookInfo.description}
                link={bookInfo.infoLink}
                img={bookInfo.imageLinks.smallThumbnail}
                path={props.path}
                key={bookInfo._id}
              />
            );
          })}
      </div>
    );
  }
}

export default ResultsContainer;
