import React, { useState } from "react";
import "./FulhamRdProject.css";
import "./MobileProjectDescription.css";
import FulhamRdSlider from "./FulhamRdSlider";
import ProjectDescription from "./ProjectDescription";

function FulhamRdProject() {
  const [isHoveringFulhamRd, setIsHoveringFulhamRd] = useState(false);
  const [hideTitleFulhamRd, setHideTitleFulhamRd] = useState(true);
  const [checked, setChecked] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  function handleMouseEnterFulhamRd() {
    setIsHoveringFulhamRd(true);
    setHideTitleFulhamRd(false);
  }

  function handleMouseLeaveFulhamRd() {
    setIsHoveringFulhamRd(false);
    setHideTitleFulhamRd(true);
  }

  // for mobile project description
  const handleMouseClickFR = (e) => {
    setChecked(!checked);
    changeButtonText();
    console.log("clicked Fulham Rd");
    e.stopPropagation();
  };

  function changeButtonText() {
    setButtonText(!buttonText);
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
                  projectStatus="Completed 2018"
                  structuralEngineer="Barrett Mahoney"
                  servicesEngineer="EDP Environmental"
                  contractor="FCM Holdings"
                  contractValue="£1m"
                />
                <p className="projectDescriptionLong-fulhamRd">
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
          className="fulhamRdSlider"
          onMouseEnter={handleMouseEnterFulhamRd}
          onMouseLeave={handleMouseLeaveFulhamRd}
        >
          <FulhamRdSlider />
        </div>

        {/* Project Description for Mobile */}
        <div className="projectDescriptionMobile">
          <div className="projectAddressBlock">
            <p className="projectAddress">Fulham Rd, London</p>
          </div>

          <div className="readMoreButtonDiv">
            <button className="readMoreButton" onClick={handleMouseClickFR}>
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
                  clientName="Artemis One"
                  architect="Horden Cherry Lee Architects"
                  projectStatus="Completed 2018"
                  structuralEngineer="Barrett Mahoney"
                  servicesEngineer="EDP Environmental"
                  contractor="FCM Holdings"
                  contractValue="£1m"
                />
                <div className="projectDescriptionLong">
                  <p>
                    A contemporary new build residential development comprising
                    two four-bedroom mews houses with basements in Fulham,
                    London. The constrained 218m2 former site of 6 derelict
                    garages dictated maximising the building envelope and
                    required overcoming technical and legal challenges. The
                    building is constructed in London stock brick and features a
                    minimalist aluminium framed glazed façade, fenestrated by a
                    series of shimmering solar panel privacy shutters. These
                    have the dual function of satisfying overlooking
                    requirements and suppling renewable energy for fifty percent
                    of the houses total energy consumption.
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

export default FulhamRdProject;
