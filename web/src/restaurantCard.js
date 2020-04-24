import React, { useState } from "react";
import "./restaurantCard.css";
import Collapsible from "react-collapsible";
import Rating from "./rating";

const RestaurantCard = ({ details, index }) => {
  const triggerElement = (
    <>
      <div className="titleButtonWrapper">
        <h2 className="eventTitle">
          {index}. {details.name}
        </h2>
        <div className="restaurantActionButtons">
          <button className="addButton">+</button>
          <button className="heartButton">&#9829;</button>
        </div>
      </div>
      <div className="ratingAddressWrapper">
        <div>
          <div className="rating">
            <Rating restaurantRating={details.rating} />
            <div className="reviewCount">{details.review_count}</div>
          </div>
          {/* todo: display categories separated by comma. use join(", ")? */}
          <div className="tags">{details.categories[0].title}</div>
        </div>
        <ul className="address">
          <li className="addressList">(718)123-4567</li>
          <li className="addressList">123 34th St</li>
          <li className="addressList">Koreatown</li>
        </ul>
      </div>
      <div className="seeReviewsButton">Reviews &#9663;</div>
    </>
  );

  return (
    <Collapsible
      classParentString="collapsibleRestaurant"
      trigger={triggerElement}
      triggerTagName="div"
    >
      <div className="collapsibleRestaurantContent">
        <p className="reviewCollapsibleContent">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className="reviewCollapsibleContent">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <p className="reviewCollapsibleContent">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </Collapsible>
  );
};

export default RestaurantCard;
