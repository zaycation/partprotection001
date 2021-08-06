import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./home.css";

const home = () => {
  return (
    <Container fluid className="hero-bg">
      <Row>
        <Col className="" xs={12} sm={12} md={6} lg={7} xl={7}>
          <div>
            <h1 className="my-3 hero-header">
              Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum
            </h1>
            <p>
              Protecting vehicle owners for the road ahead, PartProtection
              presents a lifetime limited warranty that helps policy holders
              avoid unexpected, costly repairs on their new or pre-owned
              vehicle.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5} xl={5}>
          <p> </p>
        </Col>
      </Row>
    </Container>
  );
};

export default home;
