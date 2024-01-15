import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../static/footer.css';

const Footer = () => {
  return (
    <footer >
      <Container>
        <Row>
          {/* Brand and Social Media Links */}
          <Col md={4}>
            <div className='footer-brand'>
              <h5 className='footer-brand h5'>Solar News</h5>
              <div className='footer-social-icons'>
                {/* Replace the social media links with actual links */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <div className='footer-quick-links'>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact Information */}
          <Col md={4}>
            <div className='footer-contact-info'>
              <h5>Contact Us</h5>
              <p>123 Street, City, Country</p>
              <p>Phone: +123 456 7890</p>
              <p>Email: info@example.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
