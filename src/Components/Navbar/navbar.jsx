// import React from "react";
import { Col, Row } from "react-bootstrap";
//images
import openhausLogo from "../../Images/openhaus_logo.svg";

function Navbar() {
  return (
    <Row className="navbar">
      <Col></Col>
      <Col>
        <Logo />
      </Col>
      <Col>
        <BellIcon />
      </Col>
    </Row>
  );
}
function Logo() {
  return (
    <div>
      <img src={openhausLogo} alt="Openhaus" ></img>
    </div>
  );
}

function BellIcon() {
  return <div className="bell-icon">🔔</div>;
}

export default Navbar;
