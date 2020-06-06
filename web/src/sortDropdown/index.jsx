import React, { useState } from "react";
import Select from "react-select";
import styles from "./index.module.scss";

const SortDropdown = ({ sortBy, setSortBy }) => {
  const handleChange = selectedOption => {
    // event.persist();
    console.log("setting sort by value to:", selectedOption);
    setSortBy(selectedOption.value);
  };

  const options = [
    { value: "best_match", label: "Best Match" },
    { value: "rating", label: "Rating" },
    { value: "review_count", label: "Most Reviewed" },
    { value: "distance", label: "Distance" }
  ];

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      marginTop: 0,
      zIndex: 2
    }),
    container: (provided, state) => ({
      ...provided,
      width: 220
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: "grey"
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: "grey",
      boxShadow: "none"
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: 40,
      position: "default"
    })
  };

  console.log("sortBy", sortBy);
  return (
    <Select
      styles={customStyles}
      placeholder={
        sortBy === "best_match"
          ? "Best Match"
          : sortBy === "rating"
          ? "Rating"
          : sortBy === "review_count"
          ? "Most Reviewed"
          : "Distance"
      }
      value={sortBy}
      onChange={handleChange}
      options={options}
      isSearchable={false}
    />
    // <form>
    //   <label>
    //     <span className={styles.label}>SORT BY:</span>
    //     <select className={styles.dropdown} onChange={handleChange}>
    //       <option className={styles.dropdownOption} value="best_match">
    //         Best Match
    //       </option>
    //       <option className={styles.dropdownOption} value="rating">
    //         Rating
    //       </option>
    //       <option className={styles.dropdownOption} value="review_count">
    //         Most Reviewed
    //       </option>
    //       <option className={styles.dropdownOption} value="distance">
    //         Distance
    //       </option>
    //     </select>
    //   </label>
    // </form>
  );
};

export default SortDropdown;
