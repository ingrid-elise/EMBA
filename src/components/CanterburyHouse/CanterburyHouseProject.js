import React, { useState } from "react";
import "./CanterburyHouseProject.css";
import "../MobileProjectDescription.css";
import CanterburyHouseSlider from "./CanterburyHouseSlider";
import ProjectDescription from "../ProjectDescription";

function CanterburyHouseProject() {
  const [isHoveringCanterburyHouse, setIsHoveringCanterburyHouse] =
    useState(false);
  const [hideTitleCanterburyHouse, setHideTitleCanterburyHouse] =
    useState(true);
  const [checked, setChecked] = useState(false);
  const [buttonText, setButtonText] = useState(false);

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

  // for mobile project description
  const handleMouseClickCH = (e) => {
    setChecked(!checked);
    changeButtonText();
    e.stopPropagation();
  };

  function changeButtonText() {
    setButtonText(!buttonText);
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
                  projectStatus="Planning Application 2017"
                  structuralEngineer="Robert Bird"
                  servicesEngineer="Foreman Roberts"
                  contractor="-"
                  contractValue="-"
                />
                <p className="projectDescriptionLong-canterburyHouse">
                  Concept and developed design for a new 33 storey high-rise
                  residential tower in Croydon’s core tall building zone. The
                  proposal incorporates 2 amenity floors as part of a ground
                  level entrance podium comprising additional restaurant and
                  retail uses. Externally, curved spandrel geometry is used to
                  visually offset the high-density massing. The project was
                  conceived in response to London’s emerging built to rent
                  property sector. An emphasis is placed on communal social
                  areas and integration with the urban realm at ground level
                  through provision of an active street frontage.
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
              <p className="projectAddress">
                Canterbury House, Croydon, London
              </p>
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

        {/* Project Description for Mobile */}
        <div className="projectDescriptionMobile">
          <div className="projectAddressBlock">
            <p className="projectAddress">Canterbury House, Croydon, London</p>
          </div>

          <div className="readMoreButtonDiv">
            <button className="readMoreButton" onClick={handleMouseClickCH}>
              {buttonText ? "-" : "+"}
            </button>
          </div>

          <div>
            <div
              id="projectDescriptionTextMobile"
              className={checked ? "show" : "hide"}
            >
              {/* project description */}
              <div>
                <ProjectDescription
                  clientName="Lancer Asset Management"
                  architect="Horden Cherry Lee Architects"
                  projectStatus="Planning Application 2017"
                  structuralEngineer="Robert Bird"
                  servicesEngineer="Foreman Roberts"
                  contractor="-"
                  contractValue="-"
                />
                <div className="projectDescriptionLong">
                  <p>
                    Concept and developed design for a new 33 storey high-rise
                    residential tower in Croydon’s core tall building zone. The
                    proposal incorporates 2 amenity floors as part of a ground
                    level entrance podium comprising additional restaurant and
                    retail uses. Externally, curved spandrel geometry is used to
                    visually offset the high-density massing. The project was
                    conceived in response to London’s emerging built to rent
                    property sector. An emphasis is placed on communal social
                    areas and integration with the urban realm at ground level
                    through provision of an active street frontage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanterburyHouseProject;
