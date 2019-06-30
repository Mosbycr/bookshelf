import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/HomeSearch";
// import Saved from "./pages/Saved";
import Nav from "./components/Navbar";

function App() {
  return (
    // <Router>
    <div>
      {/* <h2>This is Showing!!!</h2> */}
      <Navbar />
        {/* <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
