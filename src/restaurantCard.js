import React, { useState } from "react";
import "./restaurantCard.css";
import Collapsible from "react-collapsible";

const RestaurantCard = () => {
  const triggerElement = (
    <>
      <p className="eventTitle">Restaurant Name 1</p>
    </>
  );
  return (
    <Collapsible trigger={triggerElement} triggerTagName="div">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
  );
};

export default RestaurantCard;
