import React, { useState } from "react";
import styles from "./eventCard.module.css";
import Popover, { ArrowContainer } from "react-tiny-popover";

const EventCard = () => {
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

  const popoverBody = <div>hi</div>;
  const [isFriendsPopoverOpen, setIsFriendsPopoverOpen] = useState(false);
  const [isVotePopoverOpen, setIsVotePopoverOpen] = useState(false);

  const changeBackgroundImg = () => {
    return images[Math.floor(Math.random() * images.length)];
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
        Vote
      </button>
    </Popover>
  );

  const friendsPopover = (
    <Popover
      className="popoverStyle"
      isOpen={isFriendsPopoverOpen}
      position={"bottom"}
      padding={10}
      onClickOutside={() => setIsFriendsPopoverOpen(false)}
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
            onClick={() => setIsFriendsPopoverOpen(!isFriendsPopoverOpen)}
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
        onClick={() => setIsFriendsPopoverOpen(!isFriendsPopoverOpen)}
      >
        Add friends!
      </button>
    </Popover>
  );

  return (
    <div className={styles.eventCardWrapper}>
      <div
        className={styles.topHalf}
        style={{ backgroundImage: `url("/${changeBackgroundImg()}")` }}
      ></div>
      <div className={styles.eventDate}>
        <h1 className={styles.dateHeader}>MONDAY</h1>
        <p className={styles.month}>May</p>
        <p className={styles.day}>10</p>
      </div>
      <div className={styles.eventDetailsWrapper}>
        <h1 className={styles.eventName}>Dinner with friends</h1>
        <p className={styles.eventDetails}>
          <span role="img">&#128337;</span> Friday, 17th August | 06:30 PM -
          08:30 PM
        </p>
        <p className={styles.eventDetails}>
          <span role="img">&#128205; </span>1234 56th St, New York, NY
        </p>
        <p className={styles.eventDetails}>
          <span role="img">&#128221;</span> Notes
        </p>
      </div>
      <div className={styles.eventActions}>
        {friendsPopover}
        {votePopover}
      </div>
    </div>
  );
};

export default EventCard;
