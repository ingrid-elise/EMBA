import React from "react";
import "./Header.css";

function HeaderHomePage() {
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
    </div>
  );
}

export default HeaderHomePage;
