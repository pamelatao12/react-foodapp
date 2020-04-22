import React, { useState } from "react";
import styles from "./searchPage.module.css";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Header from "./header";
import Filter from "./filter";
import RestaurantCard from "./restaurantCard";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

const SearchPage = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const [state, setState] = useState({
    searchKeyword: parsed.keyword,
    searchLocation: parsed.location,
    searchResults: [
      {
        name: "The Halal Guys",
        rating: 4,
        price: "$",
        neighborhood: "chelsea",
        reviewCount: 820,
        tags: ["Mediterranean", "Food Cart"]
      },
      {
        name: "LoveMama",
        rating: 4.5,
        price: "$$",
        neighborhood: "chelsea",
        reviewCount: 1030,
        tags: ["Thai", "Malaysian"]
      },
      {
        name: "Tsurutontan Udon Noodle",
        rating: 5,
        price: "$$",
        neighborhood: "chelsea",
        reviewCount: 1870,
        tags: ["Japanese", "Noodles"]
      },
      {
        name: "Amelie",
        rating: 4.5,
        price: "$$",
        neighborhood: "chelsea",
        reviewCount: 820,
        tags: ["French", "Wine Bar"]
      },
      {
        name: "Rubirosa",
        rating: 5,
        price: "$$",
        neighborhood: "chelsea",
        reviewCount: 2310,
        tags: ["Italian", "Pizza"]
      }
    ]
  });

  return (
    <div
      className={styles.searchPage}
      style={{ backgroundImage: `url("/food5.jpg")` }}
    >
      <div className={styles.headerWrapper}>
        <Header />
        {/* <NavBar /> */}
        <Link to="/" className={styles.homeLogoButton}>
          <img className={styles.siteLogo} src="./logo.png" alt="logo" />
        </Link>
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
                <RestaurantCard details={restaurantDetail} index={i + 1} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
