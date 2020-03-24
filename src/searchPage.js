import React, { useState } from "react";
import styles from "./searchPage.module.css";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Header from "./header";
import Filter from "./filter";
import RestaurantCard from "./restaurantCard";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const SearchPage = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const [state, setState] = useState({
    searchKeyword: parsed.keyword,
    searchLocation: parsed.location,
    searchResults: [
      { name: "Restaurant 1", neighborhood: "Chelsea", price: "$$" },
      { name: "Restaurant 2", neighborhood: "Lower east side", price: "$$" },
      { name: "Restaurant 3", neighborhood: "Chelsea", price: "$$" }
    ]
  });

  return (
    <div
      className={styles.searchPage}
      style={{ backgroundImage: `url("/food5.jpg")` }}
    >
      <div className={styles.headerWrapper}>
        <Header />
        <NavBar />
        <img className={styles.siteLogo} src="./logo.png" alt="logo" />
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.filterWrapper}>
          <Filter />
        </div>
        <div className={styles.restaurantListWrapper}>
          <ul className={styles.restaurantListUl}>
            {state.searchResults.map((restaurantDetail, i) => (
              <li className={styles.restaurantList} key={i}>
                <RestaurantCard details={restaurantDetail} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
