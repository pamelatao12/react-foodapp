import React, { Component, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CarouselSet from "./carouselSet";
import styles from "./carousel.css";

const Carousel = () => {
  const [state, setState] = useState({
    restaurantSet: [
      ["rest1", "rest2", "rest3"],
      ["rest4", "rest5", "rest6"],
      ["rest7", "rest8", "rest9"]
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
    <div className={styles.carousel}>
      <p className={styles.header}>Suggested for You</p>

      <button className={styles.prevCarouselBtn} onClick={prevSet}>
        &#8249;
      </button>
      <button className={styles.nextCarouselBtn} onClick={nextSet}>
        &#8250;
      </button>

      <div className={styles.carouselView}>
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
            <div className={styles.carouselSet}>
              <CarouselSet viewSet={state.restaurantSet[state.index]} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Carousel;
