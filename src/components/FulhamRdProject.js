import React, { useState } from "react";
import "./FulhamRdProject.css";
import FulhamRdSlider from "./FulhamRdSlider";
import ProjectDescription from "./ProjectDescription";

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
      <div className="descAndSlider-FulhamRd">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringFulhamRd ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc-FulhamRd">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-FulhamRd">
                <ProjectDescription
                  clientName="Artemis One"
                  architect="Horden Cherry Lee Architects"
                  projectStatus="Completed April 2018"
                  projectTeam="Barrett Mahoney, EDP Environmental, Quoin"
                  photographer="Dennis Gilbert"
                  contractor="FCM Holdings"
                  contractValue="£1m"
                />
              </div>
              <div className="projectDescriptionLong-fulhamRd">
                <p>
                  A contemporary new build residential development comprising
                  two four-bedroom mews houses with basements in Fulham, London.
                  The constrained 218m2 former site of 6 derelict garages
                  dictated maximising the building envelope and required
                  overcoming technical and legal challenges. The building is
                  constructed in London stock brick and features a minimalist
                  aluminium framed glazed façade, fenestrated by a series of
                  shimmering solar panel privacy shutters. These have the dual
                  function of satisfying overlooking requirements and suppling
                  renewable energy for fifty percent of the houses total energy
                  consumption.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`
              ${hideTitleFulhamRd ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock-FulhamRd">
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
