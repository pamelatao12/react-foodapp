import React, { useState } from "react";
import styles from "./myEvents.module.css";
import Header from "./header";
import EventCard from "./eventCard";
import AddEvent from "./addEvent";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase";

const MyEvents = () => {
  const [upcomingEventsTab, setUpcomingEventsActive] = useState(true);
  const [pastEventsTab, setPastEventsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [upcomingEvents, setUpcomingEvents] = useState({
    event1: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    },
    event2: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    },
    event3: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    },
    event4: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    },
    event5: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    }
  });
  const [pastEvents, setPastEvents] = useState({
    event1: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    },
    event2: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    },
    event3: {
      name: "Dinner with David",
      date: "05102020",
      time: "06:30 PM"
    }
  });

  const handleEventClick = () => {
    setUpcomingEventsActive(!upcomingEventsTab);
    setPastEventsActive(!pastEventsTab);
  };

  const user = firebase.auth().currentUser;
  console.log("user: ", user);

  return upcomingEventsTab ? (
    <>
      <div className={styles.eventPageWrapper}>
        <Link to="/" className={styles.homeLogoButton}>
          <img className={styles.siteLogo} src="./logo.png" alt="logo" />
        </Link>
        <Header />
        <h1 className={styles.eventsH1}>Manage Events</h1>
        <div className={styles.eventsUl}>
          <button className={styles.eventH2Active} onClick={handleEventClick}>
            Upcoming Events
          </button>
          <button className={styles.eventsH2} onClick={handleEventClick}>
            Past Events
          </button>
          <button
            className={styles.addEventBtn}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            + Add Event
          </button>
          <AddEvent open={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
        <div className={styles.eventCards}>
          {Object.keys(upcomingEvents).map((event, i) => {
            return <EventCard key={i} />;
          })}
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
        <div className={styles.eventCards}>
          {Object.keys(pastEvents).map(event => {
            return <EventCard />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyEvents;
