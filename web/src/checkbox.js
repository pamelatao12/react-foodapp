import React, { useState } from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";

const CheckBox = ({ checked, label, eventID }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <Checkbox
      checked={isChecked}
      onChange={e => setIsChecked(!isChecked)}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      {label}
    </Checkbox>
  );
};

export default CheckBox;
