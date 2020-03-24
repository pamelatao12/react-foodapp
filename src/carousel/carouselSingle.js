import React from "react";
import styles from "./carouselSingle.module.css";

const CarouselSingle = ({ restaurant }) => {
  return (
    <div className={styles.singleSlide}>
      <p>{restaurant.name}</p>
      <p>{restaurant.price}</p>
    </div>
  );
};

export default CarouselSingle;
