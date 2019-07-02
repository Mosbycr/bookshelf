import React from "react";
import {Card} from "../Card";

function ResultsContainer(props) {

  console.log(props.bookResults);
  return (
    <div id="resultsContainer">

      {
        props.bookResults.items &&
        props.bookResults.items.map(book => {
        const bookInfo = book.volumeInfo;
        return (
          <Card
            title={bookInfo.title}
            authors={bookInfo.authors}
            description={bookInfo.description}
            link={bookInfo.infoLink}
            img={bookInfo.imageLinks.smallThumbnail}
            // path={props.path}
            key={book.title}
          />
        );
      })}
    </div>
  );
}

export default ResultsContainer


