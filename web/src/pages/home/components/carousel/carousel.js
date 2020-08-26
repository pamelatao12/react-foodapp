import React, { Component, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CarouselSet from "./carouselSet/CarouselSet";
import "./carousel.css";

const Carousel = restaurants => {
  const [state, setState] = useState({
    restaurantSet: [
      [
        restaurants.restaurants[0],
        restaurants.restaurants[1],
        restaurants.restaurants[2]
      ],
      [
        restaurants.restaurants[3],
        restaurants.restaurants[4],
        restaurants.restaurants[5]
      ],
      [
        restaurants.restaurants[6],
        restaurants.restaurants[7],
        restaurants.restaurants[8]
      ]
    ],
    index: 0,
    direction: "next"
  });

  const nextSet = () => {
    // set state
    setState(state => ({
      ...state,
      index: (state.index + 1) % state.restaurantSet.length,
      direction: "next"
    }));
  };

  const prevSet = () => {
    // set state
    setState(state => ({
      ...state,
      index:
        (state.index - 1 + state.restaurantSet.length) %
        state.restaurantSet.length,
      direction: "prev"
    }));
  };

  const transitionClassName =
    state.direction === "next" ? "setTransition" : "prevTransition";

  return (
    <div className="carousel">
      <p className="header">Suggested for You</p>

      <button className="prevCarouselBtn" onClick={prevSet}>
        &#8249;
      </button>
      <button className="nextCarouselBtn" onClick={nextSet}>
        &#8250;
      </button>

      <div className="carouselView">
        <TransitionGroup
          childFactory={child =>
            React.cloneElement(child, {
              classNames: transitionClassName
            })
          }
        >
          <CSSTransition
            key={state.index}
            timeout={1000}
            classNames={transitionClassName}
          >
            <div className="carouselSet">
              <CarouselSet viewSet={state.restaurantSet[state.index]} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Carousel;
