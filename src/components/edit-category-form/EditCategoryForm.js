import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";

import {
	addNewCategory,
	fetchCategories,
} from "../../pages/category/categoryAction";
import { toggleCategoryEditModal } from "../../pages/category/categorySlice";
import ModalBox from "../modal/ModalBox";

const initialState = {
	name: "",
	parentCat: ""
};

export const EditCategoryForm = ({ categoryEdit }) => {
	const dispatch = useDispatch();



	const { isLoading,status, categoryList, message, selectedCategory, show } = useSelector(
		state => state.category
	);
	const [category, setCategory] = useState(initialState);
	


	useEffect(() => {
		setCategory(selectedCategory);
	}, [dispatch, selectedCategory]);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setCategory({
			...category,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		// dispatch(addNewCategory(category));
		///we going to find the way to call our server

		console.log(category);
	};

	const toggleModal =e =>{
		dispatch(toggleCategoryEditModal())
	}


	return (
		<ModalBox
		show={show}
		toggleModal={toggleModal}
		>
		<div className="add-category-form">
			
			{isLoading && <Spinner variant="primary" animation="border" />}

			{message && (
				<Alert variant={status === "success" ? "success" : "danger"}>
					{message}
				</Alert>
			)}
			<Form onSubmit={handleOnSubmit}>
				<Form.Row>
					<Form.Group as={Col} controlId="">
						<Form.Control
							name="name"
							type="text"
							value={category.name}
							onChange={handleOnChange}
							placeholder="Enter New Category"
							required
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						
						<Form.Control
							as="select"
							name="parentCat"
							onChange={handleOnChange}
							defaultValue={category.parentCat}
						>
							<option>Choose...</option>
							{categoryList?.map((row, i) => (
								<option key={i} value={row._id}
								selected ={row._id === category.parentCat}>
									{row.name}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form.Row>
			</Form>
		</div>
		</ModalBox>
	);
};
