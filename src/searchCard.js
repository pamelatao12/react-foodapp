import React from "react";
import SearchBar from "./searchBar";
import "./searchCard.css";

const SearchCard = ({ img }) => {
  return (
    <div className="search" style={{ backgroundImage: `url("/${img}")` }}>
      <img className="siteLogo" src="./logo.png" alt="logo" />
      <SearchBar />
      {/* add dropdown "results for..." click to search instead of actual search
      button */}
    </div>
  );
};

export default SearchCard;
