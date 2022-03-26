import React, { useState } from "react";
import "./FulhamRdProject.css";
import FulhamRdSlider from "./FulhamRdSlider";

function FulhamRdProject() {
  const [isHoveringFulhamRd, setIsHoveringFulhamRd] = useState(false);
  const [hideTitleFulhamRd, setHideTitleFulhamRd] = useState(true);

  function handleMouseEnterFulhamRd() {
    setIsHoveringFulhamRd(true);
    setHideTitleFulhamRd(false);
    console.log("hovering - show description");
  }

  function handleMouseLeaveFulhamRd() {
    setIsHoveringFulhamRd(false);
    setHideTitleFulhamRd(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringFulhamRd ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-FulhamRd">
                <div className="projectDescHeading">
                  <p className="descHeading">Client:</p>
                  <p className="descHeading">Architect:</p>
                  <p className="descHeading">Status:</p>
                  <p className="descHeading" id="descHeadingProjectTeam">Project Team:</p>
                  <p className="descHeading">Contractor:</p>
                  <p className="descHeading">Contract Value:</p>
                </div>
                <div className="projectDescInfo">
                  <p className="descInfo">Artemis One</p>
                  <p className="descInfo">Horden Cherry Lee Architects</p>
                  <p className="descInfo">Completed April 2018</p>
                  <p className="descInfo">Barrett Mahoney as Structural Engineer, EDP Environmental as M+E Engineer, Quoin as CDM Consultant</p><br />
                  <p className="descInfo">FCM Holdings</p>
                  <p className="descInfo">£1m</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`
              ${hideTitleFulhamRd ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock">
              <p className="projectAddress">Fulham Rd, London</p>
            </div>
          </div>
        </div>

        <div
          className="treehouseSlider"
          onMouseEnter={handleMouseEnterFulhamRd}
          onMouseLeave={handleMouseLeaveFulhamRd}
        >
          <FulhamRdSlider />
        </div>
      </div>
    </div>
  );
}

export default FulhamRdProject;
