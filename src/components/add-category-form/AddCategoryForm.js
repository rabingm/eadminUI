import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, Button, Spinner, Alert } from "react-bootstrap";


import { addNewCategory } from "../../pages/category/categoryAction.js";



const initialState ={
  name:"",
  parentCat:0
}
export const AddCategoryForm = () => {
  const dispatch = useDispatch()
const [category, setCategory] = useState(initialState)

const {isLoading, status, message} = useSelector (state => state.category)

// const [category, setCategory] = uCeState(initialState);

const handleOnChange = e =>{
  const {name, value} = e.target
setCategory({
  ...category,
  [name]: value,
})

}

const handleOnSubmit = e =>{
  e.preventDefault()
  dispatch(addNewCategory(category))

}

  return (
    <div className="add-category-form">

      {
        isLoading && (<Spinner varient="primary" animation = "Border"></Spinner>
        )}

      {
        message && (<Alert varient = {status ==='success' ? 'success' : 'danger'}> {message}</Alert>
        )}

      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="">
            <Form.Label>New Category</Form.Label>
            <Form.Control
            name="name" 
            value={category.name}
            onChange={handleOnChange}
            type="text" 
            placeholder="Enter New Category" 
            required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Select Parent Category</Form.Label>
            <Form.Control as="select" name="parentCat" 
            onChange={handleOnChange}
            defaultValue={category.parentCat}>

              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
         
        </Form.Row>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
