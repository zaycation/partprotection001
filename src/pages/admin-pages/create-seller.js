import React from "react";
import {
  FaSearch,
  FaUserPlus,
  FaCog,
  FaBriefcase,
  FaSlidersH,
  FaChartBar,
  FaUnlockAlt,
  FaUserAlt,
  FaAngleDown,
} from "react-icons/fa";
import { Container, Row, Col, Image, Nav, Form, Button } from "react-bootstrap";
//import { RiFileExcel2Line } from "react-icons/ri";

import Logo from "../../images/pp-logo.png";

import "./admin.css";

const createseller = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={2} lg={2} xl={2} className="left-nav">
          <Nav
            defaultActiveKey="/home"
            className="d-flex flex-column align-items-start"
          >
            <Image src={Logo} rounded width="180px" className="mt-3 mb-3" />
            <Nav.Link
              eventKey="link-0"
              className="nav-link-txt"
              href="/admin-policy"
            >
              <FaSearch size={24} color="#84909B" className="me-2" />
              Policy Lookup
            </Nav.Link>
            <Nav.Link
              eventKey="link-1"
              className="nav-link-txt"
              href="/admin-usermgmt"
            >
              <FaUserPlus size={24} color="#84909B" className="me-2" />
              User Management
            </Nav.Link>
            <Nav.Link
              eventKey="link-2"
              className="nav-link-txt"
              href="/admin-createuser"
            >
              <FaCog size={24} color="#84909B" className="me-2" />
              Create User
            </Nav.Link>
            <Nav.Link
              eventKey="link-3"
              className="nav-link-txt left-nav-active"
              href="/admin-createseller"
            >
              <FaBriefcase size={24} color="#84909B" className="me-2" />
              Create Seller
            </Nav.Link>
            <Nav.Link
              eventKey="link-4"
              className="nav-link-txt"
              href="/admin-sellermgmt"
            >
              <FaSlidersH size={24} color="#84909B" className="me-2" />
              Seller Management
            </Nav.Link>
            <Nav.Link
              eventKey="link-5"
              className="nav-link-txt"
              href="/admin-functions"
            >
              <FaChartBar size={24} color="#84909B" className="me-2" />
              Admin Functions
            </Nav.Link>
            <Nav.Link
              eventKey="link-6"
              className="nav-link-txt"
              href="/privacy-policy"
            >
              <FaUnlockAlt size={24} color="#84909B" className="me-2" />
              Privacy Policy
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li" className="me-auto">
              <Nav.Link href="/home" className="nav-hdr">
                Create Seller
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" className="dealership">
                <FaChartBar
                  size={28}
                  color="#171717"
                  className="me-2 circular-icons"
                />
                Mimic Dealership
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" className="luck">
                <FaUserAlt
                  size={26}
                  color="#171717"
                  className="me-2 circular-icons"
                />
                Tyler Luck
                <FaAngleDown size={18} color="#84909b" className="ms-2" />
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Form className="mx-3 mt-3">
            <Row className="my-3">
              <Col>
                <Form.Label>Distributor</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select a Distributor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>DMS Integration</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select DMS Integration</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Default Vehicle Make</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Default Vehicle Make</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Form.Control placeholder="Dealership Name" />
              </Col>
              <Col>
                <Form.Control placeholder="Address 1" />
              </Col>
              <Col>
                <Form.Control placeholder="City" />
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
              <Col>
                <Form.Control placeholder="Phone Number" />
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Form.Control placeholder="Billing Address" />
              </Col>
              <Col>
                <Form.Control placeholder="Billing City" />
              </Col>
              <Col>
                <Form.Control placeholder="Billing State" />
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Form.Control placeholder="Billing Zip Code" />
              </Col>
              <Col>
                <Form.Control placeholder="DMS EWnrollment Fee" />
              </Col>
              <Col>
                <Form.Control placeholder="Monthly Program Fee" />
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Form.Control placeholder="PA Code ID" />
              </Col>
              <Col>
                <Form.Control placeholder="Accounting First Name" />
              </Col>
              <Col>
                <Form.Control placeholder="Accounting Last Name" />
              </Col>
            </Row>
            <Row className="my-3 mb-5">
              <Col>
                <Form.Control placeholder="Accounting Fax" />
              </Col>
              <Col>
                <Form.Control placeholder="Accounting Email Addres" />
              </Col>
              <Col>
                <Form.Control placeholder="Accounting Phone Number" />
              </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-center">
              <Button
                variant="outline-secondary"
                className="ms-3 me-3 user-mgmt-btn"
              >
                Cancel
              </Button>
              <Button
                variant="secondary"
                type="submit"
                className="user-mgmt-btn"
              >
                Update
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default createseller;
