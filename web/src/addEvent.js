import React, { useState, useContext } from "react";
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
import AddEventForm from "./addEventForm";
import { AuthenticationContext } from "./common/authentication/context";

const AddEvent = ({ open, setIsModalOpen, setAllEvents }) => {
  const close = () => {
    setIsModalOpen(false);
  };

  const { createEvent, state } = useContext(AuthenticationContext);

  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [value, setValue] = useState([]);

  const [eventCreated, setEventCreated] = useState(false);
  const inputsHaveError = false;

  const addEvent = async e => {
    e.preventDefault();

    let inputsHaveError = false;

    if (date === null || title === "") {
      inputsHaveError = true;
    } else {
      inputsHaveError = false;
    }

    if (inputsHaveError) {
      return;
    }

    const user = state.userId;
    const eventsList = await createEvent(
      title,
      date,
      location,
      value,
      notes,
      user
    );
    setEventCreated(true);
    setAllEvents(eventsList);
    close();
  };

  return (
    <Modal
      onClose={() => setIsModalOpen(false)}
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
      <ModalHeader>Add new event</ModalHeader>
      <ModalBody>
        <AddEventForm
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          location={location}
          setLocation={setLocation}
          value={value}
          setValue={setValue}
          notes={notes}
          setNotes={setNotes}
        />
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={ButtonKind.tertiary} onClick={close}>
          Cancel
        </ModalButton>
        <ModalButton onClick={addEvent}>Add</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default AddEvent;
