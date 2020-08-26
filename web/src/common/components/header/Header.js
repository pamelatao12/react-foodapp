import React, { useContext } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../authentication/context";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { Input } from "baseui/input";
import { Block } from "baseui/block";
import { StatefulMenu } from "baseui/menu";

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
        <StatefulPopover
          content={() => (
            <StatefulMenu
              items={[{ label: "My Account" }, { label: "Sign Out" }]}
              onItemSelect={({ item }) => {
                if (item.label === "Sign Out") {
                  signOut();
                } else if (item.label === "My Account") {
                  //todo: navigate to account page
                }
              }}
            />
          )}
          showArrow
          dismissOnClickOutside
          placement={PLACEMENT.bottom}
        >
          <img className={styles.circleCrop} src="./userPhoto.png" alt="user" />
        </StatefulPopover>
      </div>
    </div>
  );
};

export default Header;
