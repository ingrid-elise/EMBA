import React, { useState } from "react";
import "./Slider.css";
import Slider from "./Slider";

function TreehouseProject() {
  const [isHovering, setIsHovering] = useState(false);
  const [hideTitle, setHideTitle] = useState(true);

  function handleMouseEnter() {
    setIsHovering(true);
    setHideTitle(false);
    console.log("hovering - show description");
  }

  function handleMouseLeave() {
    setIsHovering(false);
    setHideTitle(true);
    console.log("not hovering - hide description");
  }

  return (
    <div>
      <div className="descAndSlider">
        <div className="descriptionAndImg">
          <div
            className={`
              ${isHovering ? "" : "hidden"}
            `}
          >
            <div className="verticalLineAndDesc">
              <div id="verticalLineOnHover"></div>
              <div className="projectDescription-treehouse">
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
              ${hideTitle ? "" : "hidden"}
            `}
          >
            <div className="projectAddressBlock">
              <p className="projectAddress">Woodman's Treehouse, Dorset</p>
            </div>
          </div>
        </div>

        <div
          className="treehouseSlider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default TreehouseProject;
