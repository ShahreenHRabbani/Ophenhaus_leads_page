import "./leadlist.css";

function LeadsComponent({
  name,
  time,
  projectlist,
  hostname,
  host_number,
  date,
  lead_priority,
}) {
  const project_name_list = projectlist.map((project) => {
    return project.name;
  });

  return (
    <>
      <div className={lead_priority + "-lead main-card "}>
        <div className="main-card-body">
          <div className="card-header">
            <div className="name">{name}</div>
            <div className="time">{time}</div>
          </div>
          <div className="card-mainbody">
            <ul className="card-list">
              {project_name_list.map((item, index) => (
                <b className="card-item"> {item} </b>
              ))}
            </ul>
          </div>
          <div className="card-footer">
            <row className="lead-source">
              <span>Direct -</span>
              <b className="lead-name">{hostname}</b>
            </row>
            <row>
              <div className="card-date">
                <span className="ophs-icon icon-call"></span>
                <span className="date">{date}</span>
              </div>
              <div className="card-contact">
                <a className="btn btn-primary" href={"tel:+"+host_number}>
                  {/* <span className="ophs-icon icon-call">{FaEnvelope}</span> */}
                  <span className="btn-txt">Lead</span>
                </a>
              </div>
            </row>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadsComponent;
