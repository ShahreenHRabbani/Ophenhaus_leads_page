// import React from "react";
import { Col, Row } from "react-bootstrap";
import { Routes ,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// files
// import "./App.css";
import LeadComponent from "./Components/Leads/leadlist"
import LeadDetails from "./Components/LeadDetails/lead_details"




function App() {
  return ( 
    <Routes>
      <Route path="/"  element = {<LeadComponent/>} />
      <Route path="/:homebuyer_id/details" element = {<LeadDetails/>} />
    </Routes>
  );
}

export default App;
