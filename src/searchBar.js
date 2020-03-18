import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  // 1. set up searchKeywordState
  // 2. set a onChange handler to call setState method ^ when input is changed
  const history = useHistory();

  const [state, setState] = useState({
    searchKeyword: "",
    searchLocation: ""
  });

  const handleSearch = () => {
    // history.push("/search");

    history.push({
      pathname: "/search",
      search: `?keyword=${state.searchKeyword}&location=${state.searchLocation}`
    });
  };

  const onInputChange = event => {
    event.persist();
    setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className={styles.searchBar}>
      <p
        className={styles.searchFor}
        style={{ borderRadius: `10px 0px 0px 10px` }}
      >
        Find
      </p>
      <input
        name="searchKeyword"
        id={styles.searchKeyword}
        type="text"
        placeholder="Sushi... burgers... pasta..."
        onChange={onInputChange}
        value={state.searchKeyword}
      />
      <p
        id={styles.searchIn}
        className={styles.searchFor}
        style={{ borderRadius: `0px 0px 0px 0px` }}
      >
        in
      </p>
      <input
        name="searchLocation"
        id={styles.searchLocation}
        type="text"
        placeholder="New York City"
        onChange={onInputChange}
        value={state.searchLocation}
      />
      <button type="search" id={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
      {/* add dropdown "results for..." click to search instead of actual search
      button */}
    </div>
  );
};

export default SearchBar;
