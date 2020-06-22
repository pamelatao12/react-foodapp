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

const AddEvent = ({ open, setIsModalOpen }) => {
  const close = () => {
    setIsModalOpen(false);
  };

  const { createEvent } = useContext(AuthenticationContext);

  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState([]);

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

    await createEvent(title, date, location, guests, notes);
    setEventCreated(true);
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
          guests={guests}
          setGuests={setGuests}
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
