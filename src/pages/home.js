import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

import "./home.css";

const home = () => {
  return (
    <>
      <Nav />
      <Container fluid className="hero-bg">
        <Row>
          <Col className="">
            <div className="hero-text-div">
              <h1 className="my-4 hero-header">We've got you covered</h1>
              <p className="my-5">
                Protecting vehicle owners for the road ahead, PartProtection
                presents a lifetime limited warranty that helps policy holders
                avoid unexpected, costly repairs on their new or pre-owned
                vehicle.
              </p>
              <Button variant="dark" className="learnmore-btn">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default home;
