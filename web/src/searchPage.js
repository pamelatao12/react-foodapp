import React, { useState, useEffect } from "react";
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

  const [searchKeyword, setSearchKeyword] = useState(parsed.term);
  const [searchLocation, setSearchLocation] = useState(parsed.location);
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  // const [state, setState] = useState({
  //   searchResults: [
  //     {
  //       name: "The Halal Guys",
  //       rating: 4,
  //       price: "$",
  //       neighborhood: "chelsea",
  //       reviewCount: 820,
  //       tags: ["Mediterranean", "Food Cart"]
  //     },
  //     {
  //       name: "LoveMama",
  //       rating: 4.5,
  //       price: "$$",
  //       neighborhood: "chelsea",
  //       reviewCount: 1030,
  //       tags: ["Thai", "Malaysian"]
  //     },
  //     {
  //       name: "Tsurutontan Udon Noodle",
  //       rating: 5,
  //       price: "$$",
  //       neighborhood: "chelsea",
  //       reviewCount: 1870,
  //       tags: ["Japanese", "Noodles"]
  //     },
  //     {
  //       name: "Amelie",
  //       rating: 4.5,
  //       price: "$$",
  //       neighborhood: "chelsea",
  //       reviewCount: 820,
  //       tags: ["French", "Wine Bar"]
  //     },
  //     {
  //       name: "Rubirosa",
  //       rating: 5,
  //       price: "$$",
  //       neighborhood: "chelsea",
  //       reviewCount: 2310,
  //       tags: ["Italian", "Pizza"]
  //     }
  //   ]
  // });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/search?term=${searchKeyword}&location=${searchLocation}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const responseJson = await response.json();
      setLoading(false);
      console.log(responseJson);
      setData(responseJson.businesses);
    } catch (error) {
      console.log(error);
    }
  };
  //fetchData();
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

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
          <SearchBar />
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.filterWrapper}>
          <Filter />
        </div>
        <div className={styles.restaurantListWrapper}>
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
