import React, { Component, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CarouselSet from "./carouselSet";
import "./carousel.css";

const Carousel = () => {
  const [state, setState] = useState({
    restaurantSet: [
      [
        {
          name: "The Halal Guys",
          rating: 5,
          price: "$",
          reviewCount: 820,
          tags: ["Mediterranean", "Food Cart"]
        },
        {
          name: "LoveMama",
          rating: 4.5,
          price: "$$",
          reviewCount: 1030,
          tags: ["Thai", "Malaysian"]
        },
        {
          name: "Tsurutontan Udon Noodle",
          rating: 4,
          price: "$$",
          reviewCount: 1870,
          tags: ["Japanese", "Noodles"]
        }
      ],
      [
        {
          name: "Amelie",
          rating: 3.5,
          price: "$$",
          reviewCount: 820,
          tags: ["French", "Wine Bar"]
        },
        {
          name: "Rubirosa",
          rating: 3,
          price: "$$",
          reviewCount: 2310,
          tags: ["Italian", "Pizza"]
        },
        {
          name: "The Halal Guys",
          rating: 2.5,
          price: "$",
          reviewCount: 820,
          tags: ["Mediterranean", "Food Cart"]
        }
      ],
      [
        {
          name: "The Halal Guys",
          rating: 2,
          price: "$",
          reviewCount: 820,
          tags: ["Mediterranean", "Food Cart"]
        },
        {
          name: "The Halal Guys",
          rating: 1.5,
          price: "$",
          reviewCount: 820,
          tags: ["Mediterranean", "Food Cart"]
        },
        {
          name: "The Halal Guys",
          rating: 1,
          price: "$",
          reviewCount: 820,
          tags: ["Mediterranean", "Food Cart"]
        }
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
