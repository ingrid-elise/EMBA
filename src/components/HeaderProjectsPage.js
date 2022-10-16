import React, { useState } from "react";
import "./HeaderProjectsPage.css";
import { Link } from "react-router-dom";
import MenuButtonProjectsPage from "./MenuButtonProjectsPage";
import MenuProjects from "./MenuProjects";

function HeaderProjectsPage() {
  const [checked, setChecked] = useState(false);

  // for mobile header
  const handleMouseDown = (e) => {
    toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  };

  const toggleMenu = () => {
    setChecked(!checked);
    console.log("checked");
  };

  return (
    <div className="headerLogoAndTextProjectsPage">
      <img
        className="embaLogo"
        src="images/EmbaLogoBlackThickWebsite.png"
        alt="EMBALogoBlack"
      />
      <div className="headerText">
        <p className="bolderFont">Ecological</p>
        <p className="bolderFont">Material</p>
        <p className="bolderFont">Based</p>
        <div className="lineFourHeader">
          <p className="bolderFont">Architecture </p>
          <p className="lighterFont">& Development</p>
        </div>
      </div>
      <div id="hoverProjectsPage">
        <span id="menuNavText">MENU</span>
        <div className="navLinksBlock" id="navLinksHover">
          <Link to="/" className="navLinks" id="navLinksHome">
            HOME
          </Link>
          <Link to="/PracticePage" className="navLinks" id="navLinksPractice">
            PRACTICE
          </Link>
          <Link
            to="/WorkTogether"
            className="navLinks"
            id="navLinksWorkTogether"
          >
            WORK TOGETHER
          </Link>
        </div>
      </div>

      {/* mobile header */}
      <div className="banner-area">
        <MenuButtonProjectsPage handleMouseDown={handleMouseDown} />
        <MenuProjects
          handleMouseDown={handleMouseDown}
          menuVisibility={checked}
        />
      </div>
    </div>
  );
}

export default HeaderProjectsPage;
