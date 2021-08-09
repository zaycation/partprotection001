import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./home.css";

const login = () => {
  return (
    <Container fluid className="hero-bg">
      <Row>
        <Col className="">
          <div className="hero-text-div">
            <h1 className="my-3 hero-header">
              Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum
            </h1>
            <p>
              Protecting vehicle owners for the road ahead, PartProtection
              presents a lifetime limited warranty that helps policy holders
              avoid unexpected, costly repairs on their new or pre-owned
              vehicle.
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default login;
