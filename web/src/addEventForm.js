import React, { useState } from "react";
import styles from "./addEventForm.css";
import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { TimePicker } from "baseui/timepicker";
import { TimezonePicker } from "baseui/timezonepicker";

const AddEventForm = () => {
  const [css, theme] = useStyletron();
  const [date, setDate] = useState(undefined);
  const [zone, setZone] = useState(null);

  return (
    <div className={css({ display: "flex" })}>
      <div className={styles.form}>
        <input
          name="term"
          id={styles.input}
          type="text"
          placeholder="Sushi... burgers... pasta..."
          value="input"
        />
        <div
          className={css({
            display: "flex",
            flexDirection: "row"
          })}
        >
          <div
            className={css({
              width: "120px",
              marginRight: theme.sizing.scale300
            })}
          >
            <FormControl label="Date">
              <DatePicker value={date} onChange={({ date }) => setDate(date)} />
            </FormControl>
          </div>

          <div
            className={css({
              width: "120px",
              marginRight: theme.sizing.scale300
            })}
          >
            <FormControl label="Time">
              <TimePicker value={date} onChange={setDate} />
            </FormControl>
          </div>

          <div
            className={css({
              width: "340px"
            })}
          >
            <FormControl label="Timezone">
              <TimezonePicker
                date={date}
                value={zone && zone.id}
                onChange={setZone}
              />
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;
