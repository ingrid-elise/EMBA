import React from "react";
import "./Header.css";

function HeaderHomePage() {
  return (
    <div className="headerLogoAndTextHomePage">
      <img className="embaLogoHomePage" src="images/EMBALogo.png" alt="EMBALogo" />
      <div className="headerTextHomePage">
        <p className="bolderFontHomePage">Ecological</p>
        <p className="bolderFontHomePage">Material</p>
        <p className="bolderFontHomePage">Based</p>
        <div className="lineFourHeaderHomePage">
          <p className="bolderFontHomePage">Architecture </p>
          <p className="lighterFontHomePage">& Development</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderHomePage;
