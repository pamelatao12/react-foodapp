import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div id={styles.header}>
      <div id={styles.user}>
        <img className={styles.circleCrop} src="./userPhoto.png" alt="user" />
        {/* <p id="accountHeader">My Account</p> */}
      </div>
    </div>
  );
};

export default Header;
