import React from "react";
import styles from "./carouselSingle.module.css";

import Rating from "../rating.js";

const CarouselSingle = ({ restaurant }) => {
  return (
    <div className={styles.singleSlide}>
      <h2 className={styles.restaurantName}>{restaurant.name}</h2>
      <div className={styles.rating}>
        <Rating restaurantRating={restaurant.rating} />
        <div className={styles.reviewCount}>{restaurant.reviewCount}</div>
      </div>
      <div className={styles.priceTags}>
        <p>{restaurant.price}&nbsp;&nbsp;</p>
        <p>{restaurant.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default CarouselSingle;
