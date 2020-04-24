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

  const changeBackgroundImg = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  // const location = "NYC";
  // const keyword = "sushi";
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.yelp.com/v3/businesses/search?term=${keyword}&location=${location}`,
  //         {
  //           header: {
  //             Authorization:
  //               "Bearer 8NIWbBnXI2Nlb0Oe2x5AH8lodMz4PYRanGhWITmE9D_7HpaNvrLndT8ZTqifDvEKp6BM9jEA98-Az9C_2lqGNorKBg38lD_Vdr_VXZcFQ37AaU1_4_ekGIH5xR-WXnYx"
  //           }
  //         }
  //       );
  //       const responseJson = await response.json();
  //       setLoading(false);
  //       setData(responseJson);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //
  //   fetchData();
  // }, []);

  return (
    <div className={styles.App}>
      <SearchCard img={changeBackgroundImg()} />
      <Header />
      {/* <NavBar /> */}
      <Carousel />
      <Calendar />
    </div>
  );
};

export default Home;
