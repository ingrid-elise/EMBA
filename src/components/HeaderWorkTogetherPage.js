import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function HeaderWorkTogetherPage() {
  return (
    <div className="headerLogoAndText">
      <img className="embaLogo" src="images/EMBALogo.png" alt="EMBALogo" />
      <div className="headerText">
        <p className="bolderFont">Ecological</p>
        <p className="bolderFont">Material</p>
        <p className="bolderFont">Based</p>
        <div className="lineFourHeader">
          <p className="bolderFont">Architecture </p>
          <p className="lighterFont">& Development</p>
        </div>
      </div>
      <div id="hover">
        <span id="menuNavText">MENU</span>
        <div className="navLinksBlock" id="navLinksHover">
          <Link to="/" className="navLinks">
            HOME
          </Link>
          <Link to="/PracticePage" className="navLinks">
            PRACTICE
          </Link>
          <Link to="/ProjectsPage" className="navLinks">
            PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderWorkTogetherPage;
