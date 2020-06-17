import React, { useState } from "react";
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

const AddEvent = ({ open, setIsModalOpen }) => {
  const close = () => {
    setIsModalOpen(false);
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
        <AddEventForm />
      </ModalBody>
      <ModalFooter>
        <ModalButton kind={ButtonKind.tertiary} onClick={close}>
          Cancel
        </ModalButton>
        <ModalButton>Add</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default AddEvent;
