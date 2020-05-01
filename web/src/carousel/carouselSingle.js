import React from "react";
import styles from "./carouselSingle.module.css";

import Rating from "../rating.js";

const CarouselSingle = ({ restaurant }) => {
  const restCategories = () => {
    let categories = "";
    restaurant.categories.forEach(category => {
      if (categories === "") {
        categories += category.title;
      } else {
        categories += `, ${category.title}`;
      }
    });
    return categories;
  };

  return (
    <div className={styles.singleSlide}>
      <h2 className={styles.restaurantName}>{restaurant.name}</h2>
      <div className={styles.rating}>
        <Rating restaurantRating={restaurant.rating} />
        <div className={styles.reviewCount}>{restaurant.review_count}</div>
      </div>
      <div className={styles.priceTags}>
        <p>{restaurant.price}&nbsp;&nbsp;</p>
        <p>{restCategories()}</p>
      </div>
    </div>
  );
};

export default CarouselSingle;
