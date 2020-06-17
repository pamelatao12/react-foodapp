import React, { useState } from "react";
// import styles from "./addEventForm.css";
import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { TimePicker } from "baseui/timepicker";
import { TimezonePicker } from "baseui/timezonepicker";
import { Input } from "baseui/input";
import { Select } from "baseui/select";

const AddEventForm = () => {
  const [css, theme] = useStyletron();
  const [date, setDate] = useState(null);
  const [zone, setZone] = useState(null);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState([]);

  return (
    <div className={css({})}>
      <div
        className={css({
          fontWeight: "bold",
          marginBottom: "5px",
          marginTop: "10px"
        })}
      >
        Event title
      </div>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <div
        className={css({
          fontWeight: "bold",
          marginBottom: "5px",
          marginTop: "10px"
        })}
      >
        Location
      </div>
      <Input
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Add location"
        startEnhancer="📍"
      />
      <div
        className={css({
          display: "flex",
          flexDirection: "row"
        })}
      >
        <div className={css({ display: "flex", marginTop: "5px" })}>
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
      <div
        className={css({
          fontWeight: "bold",
          marginBottom: "5px"
        })}
      >
        Invite friends
      </div>
      <Select
        creatable
        multi
        options={[
          { id: "Friend", label: "Friend" },
          { id: "Friend2", label: "Friend2" },
          { id: "FirstLast", label: "FirstLast" },
          { id: "Name", label: "Name" },
          { id: "Atlanta", label: "Atlanta" },
          { id: "SanFrancisco", label: "San Francisco" }
        ]}
        labelKey="label"
        valueKey="id"
        onChange={({ guests }) => setGuests(guests)}
        value={guests}
      />
      <div
        className={css({
          fontWeight: "bold",
          marginBottom: "5px",
          marginTop: "10px"
        })}
      >
        Notes
      </div>
      <Input
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder=""
        startEnhancer="📝"
      />
    </div>
  );
};

export default AddEventForm;
