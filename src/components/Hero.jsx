import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import sp from "../static/sp.jpg";
import "../static/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={6} className="hero-text">
            <h1 className="heading">Welcome to SolarRevolution: Illuminating a Greener Tomorrow</h1>
            <p className="subheading">
              Embark on a journey towards a sustainable and brighter future with
              SolarRevolution – your gateway to cutting-edge solar solutions. We
              are committed to ushering in a new era of clean energy, empowering
              individuals and businesses alike to harness the power of the sun.
            </p>
          </Col>
          <Col md={5} className="hero-image">
            <img src={sp} alt="Solar Panels" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
