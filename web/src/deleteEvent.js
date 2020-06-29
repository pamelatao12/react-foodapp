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

const DeleteEvent = ({
  open,
  setIsDeleteModalOpen,
  eventTBDeleted,
  setAllEvents
}) => {
  const close = () => {
    setIsDeleteModalOpen(false);
  };

  const { state } = useContext(AuthenticationContext);

  const handleDeleteEvent = async () => {
    try {
      const user = state.userId;
      const response = await fetch(
        `http://localhost:4000/deleteEvent?user=${user}&event=${eventTBDeleted}`,
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
