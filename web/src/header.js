import React, { useContext } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./common/authentication/context";
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
              items={[
                { label: "My Account", href: "//www.example.com/apple" },
                { label: "Sign Out", href: "//www.example.com/apple" }
              ]}
              onItemSelect={({ item }) => {
                console.log("here is the item:", item.label);
                if (item.label === "Sign Out") {
                  signOut();
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
