// import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// files
import "./App.css";
import Leads from "./Components/Leads/Leadlist";
import Jsondata from "./Components/Leads/lead_list.json";

// images
import openhausLogo from "./Images/openhaus_logo.svg";

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
      <img src={openhausLogo} alt="Openhaus"></img>
    </div>
  );
}

function BellIcon() {
  return <div className="bell-icon">🔔</div>;
}

function formatTime(timeVal) {
  if (timeVal === 0) {
    return "";
  } else {
    const mins = Math.floor(timeVal / 60);
    const sec = timeVal - mins * 60;
    return `${mins}m ${sec}s`;
  }
}

function App() {
  const { host_country_code, host_phone_number, projects } = Jsondata;
  const host_number = host_country_code + host_phone_number;

  return (
    <>
      <div className="main-page">
        <div className="main-header">
          <Navbar />
        </div>
        <div className="main-body">
          <div></div>
          <div>
            <div className="leads">
              {Jsondata.map((item, index) => (
                <Leads
                  key={index}
                  name={item.homebuyer_name}
                  time={formatTime(item.elapsed_time_seconds)}
                  projectlist={item.projects}
                  hostname={item.host_name}
                  host_number={host_number}
                  date={item.last_used_at_human}
                  lead_priority={item.lead_priority}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
