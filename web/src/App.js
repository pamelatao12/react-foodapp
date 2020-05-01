import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import SearchPage from "./searchPage";
import MyEvents from "./myEvents";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/events">
          <MyEvents />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
