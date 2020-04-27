import React, { useState, useEffect } from "react";
import "./restaurantCard.css";
import Collapsible from "react-collapsible";
import Rating from "./rating";
import Popover, { ArrowContainer } from "react-tiny-popover";

const RestaurantCard = ({ details, index }) => {
  const [restaurantReview, setReviews] = useState(details.reviews);
  const [loading, setLoading] = useState(true);

  // const fetchReviews = async () => {
  //   try {
  //     console.log("attempting to fetch", index);
  //     const response = await fetch(
  //       `http://localhost:4000/reviews?id=${details.alias}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json"
  //         }
  //       }
  //     );
  //     const responseJson = await response.json();
  //     setLoading(false);
  //     console.log("reviews received for", index, responseJson);
  //     setReviews(responseJson.reviews);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (!restaurantReview) {
  //     fetchReviews();
  //   }
  // }, []);

  const popoverBody = <div>hi</div>;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const triggerElement = (
    <>
      <div className="titleButtonWrapper">
        <h2 className="eventTitle">
          {index}. {details.name}
        </h2>
        <div className="restaurantActionButtons">
          <Popover
            className="popoverStyle"
            isOpen={isPopoverOpen}
            position={"bottom"}
            padding={10}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={({ position, targetRect, popoverRect }) => (
              <ArrowContainer
                position={position}
                targetRect={targetRect}
                popoverRect={popoverRect}
                arrowColor={"#f7f7f7"}
                arrowSize={10}
                arrowStyle={{
                  borderBottom: "10px solid darkgrey"
                }}
              >
                <div
                  className="popoverContent"
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  Hi! I'm popover content. Here's my position: {position}.
                </div>
              </ArrowContainer>
            )}
          >
            <button
              className="addButton"
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              +
            </button>
          </Popover>

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
        {restaurantReview[1] && (
          <p className="reviewCollapsibleContent">{restaurantReview[1].text}</p>
        )}{" "}
        {restaurantReview[2] && (
          <p className="reviewCollapsibleContent">{restaurantReview[2].text}</p>
        )}
        <a className="yelpLinkBtn" target="_blank" href={details.url}>
          See more on Yelp
        </a>
      </div>
    </Collapsible>
  );
};

export default RestaurantCard;
