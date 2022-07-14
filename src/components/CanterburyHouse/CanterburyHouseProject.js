import React, { useState } from "react";
import "./CanterburyHouseProject.css";
import CanterburyHouseSlider from "./CanterburyHouseSlider";
import ProjectDescription from "../ProjectDescription";

function CanterburyHouseProject() {
  const [isHoveringCanterburyHouse, setIsHoveringCanterburyHouse] = useState(false);
  const [hideTitleCanterburyHouse, setHideTitleCanterburyHouse] = useState(true);

  function handleMouseEnterCanterburyHouse() {
    setIsHoveringCanterburyHouse(true);
    setHideTitleCanterburyHouse(false);
    console.log("hovering - show description");
  }

  function handleMouseLeaveCanterburyHouse() {
    setIsHoveringCanterburyHouse(false);
    setHideTitleCanterburyHouse(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider-canterburyHouse">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringCanterburyHouse ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc-canterburyHouse">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-canterburyHouse">
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
              <div className="projectDescriptionLong-canterburyHouse">
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
              ${hideTitleCanterburyHouse ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock-canterburyHouse">
              <p className="projectAddress">Canterbury House, -</p>
            </div>
          </div>
        </div>

        <div
          className="canterburyHouseSlider"
          onMouseEnter={handleMouseEnterCanterburyHouse}
          onMouseLeave={handleMouseLeaveCanterburyHouse}
        >
          <CanterburyHouseSlider />
        </div>
      </div>
    </div>
  );
}

export default CanterburyHouseProject;