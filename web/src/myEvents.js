import React, { useState } from "react";
import styles from "./myEvents.module.css";
import Header from "./header";
import EventCard from "./eventCard";

const MyEvents = () => {
  const [upcomingEvents, setUpcomingEventsActive] = useState(true);
  const [pastEvents, setPastEventsActive] = useState(false);

  const handleEventClick = () => {
    setUpcomingEventsActive(!upcomingEvents);
    setPastEventsActive(!pastEvents);
  };

  return upcomingEvents ? (
    <>
      <div className={styles.eventPageWrapper}>
        <img className={styles.siteLogo} src="./logo.png" alt="logo" />
        <Header />
        <h1 className={styles.eventsH1}>Manage Events</h1>
        <div className={styles.eventsUl}>
          <button className={styles.eventH2Active} onClick={handleEventClick}>
            Upcoming Events
          </button>
          <button className={styles.eventsH2} onClick={handleEventClick}>
            Past Events
          </button>
        </div>
        <div className={styles.eventCards}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className={styles.eventPageWrapper}>
        <img className={styles.siteLogo} src="./logo.png" alt="logo" />
        <Header />
        <h1 className={styles.eventsH1}>Manage Events</h1>
        <div className={styles.eventsUl}>
          <button className={styles.eventsH2} onClick={handleEventClick}>
            Upcoming Events
          </button>
          <button className={styles.eventH2Active} onClick={handleEventClick}>
            Past Events
          </button>
        </div>
      </div>
    </>
  );
};

export default MyEvents;
