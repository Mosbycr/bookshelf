import React from "react";
import { Card } from "../components/Card";

function ResultsContainer(props) {
  return (
    <div id="resultsContainer">
      {props.bookResults.map(book => {
        const bookInfo = book.volumeInfo;
        return (
          <Card
            title={bookInfo.title}
            authors={bookInfo.authors}
            description={bookInfo.description}
            link={bookInfo.infoLink}
            img={bookInfo.imageLinks.smallThumbnail}
            // path={props.path}
            key={book.id}
          />
        );
      })}
    </div>
  );
}

export default ResultsContainer


