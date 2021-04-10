import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./login.style.css";

const initialState ={
  email: "",
  password: ""
} 

export const LoginForm = () => {
const [login, setLogin] = useState(initialState)


const handleOnChange = e =>{

  const {name, value} = e.target
 
  setLogin({
    ...login, 
    [name]: value,

    
  })
  
}

const handleOnSubmit = e =>{
  e.preventDefault()

  console.log(login)
      }




  return (
    <div className="login-form">
      <Card className="p-4">
      <Form onSubmit ={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          name="email"
          placeholder="Enter email" 
          onChange={handleOnChange}
          value={login.email}
          required/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          name="password"
          value={login.password} 
          onChange={handleOnChange}
          placeholder="Password" 
          required/>
          
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <a  href="password-reset" className= "text-right" >Forgot Password</a>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card>
    </div>
  );
};
