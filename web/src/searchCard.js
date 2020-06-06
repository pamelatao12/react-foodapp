import React from "react";
import SearchBar from "./searchBar";
import styles from "./searchCard.module.css";

const SearchCard = ({ img }) => {
  return (
    <div
      className={styles.search}
      style={{ backgroundImage: `url("/${img}")` }}
    >
      <img className={styles.siteLogo} src="./logo.png" alt="logo" />
      <SearchBar keyword="" location="" />
      {/* add dropdown "results for..." click to search instead of actual search
      button */}
    </div>
  );
};

export default SearchCard;
