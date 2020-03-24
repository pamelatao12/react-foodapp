import React from "react";
import styles from "./carouselSingle.module.css";
import _ from "lodash";

const CarouselSingle = ({ restaurant }) => {
  const drawStarRating = _.times(restaurant.rating).map(i => {
    return (
      <div className={styles.star} key={i}>
        {String.fromCharCode(9733)}
      </div>
    );
  });

  return (
    <div className={styles.singleSlide}>
      <h2 className={styles.restaurantName}>{restaurant.name}</h2>
      <div className={styles.rating}>
        {drawStarRating}
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
