import React, { Children, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalBox = ({show, children, toggleModal }) => {
return(
    
      <Modal show={show} onHide={toggleModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
)
}; 

export default ModalBox;
