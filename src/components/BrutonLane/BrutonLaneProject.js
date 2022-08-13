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
                  projectStatus="Tender 2017"
                  structuralEngineer="Price and Myers"
                  servicesEngineer="Hilson Moran"
                  contractor="-"
                  contractValue="£6.9m"
                />
              </div>
              <div className="projectDescriptionLong-brutonLane">
                <p>
                  A challenging, high-value, seven storey mixed use development
                  combining restaurant, office and residential uses on an
                  especially constrained site in Mayfair, London. The building’s
                  plan form is based on clear, rational geometry, using a
                  uniform square split diagonally to form an isosceles triangle
                  which orients the façade. This is extruded vertically to form
                  a solid slab massing that maximises the available site area
                  and potential building envelope. The design incorporates
                  modern minimal detailing with generous proportions and
                  travertine cladding to respond to the Georgian period stone
                  faced building’s that front Bruton Street and Berkeley Square.
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
              <p className="projectAddress">Bruton Lane, Mayfair, London</p>
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
