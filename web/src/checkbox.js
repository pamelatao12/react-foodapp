import React, { useState } from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";

const CheckBox = ({ checked, label, eventID }) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const setRestaurantToEvent = () => {
    if (isChecked) {
      // add restaurant to event
    } else {
      // remove restaurant from event
    }
  };

  return (
    <Checkbox
      checked={isChecked}
      onChange={e => {
        setIsChecked(!isChecked);
        setRestaurantToEvent();
      }}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      {label}
    </Checkbox>
  );
};

export default CheckBox;
