import React, { useState } from "react";
import "./ShellHarbourProject.css";
import ShellHarbourSlider from "./ShellHarbourSlider";
import ProjectDescription from "../ProjectDescription";

function ShellHarbourProject() {
  const [isHoveringShellHarbour, setIsHoveringShellHarbour] = useState(false);
  const [hideTitleShellHarbour, setHideTitleShellHarbour] = useState(true);

  function handleMouseEnterShellHarbour() {
    setIsHoveringShellHarbour(true);
    setHideTitleShellHarbour(false);
    console.log("hovering - show description");
  }

  function handleMouseLeaveShellHarbour() {
    setIsHoveringShellHarbour(false);
    setHideTitleShellHarbour(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider-shellHarbour">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringShellHarbour ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc-shellHarbour">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-shellHarbour">
                <ProjectDescription
                  clientName="Frasers Property"
                  architect="Smart Design Studio"
                  projectStatus="Under construction"
                  structuralEngineer="Wood and Grieve"
                  servicesEngineer="DSC"
                  contractor="Ganellen"
                  contractValue="-"
                />
              </div>
              <div className="projectDescriptionLong-shellHarbour">
                <p>
                  A prime location, large-scale, premium residential development
                  comprising 116 apartments split over two buildings with
                  rooftop gardens planned around a private central courtyard
                  piazza and pool. The project forms part of a wider masterplan
                  for the development of a new beach side community and marina
                  in Shell Cove Harbour, located south of Sydney. Located on a
                  promenade, the design of the building embodies a sense of
                  grandeur and has an intentionally striking form which
                  generates a commanding presence.
                </p>
                <p>
                  The architecture is informed by the waterfront location with
                  the curved form and nautical detailing taking cue from the
                  graceful shapes and details found in shipbuilding, whilst
                  materials are selected for their longevity in a coastal
                  setting. The building’s orientation is designed to maximise
                  light and outlook to the headlands and the marina, and the
                  façade draws on the idea of repetition and regular rhythm to
                  create order. Here a structure of white concrete blades are
                  conceived as a modern expression of classical column
                  structure, and horizontal ladders create privacy for bedrooms.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`
              ${hideTitleShellHarbour ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock-shellHarbour">
              <p className="projectAddress">Nautilus, Shell Cove Harbour</p>
            </div>
          </div>
        </div>

        <div
          className="shellHarbourSlider"
          onMouseEnter={handleMouseEnterShellHarbour}
          onMouseLeave={handleMouseLeaveShellHarbour}
        >
          <ShellHarbourSlider />
        </div>
      </div>
    </div>
  );
}

export default ShellHarbourProject;
