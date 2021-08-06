import React from "react";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

import Logo from "../images/pp-logo.png";

const BootstrapNav = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/" className="">
          <Image src={Logo} rounded width="180px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <Nav.Link href="#policylookup">Policy Lookup</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.Link
              href="#login"
              className="d-flex align-items-center justify-contenr-center"
            >
              <FaUserAlt size={18} className="me-2" />
              Log In
            </Nav.Link>
            <Nav.Link
              href="#phonenumber"
              className="d-flex align-items-center justify-contenr-center"
            >
              <FaPhoneAlt size={18} className="me-2" />
              +1 (307) 699 - 9730
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNav;
