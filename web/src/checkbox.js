import React, { useState, useContext } from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { AuthenticationContext } from "./common/authentication/context";

const CheckBox = ({ checked, label, eventID, restaurantID }) => {
  const { state, setAllEvents } = useContext(AuthenticationContext);
  const [isChecked, setIsChecked] = useState(checked);

  const setRestaurantToEvent = async () => {
    if (!isChecked) {
      // add restaurant to event
      try {
        const response = await fetch(
          `http://localhost:4000/addrestauranttoevent?user=${state.userId}&event=${eventID}&restaurant=${restaurantID}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          }
        );
        const responseJson = await response.json();
        setAllEvents(responseJson);
      } catch (error) {
        console.log(error);
      }
    } else {
      // remove restaurant from event
      try {
        const response = await fetch(
          `http://localhost:4000/removerestaurantfromevent?user=${state.userId}&event=${eventID}&restaurant=${restaurantID}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          }
        );
        const responseJson = await response.json();
        setAllEvents(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Checkbox
      checked={isChecked}
      onChange={e => {
        setRestaurantToEvent();
        setIsChecked(!isChecked);
      }}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      {label}
    </Checkbox>
  );
};

export default CheckBox;
