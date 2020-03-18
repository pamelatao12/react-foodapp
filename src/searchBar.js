import React from "react";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <p
        className={styles.searchFor}
        style={{ borderRadius: `10px 0px 0px 10px` }}
      >
        Find
      </p>
      <input
        id={styles.searchKeyword}
        type="text"
        placeholder="Sushi... burgers... pasta..."
      />
      <p
        id={styles.searchIn}
        className={styles.searchFor}
        style={{ borderRadius: `0px 0px 0px 0px` }}
      >
        in
      </p>
      <input
        id={styles.searchLocation}
        type="text"
        placeholder="New York City"
      />
      <button type="search" id={styles.searchBtn}>
        Search{" "}
      </button>
      {/* add dropdown "results for..." click to search instead of actual search
      button */}
    </div>
  );
};

export default SearchBar;
