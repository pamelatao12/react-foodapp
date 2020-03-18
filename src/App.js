import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./home";
import SearchPage from "./searchPage";

const App = () => {
  return <SearchPage />;
  {
    /* return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ); */
  }
};

export default App;
