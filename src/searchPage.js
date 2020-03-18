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

const SearchPage = () => {
  const [state, setState] = useState({
    searchValue: "sushi",
    searchResults: [
      { name: "Restaurant 1", neighborhood: "Chelsea", price: "$$" },
      { name: "Restaurant 2", neighborhood: "Lower east side", price: "$$" },
      { name: "Restaurant 3", neighborhood: "Chelsea", price: "$$" }
    ]
  });

  return (
    <div
      className="searchPage"
      style={{ backgroundImage: `url("/food5.jpg")` }}
    >
      <Header />
      <NavBar />
      <img className="siteLogo" src="./logo.png" alt="logo" />
      <div className="searchWrapper">
        <div className="search">
          <div className="searchBar">
            <SearchBar />
          </div>
          <ul className="restaurantListUl">
            {state.searchResults.map((restaurantDetail, i) => (
              <li className="restaurantList" key={i}>
                <RestaurantCard details={restaurantDetail} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="filterWrapper">
        <Filter />
      </div>
    </div>
  );
};

export default SearchPage;
