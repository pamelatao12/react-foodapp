import React, { useState } from "react";
import CarouselSet from "./carouselSet";
import "./carousel.css";

const Carousel = () => {
  const [state, setState] = useState({
    restaurantSet: [["rest1", "rest2", "rest3"], ["rest4", "rest5", "rest6"]],
    index: 0
  });

  const nextSet = () => {
    // set state
    setState(state => ({
      ...state,
      index: (state.index + 1) % state.restaurantSet.length
    }));
  };

  const prevSet = () => {
    // set state
    setState(state => ({
      ...state,
      index:
        (state.index - 1 + state.restaurantSet.length) %
        state.restaurantSet.length
    }));
  };

  return (
    <div className="carousel">
      <p className="header">Suggested for You</p>
      <button className="prevCarouselBtn" onClick={prevSet}>
        &#8249;
      </button>
      <button className="nextCarouselBtn" onClick={nextSet}>
        &#8250;
      </button>
      <CarouselSet viewSet={state.restaurantSet[state.index]} />
    </div>
  );
};

export default Carousel;
