import React from "react";
import _ from "lodash";
import styles from "./rating.module.css";

const Rating = ({ restaurantRating }) => {
  const drawStar = _.times(restaurantRating).map(i => {
    return (
      <div className={styles.filledStar} key={i}>
        {String.fromCharCode(9733)}
      </div>
    );
  });

  const drawHalfStar = () => {
    if (restaurantRating % 1 != 0) {
      return <div className={styles.halfStar}>{String.fromCharCode(9733)}</div>;
    }
  };

  const drawEmptyStar = _.times(5 - restaurantRating).map(i => {
    return (
      <div className={styles.star} key={i}>
        {String.fromCharCode(9733)}
      </div>
    );
  });

  return (
    <>
      {drawStar}
      {drawHalfStar()}
      {drawEmptyStar}
    </>
  );
};

export default Rating;
