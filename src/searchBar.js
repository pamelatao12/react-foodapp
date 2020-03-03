import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <p className="searchFor" style={{ borderRadius: `10px 0px 0px 10px` }}>
        Find
      </p>
      <input
        id="searchKeyword"
        type="text"
        placeholder="Sushi... burgers... pasta..."
      />
      <p
        id="searchIn"
        className="searchFor"
        style={{ borderRadius: `0px 0px 0px 0px` }}
      >
        in
      </p>
      <input id="searchLocation" type="text" placeholder="New York City" />
      <button type="search" id="searchBtn">
        Search{" "}
      </button>
      {/* add dropdown "results for..." click to search instead of actual search
      button */}
    </div>
  );
};

export default SearchBar;
