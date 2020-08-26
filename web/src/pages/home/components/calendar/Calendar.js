import React, { useState } from "react";
import styles from "./calendar.module.css";
import EventPanel from "./eventPanel/EventPanel";

const Calendar = () => {
  const [state, setState] = useState({
    eventsList: [
      {
        title: "Dinner with David",
        date: "08-28-2020",
        time: "07:00",
        location: "Eleven Madison Park"
      },
      {
        title: "Dinner with Pamela",
        date: "09-02-2020",
        time: "6:30",
        location: "TBD"
      }
    ]
  });

  return (
    <div className={styles.calendar}>
      <h1>My events</h1>
      <div className={styles.events}>
        <ul className={styles.eventListUl}>
          {state.eventsList.map((eventDetail, i) => (
            <li className={styles.eventList} key={i}>
              <EventPanel eventDetails={eventDetail} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
