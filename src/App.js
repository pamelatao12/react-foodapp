import React, { useState } from "react";
import "./searchPage.css";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Header from "./header";
import Filter from "./filter";
import RestaurantCard from "./restaurantCard";

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
      <div className="searchWrapper">
        <div className="search">
          <SearchBar />
          <RestaurantCard />
        </div>
      </div>
      <div className="filterWrapper">
        <Filter />
      </div>
    </div>
  );
};

export default App;
