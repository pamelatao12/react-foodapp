import React, { useState } from "react";
import "./searchCriteria.css";

const SearchCriteria = () => {
  return (
    <div className="searchCriteria">
      <h2 className="criteriaName">Neighborhood</h2>
      <label className="container">
        Chelsea
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        East Village
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Lower East Side
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Soho
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <h2 className="criteriaName">Cuisine</h2>
      <label className="container">
        American
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Chinese
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        French
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Japanese
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Thai
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default SearchCriteria;
