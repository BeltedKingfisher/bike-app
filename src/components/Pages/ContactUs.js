import { React, useState } from "react";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="myForm" controlId="validationCustom01">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Name" required />
        <Form.Control.Feedback type="invalid">
          Please provide your name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="myForm" controlId="validationCustom01">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="myForm" controlId="validationCustom01">
        <Form.Label>Write your message here...</Form.Label>
        <Form.Control as="textarea" rows={13} required />
        <Form.Control.Feedback type="invalid">
          Please provide a message.
        </Form.Control.Feedback>
      </Form.Group>
      <button className="button" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default ContactUs;
