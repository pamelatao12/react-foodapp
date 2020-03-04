import React from "react";
import "./filter.css";
import SearchCriteria from "./searchCriteria";

const Filter = () => {
  return (
    <div className="filter">
      <h1 className="filterHeader">Refine search results:</h1>
      <div className="filterSections">
        <SearchCriteria />
      </div>
    </div>
  );
};

export default Filter;
