import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import NavBar from "./navBar";
import SearchCard from "./searchCard";
import Carousel from "./carousel";
import Calendar from "./calendar";

const App = () => {
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
    <div className="App">
      <SearchCard img={changeBackgroundImg()} />
      <Header />
      <NavBar />
      <Carousel />
      <Calendar />
    </div>
  );
};

export default App;
