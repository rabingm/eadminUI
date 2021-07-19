import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const CategoryModalBox = ({ show, children, toggleModal }) => {
	return (
		<Modal show={show} onHide={toggleModal} backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>Edit Category</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button variant="waring" onClick={toggleModal}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export const MessageModalBox = ({ show, children, toggleModal }) => {
	return (
		<Modal show={show} onHide={toggleModal} backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>Messages</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button variant="waring" onClick={toggleModal}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

