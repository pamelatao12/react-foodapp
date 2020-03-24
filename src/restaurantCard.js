import React, { useState } from "react";
import "./restaurantCard.css";
import Collapsible from "react-collapsible";
import Rating from "./rating";

const RestaurantCard = ({ details }) => {
  const triggerElement = (
    <>
      <div className="titleButtonWrapper">
        <h2 className="eventTitle">{details.name}</h2>
        <div className="restaurantActionButtons">
          <button className="addButton">+</button>
          <button className="heartButton">&#9829;</button>
        </div>
      </div>
      <div className="rating">
        <Rating restaurantRating={details.rating} />
        <div className="reviewCount">{details.reviewCount}</div>
      </div>
    </>
  );

  return (
    <Collapsible
      classParentString="collapsibleRestaurant"
      trigger={triggerElement}
      triggerTagName="div"
    >
      <div className="collapsibleRestaurantContent">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </div>
    </Collapsible>
  );
};

export default RestaurantCard;
