import React, { useState, useEffect, useContext } from "react";
import "./restaurantCard.css";
import Collapsible from "react-collapsible";
import Rating from "./rating";
import Popover, { ArrowContainer } from "react-tiny-popover";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { Input } from "baseui/input";
import { Block } from "baseui/block";
import CheckBox from "./checkbox";
import { AuthenticationContext } from "./common/authentication/context";

const RestaurantCard = ({ details, index }) => {
  const { state, allEvents } = useContext(AuthenticationContext);

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
  const restCategories = () => {
    let categories = "";
    details.categories.forEach(category => {
      if (categories === "") {
        categories += category.title;
      } else {
        categories += `, ${category.title}`;
      }
    });
    return categories;
  };

  const popoverBody = <div>hi</div>;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const triggerElement = (
    <>
      <div className="titleButtonWrapper">
        <h2 className="eventTitle">
          {index}. {details.name}
        </h2>
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
            <div className="tags">{restCategories()}</div>
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
    <>
      <div className="restaurantActionButtons">
        <StatefulPopover
          content={() => (
            <Block padding={"20px"}>
              Add to event:
              <br />
              {Object.keys(allEvents).map((event, i) => (
                <CheckBox
                  checked={false}
                  label={allEvents[event].title}
                  eventID={event}
                  key={i}
                />
              ))}
            </Block>
          )}
          showArrow
          dismissOnClickOutside
          placement={PLACEMENT.bottom}
        >
          <button className="addButton">+</button>
        </StatefulPopover>

        <button className="heartButton">&#9829;</button>
      </div>
      <Collapsible
        classParentString="collapsibleRestaurant"
        trigger={triggerElement}
        triggerTagName="div"
      >
        <div className="collapsibleRestaurantContent">
          <p className="reviewCollapsibleContent">{restaurantReview[0].text}</p>
          {restaurantReview[1] && (
            <p className="reviewCollapsibleContent">
              {restaurantReview[1].text}
            </p>
          )}{" "}
          {restaurantReview[2] && (
            <p className="reviewCollapsibleContent">
              {restaurantReview[2].text}
            </p>
          )}
          <a className="yelpLinkBtn" target="_blank" href={details.url}>
            See more on Yelp
          </a>
        </div>
      </Collapsible>
    </>
  );
};

export default RestaurantCard;
