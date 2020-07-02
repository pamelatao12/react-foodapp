import React, { useState, useContext } from "react";
import AddEventForm from "./addEventForm";
import moment from "moment";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { AuthenticationContext } from "./common/authentication/context";

const EditEvent = ({
  open,
  setIsEditModalOpen,
  eventTBEdited,
  setAllEvents,
  event,
  options,
  setOptions
}) => {
  const close = () => {
    setIsEditModalOpen(false);
  };

  const { state } = useContext(AuthenticationContext);

  const [date, setDate] = useState(() => {
    const dateObject = moment(event.date).toISOString();
    return new Date(dateObject);
  });
  const [title, setTitle] = useState(event.title);
  const [notes, setNotes] = useState(event.notes);
  const [location, setLocation] = useState(event.location);
  const [value, setValue] = useState(() => {
    let arr = [];
    event.guests.split(",").forEach(name => {
      options.forEach(option => {
        if (option.label === name) {
          arr.push(option);
        }
      });
    });
    return arr;
  });

  const handleEditEvent = async () => {
    try {
      const user = state.userId;
      const guestList = [];
      value.map(guest => {
        guestList.push(guest.id);
      });
      const response = await fetch(
        `http://localhost:4000/editEvent?user=${user}&event=${eventTBEdited}&title=${title}&date=${date}&notes=${notes}&guests=${guestList}&location=${location}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const responseJson = await response.json();
      console.log("new event list was fetched", responseJson);
      setAllEvents(responseJson);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      onClose={() => setIsEditModalOpen(false)}
      closeable
      isOpen={open}
      animate
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Dialog: {
          style: {
            width: "50vw",
            height: "80vh",
            display: "flex",
            flexDirection: "column"
          }
        }
      }}
    >
      <ModalHeader>Edit event</ModalHeader>
      <ModalBody>
        <AddEventForm
          date={date}
          setDate={setDate}
          title={title}
          setTitle={setTitle}
          notes={notes}
          setNotes={setNotes}
          location={location}
          setLocation={setLocation}
          value={value}
          setValue={setValue}
          options={options}
          setOptions={setOptions}
        />
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={ButtonKind.tertiary} onClick={close}>
          Cancel
        </ModalButton>
        <ModalButton onClick={handleEditEvent}>Save</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default EditEvent;
