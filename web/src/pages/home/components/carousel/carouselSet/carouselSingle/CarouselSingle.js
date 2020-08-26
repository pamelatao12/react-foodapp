import React from "react";
import styles from "./carouselSingle.module.css";
import Rating from "../../../../../../common/components/rating/Rating";
import { Link, useHistory } from "react-router-dom";

const CarouselSingle = ({ restaurant }) => {
  const history = useHistory();

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

  const handleClick = e => {
    history.push({
      pathname: "/search",
      search: `?term=${restaurant.name}&location=${restaurant.location
        .address1 +
        " " +
        restaurant.location.city}`
    });
  };

  return (
    <div className={styles.singleSlide} onClick={handleClick}>
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
