import React from "react";
import styles from "./filter.css";
import SearchCriteria from "./searchCriteria";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <h1 className={styles.filterHeader}>Refine search results:</h1>
      <div className={styles.filterSections}>
        <SearchCriteria />
      </div>
    </div>
  );
};

export default Filter;
