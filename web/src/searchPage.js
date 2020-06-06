import React, { useState, useEffect } from "react";
import styles from "./searchPage.module.css";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Header from "./header";
import Filter from "./filter";
import RestaurantCard from "./restaurantCard";
import SortDropdown from "./sortDropdown";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

const SearchPage = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const [searchKeyword, setSearchKeyword] = useState(parsed.term);
  const [searchLocation, setSearchLocation] = useState(parsed.location);
  const [sortBy, setSortBy] = useState("best_match");
  console.log(sortBy);
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
        {/* <NavBar /> */}
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
          <div className={styles.sortBy}>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <ul className={styles.restaurantListUl}>
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
