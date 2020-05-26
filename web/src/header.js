import React, { useContext } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./common/authentication/context";

const Header = () => {
  const { signOut } = useContext(AuthenticationContext);

  return (
    <div className={styles.header}>
      <Link to="/events" className={styles.redirectHeaderButton}>
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
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Header;
