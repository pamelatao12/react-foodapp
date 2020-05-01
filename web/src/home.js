import React, { useState, useEffect } from "react";
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

  const [suggestedRestaurants, setSuggestedRestaurants] = useState(undefined);
  const [eventRestaurants, setEventRestaurants] = useState(undefined);

  const changeBackgroundImg = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const fetchData = async (term, location) => {
    try {
      const response = await fetch(
        `http://localhost:4000/search?term=${term}&location=${location}&limit=20`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const responseJson = await response.json();
      console.log("review data", responseJson.reviews);
      console.log("data was fetched", responseJson.search.business);
      // setFirstThreeReviews(responseJson.reviews);
      setSuggestedRestaurants(responseJson.search.business);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData("restaurants", "nyc");
  }, []);

  if (!suggestedRestaurants) {
    return <div />;
  }

  return (
    <div className={styles.App}>
      <SearchCard img={changeBackgroundImg()} />
      <Header />
      {/* <NavBar /> */}
      <Carousel restaurants={suggestedRestaurants} />
      <Calendar />
    </div>
  );
};

export default Home;
