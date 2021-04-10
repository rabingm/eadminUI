import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./passwordresetform.style.css";



export const PasswordResetForm = () => {
const [email, setEmail] = useState("")


const handleOnChange = e =>{

  const {value} = e.target
 
  setEmail(value)
  
}

const handleOnSubmit = e =>{
  e.preventDefault()

  console.log(email)
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
          value={email}
          required/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        

        <Button href="/" variant="primary" type="submit">
          Continue
        </Button>
      </Form>
      </Card>
    </div>
  );
};
