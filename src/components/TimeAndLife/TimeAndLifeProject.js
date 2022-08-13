import React, { useState } from "react";
import "./TimeAndLifeProject.css";
import TimeAndLifeSlider from "./TimeAndLifeSlider";
import ProjectDescription from "../ProjectDescription";

function TimeAndLifeProject() {
  const [isHoveringTimeAndLife, setIsHoveringTimeAndLife] = useState(false);
  const [hideTitleTimeAndLife, setHideTitleTimeAndLife] = useState(true);

  function handleMouseEnterTimeAndLife() {
    setIsHoveringTimeAndLife(true);
    setHideTitleTimeAndLife(false);
    console.log("hovering - show description");
  }

  function handleMouseLeaveTimeAndLife() {
    setIsHoveringTimeAndLife(false);
    setHideTitleTimeAndLife(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider-timeAndLife">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringTimeAndLife ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc-timeAndLife">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-timeAndLife">
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
              <div className="projectDescriptionLong-timeAndLife">
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
              ${hideTitleTimeAndLife ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock-timeAndLife">
              <p className="projectAddress">Time and Life, Mayfair, London</p>
            </div>
          </div>
        </div>

        <div
          className="timeAndLifeSlider"
          onMouseEnter={handleMouseEnterTimeAndLife}
          onMouseLeave={handleMouseLeaveTimeAndLife}
        >
          <TimeAndLifeSlider />
        </div>
      </div>
    </div>
  );
}

export default TimeAndLifeProject;
