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
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  Form,
  Table,
  Button,
} from "react-bootstrap";
import { RiFileExcel2Line } from "react-icons/ri";

import Logo from "../../images/pp-logo.png";

import "./admin.css";

const policylookup = () => {
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
              className="nav-link-txt left-nav-active"
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
              className="nav-link-txt"
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
                Policy Lookup
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
          <Form>
            <Row className="align-items-center">
              <Col sm={10} className="my-5">
                <Form.Control id="inlineFormInputName" placeholder="Search" />
              </Col>
              <Col xs="auto" className="my-1">
                <Button
                  type="submit"
                  className="export-btn d-flex align-items-center"
                >
                  Export to Excel{" "}
                  <RiFileExcel2Line
                    size={20}
                    className="ms-2"
                    color="#008000"
                  />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table bordered hover>
                  <thead className="pp-head">
                    <tr>
                      <th>Distributor</th>
                      <th>Dealership</th>
                      <th>Contact</th>
                      <th>Date Solid</th>
                      <th>Status</th>
                      <th>Vehicle</th>
                      <th>Vin</th>
                      <th>RO/Invoice #</th>
                      <th>Aul Recv...</th>
                      <th>Customer</th>
                      <th>Battery</th>
                      <th>Brakes</th>
                      <th>Brakes...</th>
                    </tr>
                  </thead>
                  <tbody className="pp-body">
                    <tr>
                      <td>Autonation</td>
                      <td>MINI of Las Vegas</td>
                      <td>AN065880W</td>
                      <td>07/27/2021</td>
                      <td>Solid</td>
                      <td>2015 MINI COOPHRDTP</td>
                      <td>WMWXP7C59F2A40407</td>
                      <td>185743</td>
                      <td>01/21/1990</td>
                      <td>RACHALLE MARIE HOLT</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default policylookup;
