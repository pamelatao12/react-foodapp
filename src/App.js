import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import NavBar from "./navBar";
import SearchCard from "./searchCard";

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
  console.log(Math.random(0, images.length));
  console.log(changeBackgroundImg());

  return (
    <div className="App">
      <Header />
      <NavBar />
      <SearchCard img={changeBackgroundImg()} />
    </div>
  );
};

export default App;
