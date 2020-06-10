import React, { useState } from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";

const CheckBox = ({ checked }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <Checkbox
      checked={isChecked}
      onChange={e => setIsChecked(!isChecked)}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      Event 1
    </Checkbox>
  );
};

export default CheckBox;
