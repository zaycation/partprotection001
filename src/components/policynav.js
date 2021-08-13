import React from "react";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

import Logo from "../images/pp-logo.png";
import "./nav.css";

const PolicyNav = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/" className="">
          <Image src={Logo} rounded width="180px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <Nav.Link
              href="/policy-lookup"
              className="nav-txt me-4"
              style={{
                marginBottom: "-10px",
                borderBottom: "3px solid #1665A2",
              }}
            >
              Policy Lookup
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-txt me-4">
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="/login"
              className="d-flex align-items-center justify-contenr-center nav-txt me-4"
            >
              <FaUserAlt size={18} className="me-2 nav-icons" color="#1665a2" />
              Log In
            </Nav.Link>
            <Nav.Link
              href="tel:307-699-9730"
              className="d-flex align-items-center justify-contenr-center nav-txt me-4"
            >
              <FaPhoneAlt
                size={18}
                className="me-2 nav-icons"
                color="#1665a2"
              />
              +1 (307) 699 - 9730
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PolicyNav;
