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
  Pagination,
} from "react-bootstrap";
import { RiFileExcel2Line } from "react-icons/ri";

import Logo from "../../images/pp-logo.png";

import "./admin.css";

const privacypolicy = () => {
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
              className="nav-link-txt left-nav-active"
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
                Privacy Policy
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
        </Col>
      </Row>
    </Container>
  );
};

export default privacypolicy;
