import React, { useState, useEffect } from "react";
import "./restaurantCard.css";
import Collapsible from "react-collapsible";
import Rating from "./rating";

const RestaurantCard = ({ details, index, reviews }) => {
  const [restaurantReview, setReviews] = useState(reviews);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/reviews?id=${details.alias}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const responseJson = await response.json();
      setLoading(false);
      console.log("reviews received", responseJson);
      setReviews(responseJson.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!restaurantReview) {
      fetchReviews();
    }
  }, []);

  if (!restaurantReview) {
    return <div />;
  }

  const triggerElement = (
    <>
      <div className="titleButtonWrapper">
        <h2 className="eventTitle">
          {index}. {details.name}
        </h2>
        <div className="restaurantActionButtons">
          <button className="addButton">+</button>
          <button className="heartButton">&#9829;</button>
        </div>
      </div>
      <div className="ratingAddressWrapper">
        <div>
          <div className="rating">
            <Rating restaurantRating={details.rating} />
            <div className="reviewCount">{details.review_count}</div>
          </div>
          <div className="priceTags">
            <div className="price">{details.price}</div>
            {details.price && (
              <div className="separator">{String.fromCharCode(5867)}</div>
            )}
            {/* todo: display categories separated by comma. use join(", ")? */}
            <div className="tags">{details.categories[0].title}</div>
          </div>
        </div>
        <ul className="address">
          <li className="addressList">
            {details.phone &&
              "(" +
                details.phone.substring(2, 5) +
                ") " +
                details.phone.substring(5, 8) +
                "-" +
                details.phone.substring(8)}
          </li>
          <li className="addressList">{details.location.address1}</li>
          <li className="addressList">{details.location.city}</li>
          {/*use zip code to get neighborhood*/}
        </ul>
      </div>
      <div className="seeReviewsButton">Reviews &#9663;</div>
    </>
  );

  return (
    <Collapsible
      classParentString="collapsibleRestaurant"
      trigger={triggerElement}
      triggerTagName="div"
    >
      <div className="collapsibleRestaurantContent">
        <p className="reviewCollapsibleContent">{restaurantReview[0].text}</p>
        <p className="reviewCollapsibleContent">{restaurantReview[1].text}</p>
        <p className="reviewCollapsibleContent">{restaurantReview[2].text}</p>
      </div>
    </Collapsible>
  );
};

export default RestaurantCard;
