import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import "../../static/readfeedbacks.css";

const Readfeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        "https://solar-news-backend.vercel.app/feedbacks/feedback"
      );
      const data = response.data;
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="f-container mt-5">
      <h2 className="f-h2">Feedback List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.subject}</td>
              <td>{feedback.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Readfeedbacks;
