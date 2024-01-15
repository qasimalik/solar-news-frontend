import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../static/feedbackform.css";

const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const bodyData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    console.log(bodyData);
    try {
      const response = await axios.post(
        "http://localhost:5000/feedbacks",
        bodyData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("feeback submitted successfully");
        e.target.reset();
      } else {
        toast.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      console.log(error);
    }
  };

  return (
    <div className="d-flex">
      <Card className="about-us">
        <Card.Body>
          <Card.Title className="aboutus-title" id="aboutus">About us</Card.Title>
          <p className="aboutus-content">
            Welcome to Solar News, where we are committed to shedding light on
            the latest developments, breakthroughs, and trends in the dynamic
            world of solar energy. As a dedicated team of solar enthusiasts and
            industry experts, we embark on a mission to inform, inspire, and
            empower our readers to navigate the ever-evolving landscape of
            sustainable energy.
            <br />
            <br />
            At Solar News, we believe in the transformative power of
            information. Our platform serves as a beacon, guiding you through
            the complexities of solar technology, policy changes, and the
            inspiring stories that showcase the impact of solar solutions on
            communities and the environment..
            <br />
            <br />
            As we navigate the exciting and transformative landscape of solar
            energy, Solar News invites you to be a part of this
            journey. Together, let's illuminate the path to a sustainable and
            solar-powered future.
            <br />
          </p>
        </Card.Body>
      </Card>
      <Card className="feedbackform">
        <Card.Body className="cardBody">
          <Card.Title className="feedback-title">Feedback</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>

            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" name="subject" required />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" name="message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeedbackForm;
