import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteDialog = ({show, handleClose, onDelete}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Body>Are you sure you want to delete the selected Event?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDialog;