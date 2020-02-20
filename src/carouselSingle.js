import React from "react";
import "./carouselSingle.css";

const CarouselSingle = ({ restaurant }) => {
  return (
    <div className="singleSlide">
      <p>{restaurant}</p>
      <p>$$$</p>
    </div>
  );
};

export default CarouselSingle;
