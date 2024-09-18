import React from "react";
import "./TenMain.css";
import MainRequest from "./MainRequest";

const TenMain = ({ showPopup, setShowPopup }) => {
  const data = [
    { Reason: "Burst pipe", Date: "2023-09-01", status: "Sent", time: "2:45pm" },
    { Reason: "Leaking roof", Date: "2023-09-02", status: "In Progress", time: "10:00am" },
    { Reason: "Clogged drain", Date: "2023-09-03", status: "Completed", time: "5:30pm" },
    { Reason: "Broken window", Date: "2023-09-04", status: "Pending", time: "1:15pm" },
  ];

  const handleRequestClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className={`TenantMainContainer ${showPopup ? "blur-background" : ""}`}>
        <div className="TenantMainContainerHeader">
          <div className="TenantMainContainerright">
            <h3>Maintenance Request</h3>
            <p>Keep track of maintenance requests on RentWave</p>
          </div>
        </div>

        <div className="TenantMainDown">
          <div className="TenantMaindowncon">
            <table>
              <thead>
                <tr className="TenantMainDownHeader">
                  <th className="TenMaincolumn1" style={{borderTopLeftRadius:"5px",width:"30%"}}>REASON</th>
                  <th className="TenMaincolumn">DATE</th>
                  <th className="TenMaincolumn">TIME</th>
                  <th className="TenMaincolumn"  style={{borderTopRightRadius:"5px"}}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="TenMaincolumn1"style={{width:"30%"}} >{item.Reason}</td>
                    <td className="TenMaincolumn" style={{width:"20%"}}>{item.Date}</td>
                    <td className="TenMaincolumn" style={{width:"20%"}}>{item.time}</td>
                    <td className="TenMaincolumn">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="TextMainInage">
            <button onClick={handleRequestClick}>Create New Request</button>
          </div>
        </div>
      </div>

      {showPopup && <MainRequest closePopup={() => setShowPopup(false)} />}
    </>
  );
};

export default TenMain;
