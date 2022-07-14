import React, {useState} from "react";
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
