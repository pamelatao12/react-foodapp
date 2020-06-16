import React, { useState } from "react";
// import styles from "./addEventForm.css";
import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { TimePicker } from "baseui/timepicker";
import { TimezonePicker } from "baseui/timezonepicker";
import { Input } from "baseui/input";

const AddEventForm = () => {
  const [css, theme] = useStyletron();
  const [date, setDate] = useState(null);
  const [zone, setZone] = useState(null);
  const [title, setTitle] = useState("");
  console.log("date is", date);

  return (
    <div className={css({})}>
      <div
        className={css({
          fontWeight: "bold",
          marginBottom: "5px"
        })}
      >
        Event Title
      </div>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <div
        className={css({
          display: "flex",
          flexDirection: "row"
        })}
      >
        <div className={css({ display: "flex" })}>
          <div
            className={css({
              width: "160px",
              marginRight: theme.sizing.scale300
            })}
          >
            <FormControl label="Date">
              <DatePicker
                value={date}
                placeholder="YYYY/MM/DD"
                onChange={({ date }) => setDate(date)}
              />
            </FormControl>
          </div>

          <div
            className={css({
              width: "120px",
              marginRight: theme.sizing.scale300
            })}
          >
            <FormControl label="Time">
              <TimePicker nullable value={date} onChange={setDate} />
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;
