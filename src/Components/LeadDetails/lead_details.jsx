import { useParams } from "react-router-dom";

import "./lead_details.css";
import Jsondata from "./homebuyer.json";

function LeadDetailsComponent() {
  function convertSecondsToTime(seconds) {
    if (typeof seconds !== "number" || isNaN(seconds) || seconds < 0) {
      return "Invalid input";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}min ${remainingSeconds}s`;
    return formattedTime;
  }
  const { homebuyer_id } = useParams();
  return (
    <>
      <div className="header header_section">
        <section>
          <div className="div_header">
            <nav className="back-section">
              <a href="http://localhost:5173" className="btn-icon btn-back">
                <span className="back-thik">Back</span>
              </a>
            </nav>
            <div className="profile-section">
              <a className="profile-link" href="/">
                <span className="profile-avatar">
                  {Jsondata.data.homebuyer_name.charAt(0)}
                  <i className="badge live-status-off"></i>
                </span>
                {Jsondata.data.homebuyer_name}
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="total-engagement-card">
        <div className="total-engagement-section">
          <div className="total-engagement-header">
            <span className="total-engagement-text">Total Engagement</span>
            <div className="total-engagement-time">
              {convertSecondsToTime(Jsondata.data.all_total_elapsed_time)}
            </div>
          </div>
          <div className="engagement-stat">
            <span className="engagement-stat-header">Most seen Units</span>
            <span className="engagement-stat-data">
              {Jsondata.data.projects[0]?.apartment_types[0]?.name}
            </span>
          </div>
          <div className="engagement-stat">
            <span className="engagement-stat-header">Most seen Amenities</span>
            <span className="engagement-stat-data">
              {Jsondata.data.projects[0].amenities[1]?.name}
            </span>
          </div>
          <div className="engagement-stat">
            <span className="engagement-stat-header">Budget</span>
            <span className="engagement-stat-data">-- to --</span>
          </div>
          <div className="engagement-stat">
            <span className="engagement-stat-header">Last engaged</span>
            <span className="engagement-stat-data">
              {Jsondata.data.recent_engagement}
            </span>
          </div>
          <div className="engagement-stat">
            <span className="engagement-stat-header">Lead source</span>
            <span className="engagement-stat-data">
              {Jsondata.data.host_name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default LeadDetailsComponent;
