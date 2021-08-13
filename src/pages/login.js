import React from "react";
//import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaLock, FaUserAlt } from "react-icons/fa";

import Nav from "../components/loginnav";
import Footer from "../components/footer";

import "./login.css";

const login = () => {
  return (
    <>
      <Nav />
      <Container fluid className="login-bg">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="login-box">
              <h2 className="login-header my-5">Log in</h2>

              <Form className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Username
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text
                      style={{ background: "white" }}
                      className="border-styling"
                    >
                      <FaUserAlt color="#a9a9a9" />
                    </InputGroup.Text>
                    <FormControl
                      id="inlineFormInputGroup"
                      placeholder="Username"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Password
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text
                      style={{ background: "white" }}
                      className="border-styling"
                    >
                      <FaLock color="#a9a9a9" />
                    </InputGroup.Text>
                    <FormControl
                      id="inlineFormInputGroup"
                      placeholder="Password"
                    />
                  </InputGroup>
                </Form.Group>
                <button type="button" className="pp-btn">
                  Log in
                </button>
                <br />
                <p className="mt-4 text-center pw-text">Forgot Password?</p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default login;
