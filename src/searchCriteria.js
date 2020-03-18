import React, { useState } from "react";
import styles from "./searchCriteria.module.css";

const SearchCriteria = () => {
  return (
    <div className={styles.searchCriteria}>
      <h2 className={styles.criteriaName}>Neighborhood</h2>
      <label className={styles.container}>
        Chelsea
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        East Village
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Lower East Side
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Soho
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <h2 className={styles.criteriaName}>Cuisine</h2>
      <label className={styles.container}>
        American
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Chinese
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        French
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Japanese
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <label className={styles.container}>
        Thai
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default SearchCriteria;
