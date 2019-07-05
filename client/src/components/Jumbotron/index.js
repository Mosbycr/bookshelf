import React from "react";
import { Container } from "../Grid";
import "./index.css";

function Jumbotron({children}){
    return(
        <div className="jumbotron">
            <Container fluid>
                {children}
            </Container>
        </div>
    )
}

export default Jumbotron;