import React from "react";
import { Container } from "../Grid";

function Jumbotron({children}){
    return(
        <div className="jumbotron">
            <Container fluid>
                {children}
                {/* <h1>BookShelf</h1>
                <h3>Find a book to add to your library</h3> */}
            </Container>
        </div>
    )
}

export default Jumbotron;