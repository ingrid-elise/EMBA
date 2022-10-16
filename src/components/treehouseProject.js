import React, { useState } from "react";
import "./Slider.css";
import "./MobileProjectDescription.css";
import Slider from "./Slider";
import ProjectDescription from "./ProjectDescription";

function TreehouseProject() {
  const [isHovering, setIsHovering] = useState(false);
  const [hideTitle, setHideTitle] = useState(true);
  const [hideButton, setHideButton] = useState(true);

  const [checked, setChecked] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const [hideScrollBtn, setHideScrollBtn] = useState(false);

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

  // for mobile project description
  const handleMouseClick = (e) => {
    setChecked(!checked);
    changeButtonText();
    hideScrollBtnHandler();
    setHideButton(!hideButton);
    console.log("clicked");
    e.stopPropagation();
  };

  function changeButtonText() {
    setButtonText(!buttonText);
  }

  function hideScrollBtnHandler() {
    setHideScrollBtn(!hideScrollBtn);
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
                <div className="projectDescriptionBreif">
                  <ProjectDescription
                    clientName="Crafty Camping"
                    architect="EMBA"
                    projectStatus="Completed July 2016"
                    structuralEngineer="Ecos Macleen"
                    servicesEngineer="-"
                    contractor="Guy Mallinson + master craftsmen"
                    contractValue="£150k"
                  />
                </div>
                <div className="photographerInfo">
                  <p className="projectDescHeading">Photograper:</p>
                  <p className="descInfo">Sandy Steele Perkins Photography</p>
                </div>

                <div className="projectDescriptionLong-treehouse">
                  <p className="projectDescLongParagraph">
                    Bespoke, luxury treehouse accommodation in 200 year old
                    conservation woodland located in the earthy, romantic and
                    rural setting of the Dorset countryside, UK. Elevated 4.5m
                    off the woodland floor the treehouse is sensitively designed
                    to integrate with the site’s ecology through extensive use
                    of timber construction for structure, cladding and internal
                    finishes. A highly creative design process placed emphasis
                    on using materials, texture and form to clearly reflect the
                    function and hierarchy of internal spaces resulting in an
                    imaginary, jostled and characterful appearance.
                  </p>
                  <br />
                  <p className="projectDescLongParagraph">
                    The treehouse is planned around a central rotunda which
                    accommodates the central living space, off which all other
                    spaces connect. Found in these spaces are an abundance of
                    bespoke features such as external terraces, copper bathtub,
                    spiral staircase, jacuzzi, sauna, tree shower, pizza oven,
                    rotating wood burning stove, slide and illuminated bedside
                    views to the tree canopy.
                  </p>
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

        {/* Project Description for Mobile */}
        <div className="projectDescriptionMobile">
          <div className="projectAddressBlock">
            <p className="projectAddress">Woodman's Treehouse, Dorset</p>
          </div>

          <div className="readMoreButtonDiv">
            <button className="readMoreButton" onClick={handleMouseClick}>
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
                  clientName="Crafty Camping"
                  architect="EMBA"
                  projectStatus="Completed July 2016"
                  structuralEngineer="Ecos Macleen"
                  servicesEngineer="-"
                  contractor="Guy Mallinson + master craftsmen"
                  contractValue="£150k"
                />
                <div className="projectDescriptionLong">
                  <p>
                    Bespoke, luxury treehouse accommodation in 200 year old
                    conservation woodland located in the earthy, romantic and
                    rural setting of the Dorset countryside, UK. Elevated 4.5m
                    off the woodland floor the treehouse is sensitively designed
                    to integrate with the site’s ecology through extensive use
                    of timber construction for structure, cladding and internal
                    finishes. A highly creative design process placed emphasis
                    on using materials, texture and form to clearly reflect the
                    function and hierarchy of internal spaces resulting in an
                    imaginary, jostled and characterful appearance. The
                    treehouse is planned around a central rotunda which
                    accommodates the central living space, off which all other
                    spaces connect. Found in these spaces are an abundance of
                    bespoke features such as external terraces, copper bathtub,
                    spiral staircase, jacuzzi, sauna, tree shower, pizza oven,
                    rotating wood burning stove, slide and illuminated bedside
                    views to the tree canopy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mouse_scrollContainer">
        <div
          className={`
              ${hideButton ? "" : "hidden"}
            `}
        >
          <div id="mouse_scroll">
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreehouseProject;
