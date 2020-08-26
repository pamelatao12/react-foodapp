import React, { useState } from "react";
import styles from "./eventCard.module.css";
import Popover, { ArrowContainer } from "react-tiny-popover";
import Moment from "react-moment";
import DeleteEvent from "./deleteEvent/DeleteEvent";
import EditEvent from "./editEvent/EditEvent";

const EventCard = ({ event, eventUID, options, setOptions }) => {
  const images = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg",
    "food5.jpg",
    "food6.jpg",
    "food7.jpg",
    "food8.jpg",
    "food9.jpg"
  ];

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventTBDeleted, setEventTBDeleted] = useState(undefined);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [eventTBEdited, setEventTBEdited] = useState(undefined);

  console.log(event);

  const popoverBody = <div>hi</div>;
  const [isVotePopoverOpen, setIsVotePopoverOpen] = useState(false);

  const changeBackgroundImg = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const toUpperCaseFilter = d => {
    return d.toUpperCase();
  };

  const openDeleteEventModal = () => {
    setIsDeleteModalOpen(true);
  };

  const openEditEventModal = () => {
    setIsEditModalOpen(true);
  };

  const votePopover = (
    <Popover
      className="popoverStyle"
      isOpen={isVotePopoverOpen}
      position={"bottom"}
      padding={10}
      onClickOutside={() => setIsVotePopoverOpen(false)}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={"#f7f7f7"}
          arrowSize={10}
          arrowStyle={{
            borderBottom: "10px solid darkgrey"
          }}
        >
          <div
            className="popoverContent"
            onClick={() => setIsVotePopoverOpen(!isVotePopoverOpen)}
          >
            <h2>Add to upcoming events:</h2>
            <ul className="eventsListPopover">
              <li className="eventPopover">Event 1</li>
              <li className="eventPopover">Event 2</li>
              <li className="eventPopover">Event 3</li>
              <li className="eventPopover">Event 1</li>
              <li className="eventPopover">Event 2</li>
              <li className="eventPopover">Event 3</li>
            </ul>
          </div>
        </ArrowContainer>
      )}
    >
      <button
        className={styles.eventActionBtn}
        onClick={() => setIsVotePopoverOpen(!isVotePopoverOpen)}
      >
        View Options
      </button>
    </Popover>
  );

  return (
    <div className={styles.eventCardWrapper}>
      <div
        className={styles.topHalf}
        style={{ backgroundImage: `url("/${changeBackgroundImg()}")` }}
      ></div>
      <button className={styles.editButton} onClick={openEditEventModal}>
        Edit
      </button>
      <EditEvent
        open={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        eventTBEdited={eventUID}
        event={event}
        options={options}
        setOptions={setOptions}
      />
      <button className={styles.deleteButton} onClick={openDeleteEventModal}>
        &times;
      </button>
      <DeleteEvent
        open={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        eventTBDeleted={eventUID}
      />
      <div className={styles.eventDate}>
        <h1 className={styles.dateHeader}>
          <Moment filter={toUpperCaseFilter} format="dddd">
            {event.date}
          </Moment>
        </h1>
        <p className={styles.month}>
          <Moment format="MMMM">{event.date}</Moment>
        </p>
        <p className={styles.day}>
          <Moment format="D">{event.date}</Moment>
        </p>
      </div>
      <div className={styles.eventDetailsWrapper}>
        <h1 className={styles.eventName}>{event.title}</h1>
        <p className={styles.eventDetails}>
          <span role="img">&#128337;</span>
          <Moment format="dddd, D MMMM YYYY | h:mmA">{event.date}</Moment>
        </p>
        <p className={styles.eventDetails}>
          <span role="img">&#128205; </span>
          {event.location === "" ? "TBD" : event.location}
          <span className={styles.eventActions}>{votePopover}</span>
        </p>
        <p className={styles.eventDetails}>
          <span role="img">👯</span>
          {event.guests === "" ? "TBD" : event.guests}
        </p>
        <p className={styles.eventDetails}>
          <span role="img">&#128221;</span>
          {event.notes}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
