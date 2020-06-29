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
import { AuthenticationContext } from "./common/authentication/context";

const DeleteEvent = ({ open, setIsDeleteModalOpen, setAllEvents }) => {
  const close = () => {
    setIsDeleteModalOpen(false);
  };

  const { deleteEvent, state } = useContext(AuthenticationContext);

  const [eventDeleted, setEventDeleted] = useState(false);

  const handleDeleteEvent = async e => {
    e.preventDefault();

    const user = state.userId;
    // const eventsList = await createEvent(
    //   title,
    //   date,
    //   location,
    //   value,
    //   notes,
    //   user
    // );
    setEventDeleted(true);
    // setAllEvents(eventsList);
    close();
  };

  return (
    <Modal
      onClose={() => setIsDeleteModalOpen(false)}
      closeable
      isOpen={open}
      animate
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Dialog: {
          style: {
            width: "40vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column"
          }
        }
      }}
    >
      <ModalHeader>Remove event</ModalHeader>
      <ModalBody>
        This will permanently remove the event from your calendar.
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={ButtonKind.tertiary} onClick={close}>
          Cancel
        </ModalButton>
        <ModalButton onClick={handleDeleteEvent}>Remove</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteEvent;
