import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./login.css";

const login = () => {
  return (
    <Container fluid className="hero-bg">
      <Row>
        <Col className="">
          <h1>Login</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default login;
