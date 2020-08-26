import React, { useState, useEffect } from "react";
import styles from "./searchPage.module.css";
import SearchBar from "../../searchBar";
import Header from "../../header";
import Filter from "./components/filter/Filter";
import RestaurantCard from "./components/restaurantCard/RestaurantCard";
import SortDropdown from "./components/sortDropdown/SortDropdown";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

const SearchPage = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const [searchKeyword, setSearchKeyword] = useState(parsed.term);
  const [searchLocation, setSearchLocation] = useState(parsed.location);
  const [sortBy, setSortBy] = useState("best_match");
  const [data, setData] = useState(undefined);
  // const [reviews, setFirstThreeReviews] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/search?term=${searchKeyword}&location=${searchLocation}&sort_by=${sortBy}&limit=20`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const responseJson = await response.json();
      setLoading(false);
      console.log("review data", responseJson.reviews);
      console.log("data was fetched", responseJson.search.business);
      // setFirstThreeReviews(responseJson.reviews);
      setData(responseJson.search.business);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortBy]);

  if (!data) {
    return <div />;
  }

  return (
    <div
      className={styles.searchPage}
      style={{ backgroundImage: `url("/food5.jpg")` }}
    >
      <div className={styles.headerWrapper}>
        <Header />
        <Link to="/" className={styles.homeLogoButton}>
          <img className={styles.siteLogo} src="./logo.png" alt="logo" />
        </Link>
        <div className={styles.searchBar}>
          <SearchBar keyword={searchKeyword} location={searchLocation} />
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.filterWrapper}>
          <Filter />
        </div>
        <div className={styles.restaurantListWrapper}>
          <ul className={styles.restaurantListUl}>
            <div className={styles.sort}>
              <span className={styles.sortBy}>SORT BY:</span>{" "}
              <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
            </div>
            {data.map((restaurantDetail, i) => (
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
