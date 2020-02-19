import React from "react";
import "./searchCard.css";

const SearchCard = ({ img }) => {
  return (
    <div className="search" style={{ backgroundImage: `url("/${img}")` }}>
      <img className="logo" src="./logo192.png" alt="logo" />
      <input
        id="searchKeyword"
        type="text"
        placeholder="Sushi... burgers... pasta..."
      />
      <button type="search" id="searchBtn">
        Search{" "}
      </button>
      {/* add dropdown "results for..." click to search instead of actual search
      button */}
    </div>
  );
};

export default SearchCard;
