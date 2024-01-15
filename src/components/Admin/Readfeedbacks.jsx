import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Readfeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('https://solar-news-backend.vercel.app/feedbacks/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error('Error fetching feedbacks:', error));
  }, []);

  return (
    <div className="f-container mt-5">
      <h2 className="text-center f-text">Feedback List</h2>
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
