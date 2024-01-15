import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../static/dashboard.css'; 

const Dashboard = () => {
  return (
    <Container>
      <h1 className="dashboard-title">ADMIN DASHBOARD</h1>
      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card className='admin-card'>
            <Card.Body>
              <Card.Title className='admin-card-title'>Add Article</Card.Title>
              <Card.Text className='admin-card-text'>
                Easily add new articles to keep your audience informed.
              </Card.Text>
              <Link className='admin-card-link' to="/admin/article">
                <Button className='admin-card-link-button' variant="primary">Go to Add Article</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className='admin-card'>
            <Card.Body>
              <Card.Title className='admin-card-title'>Post Video</Card.Title>
              <Card.Text className='admin-card-text'>
                Share engaging content by posting videos on your platform.
              </Card.Text>
              <Link className='admin-card-link' to="/admin/video">
                <Button className='admin-card-link-button' variant="primary">Go to Post Video</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
