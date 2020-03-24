import React from "react";
import _ from "lodash";
import styles from "./rating.module.css";

const Rating = ({ restaurantRating }) => {
  const drawStarRating = _.times(restaurantRating).map(i => {
    return (
      <div className={styles.star} key={i}>
        {String.fromCharCode(9733)}
      </div>
    );
  });

  return drawStarRating;
};

export default Rating;
