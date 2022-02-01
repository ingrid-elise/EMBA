import React, { useState } from "react";
import "./FulhamRdProject.css";
import FulhamRdSlider from "./FulhamRdSlider";

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
      <div className="descAndSlider">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHoveringFulhamRd ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-FulhamRd">
                <div className="projectDescHeading">
                  <p className="descHeading">Client:</p>
                  <p className="descHeading">Architect:</p>
                  <p className="descHeading">Status:</p>
                  <p className="descHeading">Project Team:</p>
                  <p className="descHeading">Photographer:</p>
                  <br />
                  <p className="descHeading">Contractor:</p>
                  <p className="descHeading">Contract Value:</p>
                </div>
                <div className="projectDescInfo">
                  <p className="descInfo">Crafty Camping</p>
                  <p className="descInfo">Onform Architecture + BEaM</p>
                  <p className="descInfo">Completed July 2016</p>
                  <p className="descInfo">
                    Ecos Maclean as Structural Engineer
                  </p>
                  <p className="descInfo">Sandy Steele Perkins Photography</p>
                  <br />
                  <p className="descInfo">Guy Mallinson and master craftsmen</p>
                  <p className="descInfo">GBP 150,000</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`
              ${hideTitleFulhamRd ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock">
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
