import React, { useState, useContext, useEffect } from "react";
import styles from "./myEvents.module.css";
import Header from "./header";
import EventCard from "./eventCard";
import AddEvent from "./addEvent";
import DeleteEvent from "./deleteEvent";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase";
import { AuthenticationContext } from "./common/authentication/context";

const MyEvents = () => {
  const { getEvents, state } = useContext(AuthenticationContext);

  const [options, setOptions] = useState([
    { id: "Friend", label: "Friend" },
    { id: "Friend2", label: "Friend2" },
    { id: "FirstLast", label: "FirstLast" },
    { id: "Name", label: "Name" },
    { id: "Atlanta", label: "Atlanta" },
    { id: "SanFrancisco", label: "San Francisco" }
  ]);

  const [upcomingEventsTab, setUpcomingEventsActive] = useState(true);
  const [pastEventsTab, setPastEventsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [allEvents, setAllEvents] = useState(undefined);

  const [upcomingEvents, setUpcomingEvents] = useState(undefined);
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

  const fetchEvents = async user => {
    try {
      const response = await fetch(
        `http://localhost:4000/eventList?user=${user}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const responseJson = await response.json();
      console.log("event list was fetched", responseJson);
      setAllEvents(responseJson);
      //split events in past and future events
    } catch (error) {
      console.log(error);
    }
  };

  const eventsList = () => {
    // todo: split events into past and future events
  };

  const handleEventClick = () => {
    setUpcomingEventsActive(!upcomingEventsTab);
    setPastEventsActive(!pastEventsTab);
  };

  const user = state.userId;
  console.log("user: ", user);

  useEffect(() => {
    fetchEvents(user);
  }, []);

  if (!allEvents && !upcomingEvents) {
    return (
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
  }

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
            ➕ Add Event
          </button>
          <AddEvent
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setAllEvents={setAllEvents}
            options={options}
            setOptions={setOptions}
          />
        </div>
        <div className={styles.eventCards}>
          {Object.keys(allEvents).map((event, i) => {
            return (
              <EventCard
                key={i}
                event={allEvents[event]}
                eventUID={event}
                setAllEvents={setAllEvents}
                options={options}
                setOptions={setOptions}
              />
            );
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
