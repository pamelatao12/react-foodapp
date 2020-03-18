import React from "react";
import styles from "./carouselSingle.module.css";

const CarouselSingle = ({ restaurant }) => {
  return (
    <div className={styles.singleSlide}>
      <p>{restaurant}</p>
      <p>$$$</p>
    </div>
  );
};

export default CarouselSingle;
