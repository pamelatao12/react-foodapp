import React from "react";
import Collapsible from "react-collapsible";
import "./eventPanel.css";

const EventPanel = ({ eventDetails }) => {
  const dateMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "Aug",
    "09": "Sept",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  };

  const date = eventDetails.date;

  const month = date.substring(0, 2);
  const day = date.substring(3, 5);
  const year = date.substring(6);

  const triggerElement = (
    <>
      <div className="date">
        <span className="binds"></span>
        <span className="month">{dateMap[month]}</span>
        {/* fill in event details with object values */}
        <h1 className="day">28</h1>
      </div>
      <p className="eventTitleCard">{eventDetails.title}</p>
    </>
  );
  return (
    <Collapsible
      classParentString="collapsibleEvent"
      trigger={triggerElement}
      triggerTagName="div"
    >
      <p className="collapsibleContent">
        Event details will appear here. Include restaurant details, maybe
        address, map image for location?
      </p>
    </Collapsible>
  );
};

export default EventPanel;
