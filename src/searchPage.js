import React, { useState } from "react";
import styles from "./searchPage.module.css";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Header from "./header";
import Filter from "./filter";
import RestaurantCard from "./restaurantCard";

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
      className={styles.searchPage}
      style={{ backgroundImage: `url("/food5.jpg")` }}
    >
      <Header />
      <NavBar />
      <img className={styles.siteLogo} src="./logo.png" alt="logo" />
      <div className={styles.searchWrapper}>
        <div className={styles.search}>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
          <ul className={styles.restaurantListUl}>
            {state.searchResults.map((restaurantDetail, i) => (
              <li className={styles.restaurantList} key={i}>
                <RestaurantCard details={restaurantDetail} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <Filter />
      </div>
    </div>
  );
};

export default SearchPage;
