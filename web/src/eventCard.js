import React, { useState } from "react";
import styles from "./eventCard.module.css";

const EventCard = () => {
  const images = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg",
    "food5.jpg",
    "food6.jpg",
    "food7.jpg",
    "food8.jpg",
    "food9.jpg"
  ];

  const changeBackgroundImg = () => {
    return images[Math.floor(Math.random() * images.length)];
  };
  return (
    <div className={styles.eventCardWrapper}>
      <div
        className={styles.topHalf}
        style={{ backgroundImage: `url("/${changeBackgroundImg()}")` }}
      ></div>
      <div className={styles.eventDate}>
        <h1 className={styles.dateHeader}>MONDAY</h1>
        <p className={styles.month}>May</p>
        <p className={styles.day}>10</p>
      </div>
      <div className={styles.eventDetailsWrapper}>
        <h1 className={styles.eventName}>Dinner with friends</h1>
        <p className={styles.eventDetails}>
          &#128337; Friday, 17th August | 06:30 PM - 08:30 PM
        </p>
        <p className={styles.eventDetails}>
          &#128205; 1234 56th St, New York, NY
        </p>
        <p className={styles.eventDetails}>&#128221; Notes</p>
      </div>
    </div>
  );
};

export default EventCard;
