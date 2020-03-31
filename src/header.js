import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.redirectHeaderButton}>
        <button className={styles.redirectMyEventsBtn}>My Events</button>
      </Link>
      <Link to="/" className={styles.redirectHeaderButton}>
        <button className={styles.redirectMyRestaurantBtn}>
          My Restaurants
        </button>
      </Link>
      <div className={styles.user}>
        <img className={styles.circleCrop} src="./userPhoto.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
