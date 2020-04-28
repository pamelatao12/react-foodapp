import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  // 1. set up searchKeywordState
  // 2. set a onChange handler to call setState method ^ when input is changed
  const history = useHistory();

  const [state, setState] = useState({
    term: "",
    location: ""
  });

  const handleSearch = e => {
    if (state.location === "") {
      e.preventDefault();
    }
    console.log("searching");
    // history.push("/search");
    history.push({
      pathname: "/search",
      search: `?term=${state.term}&location=${state.location}`
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
      <form className={styles.searchBarForm} onSubmit={handleSearch}>
        <p
          className={styles.searchFor}
          style={{ borderRadius: `10px 0px 0px 10px` }}
        >
          Find
        </p>
        <input
          name="term"
          id={styles.searchKeyword}
          type="text"
          placeholder="Sushi... burgers... pasta..."
          onChange={onInputChange}
          value={state.term}
        />
        <p
          id={styles.searchIn}
          className={styles.searchFor}
          style={{ borderRadius: `0px 0px 0px 0px` }}
        >
          in
        </p>
        <input
          name="location"
          id={styles.searchLocation}
          type="text"
          placeholder="New York City"
          onChange={onInputChange}
          value={state.location}
        />
        <button type="search" id={styles.searchBtn}>
          Search
        </button>
        {/* add dropdown "results for..." click to search instead of actual search
    button */}
      </form>
    </div>
  );
};

export default SearchBar;
