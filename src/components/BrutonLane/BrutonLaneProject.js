import React, { useState } from "react";
import "./BrutonLaneProject.css";
import BrutonLaneSlider from "./BrutonLaneSlider";
import ProjectDescription from "../ProjectDescription";

function BrutonLaneProject() {
  const [isHoveringBrutonLane, setIsHoveringBrutonLane] = useState(false);
  const [hideTitleBrutonLane, setHideTitleBrutonLane] = useState(true);

  function handleMouseEnterTimeAndLife() {
    setIsHoveringBrutonLane(true);
    setHideTitleBrutonLane(false);
    console.log("hovering - show description");
  }

  function handleMouseLeaveTimeAndLife() {
    setIsHoveringBrutonLane(false);
    setHideTitleBrutonLane(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider-brutonLane">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringBrutonLane ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc-brutonLane">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-brutonLane">
                <ProjectDescription
                  clientName="Lancer Asset Management"
                  architect="Horden Cherry Lee Architects"
                  projectStatus="Completed April 2017"
                  structuralEngineer="-"
                  servicesEngineer="FHP"
                  contractor="Overbury"
                  contractValue="£2.4m"
                />
              </div>
              <div className="projectDescriptionLong-brutonLane">
                <p>
                  Office refurbishment of a refurbishment of an early modernist
                  grade II* listed building of historic significance in Mayfair,
                  London. The building was designed by Sir Hugh Casson and
                  features works of art by Ben Nicolson and sculptures
                  integrated in the fabric of the building by Barbara Hepworth.
                  The scope included Cat A fit out of levels 2-4, remodelling of
                  the ground floor reception area and the design of a new
                  reception desk that incorporates the proportions, solid marble
                  slabs, and other materials found in the original interior
                  detailing.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`
              ${hideTitleBrutonLane ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock-brutonLane">
              <p className="projectAddress">Bruton Lane, -</p>
            </div>
          </div>
        </div>

        <div
          className="brutonLaneSlider"
          onMouseEnter={handleMouseEnterTimeAndLife}
          onMouseLeave={handleMouseLeaveTimeAndLife}
        >
          <BrutonLaneSlider />
        </div>
      </div>
    </div>
  );
}

export default BrutonLaneProject;