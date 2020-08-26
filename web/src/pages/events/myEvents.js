import React, { useState, useContext, useEffect } from "react";
import styles from "./myEvents.module.css";
import moment from "moment";
import Header from "../../common/components/header/Header";
import EventCard from "./components/eventCard/EventCard";
import AddEvent from "./components/addEvent/AddEvent";
import DeleteEvent from "./components/eventCard/deleteEvent/DeleteEvent";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase";
import { AuthenticationContext } from "../../common/authentication/context";

const MyEvents = () => {
  const { state, setState, allEvents, setAllEvents } = useContext(
    AuthenticationContext
  );

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
  console.log(allEvents);
  // const [allEvents, setAllEvents] = useState(undefined);

  const handleEventClick = () => {
    setUpcomingEventsActive(!upcomingEventsTab);
    setPastEventsActive(!pastEventsTab);
  };

  const user = state.userId;
  console.log("user: ", user);

  // useEffect(() => {
  //   fetchEvents(user);
  // }, []);

  if (!allEvents) {
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
            options={options}
            setOptions={setOptions}
          />
        </div>
        <div className={styles.eventCards}>
          {Object.keys(allEvents).map((event, i) => {
            const today = new Date();
            const eventDate = new Date(
              moment(allEvents[event].date).toISOString()
            );
            console.log(today, eventDate, eventDate >= today);
            if (eventDate >= today) {
              return (
                <EventCard
                  key={i}
                  event={allEvents[event]}
                  eventUID={event}
                  options={options}
                  setOptions={setOptions}
                />
              );
            }
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
          <button
            className={styles.addEventBtn}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            ➕ Add Event
          </button>
          <AddEvent
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            options={options}
            setOptions={setOptions}
          />
        </div>
        <div className={styles.eventCards}>
          {Object.keys(allEvents).map((event, i) => {
            const today = new Date();
            const eventDate = new Date(
              moment(allEvents[event].date).toISOString()
            );
            if (eventDate < today) {
              return (
                <EventCard
                  key={i}
                  event={allEvents[event]}
                  eventUID={event}
                  options={options}
                  setOptions={setOptions}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MyEvents;
