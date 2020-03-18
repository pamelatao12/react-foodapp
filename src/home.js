import React from "react";
// import logo from "./logo.svg";
import styles from "./home.module.css";
import Header from "./header";
import NavBar from "./navBar";
import SearchCard from "./searchCard";
import Carousel from "./carousel/carousel";
import Calendar from "./homepageEvents/calendar";

const Home = () => {
  const images = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg",
    "food5.jpg"
  ];

  const changeBackgroundImg = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className={styles.App}>
      <SearchCard img={changeBackgroundImg()} />
      <Header />
      <NavBar />
      <Carousel />
      <Calendar />
    </div>
  );
};

export default Home;
