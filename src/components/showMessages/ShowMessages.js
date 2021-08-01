import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Col, Row, Button, Spinner, Alert } from "react-bootstrap";

import { categoryUpdate } from "../../pages/category/categoryAction";
import { toggleMessageModal } from "../../pages/contact/contactSlice";

import { MessageModalBox } from "../modal/ModalBox";

// const initialState = {
// 	name: "",
// 	parentCat: null,
// };

export const ListContact = () => {
	const dispatch = useDispatch();

	const {
		isLoading,
		// updateCatResponse,
		// selectedCategory,
		messageList,
		show

	} = useSelector(state => state.contact);

	console.log("from shoiw message", messageList[0])

	// const [category, setCategory] = useState(initialState);

	// useEffect(() => {
	// 	setCategory(selectedCategory);
	// }, [dispatch, selectedCategory]);

	// const handleOnChange = e => {
	// 	const { name, value } = e.target;
	// 	console.log(name, value);

	// 	setCategory({
	// 		...category,
	// 		[name]: value,
	// 	});
	// };

	const handleOnSubmit = e => {
		e.preventDefault();

		// const updateCat = {
		// 	_id: category._id,
		// 	name: category.name,
		// 	parentCat: category.parentCat ? category.parentCat : null,
		// };

		// console.log(updateCat);

		// dispatch(categoryUpdate(updateCat));
	};

	const toggleModal = e => {
		dispatch(toggleMessageModal());
	};

	return (
		<MessageModalBox show={show} toggleModal={toggleModal}>
			<div className="add-category-form">
				{/* {isLoading && <Spinner variant="primary" animation="border" />}

				{updateCatResponse?.message && (
					<Alert
						variant={
							updateCatResponse?.status === "success" ? "success" : "danger"
						}
					>
						{updateCatResponse?.message}
					</Alert>
				)} */}
				<Form onSubmit={handleOnSubmit}>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridState">
							<div
								as="select"
								name="parentCat"
								// onChange={handleOnChange}
								defaultValue={null}
							>
								{/* <option value={null}></option> */}

								{messageList?.map((row, i) => (
									<div>

										<span>
											<b class="font-weight-bold">From: </b> {row.name}
										</span>
										<br />
										<span>
											<b class="font-weight-bold">Email:</b> {row.email}
										</span>
										<br />
										<span>
											<b class="font-weight-bold">Phone: </b> {row.phone}
										</span>
										<hr />
										<span>
											<small>
												{row.text}
											</small>
										</span>
										<span>
										<button type="button" class="btn btn-light">Reply</button>
										</span>
										
										<hr />
										<hr />
									</div>
									// <Row>
									// <Col></Col>

									// 	<Col></Col>
									// </Row>

								))}
							</div>
						</Form.Group>
					</Form.Row>
				</Form>
			</div>
		</MessageModalBox>
	);
};
