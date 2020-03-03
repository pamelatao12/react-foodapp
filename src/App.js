import React, { useState } from "react";
import "./searchPage.css";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Header from "./header";
import Filter from "./filter";

{
  /*SearchPage js file using as temp App*/
}

const App = () => {
  const [state, setState] = useState({
    searchValue: "sushi"
  });

  return (
    <div>
      <Header />
      <NavBar />
      <img className="siteLogo" src="./logo.png" alt="logo" />
      <Filter />
      <div className="search">
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
