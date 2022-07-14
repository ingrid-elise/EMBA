import React, { useState } from "react";
import "./GreenSquareProject.css";
import GreenSquareSlider from "./GreenSquareSlider";
import ProjectDescription from "../ProjectDescription";

function GreenSquareProject() {
  const [isHoveringGreenSquare, setIsHoveringGreenSquare] = useState(false);
  const [hideTitleGreenSquare, setHideTitleGreenSquare] = useState(true);

  function handleMouseEnterGreenSquare() {
    setIsHoveringGreenSquare(true);
    setHideTitleGreenSquare(false);
    console.log("hovering - show description");
  }

  function handleMouseLeaveGreenSquare() {
    setIsHoveringGreenSquare(false);
    setHideTitleGreenSquare(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider-greenSquare">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringGreenSquare ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc-greenSquare">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-greenSquare">
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
              <div className="projectDescriptionLong-greenSquare">
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
              ${hideTitleGreenSquare ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock-greenSquare">
              <p className="projectAddress">Green Square, -</p>
            </div>
          </div>
        </div>

        <div
          className="greenSquareSlider"
          onMouseEnter={handleMouseEnterGreenSquare}
          onMouseLeave={handleMouseLeaveGreenSquare}
        >
          <GreenSquareSlider />
        </div>
      </div>
    </div>
  );
}

export default GreenSquareProject;
