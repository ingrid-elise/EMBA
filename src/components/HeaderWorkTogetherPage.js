import React, {useState} from "react";
import "./HeaderWorkTogetherPage.css";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import MenuWorkTogether from "./MenuWorkTogether";


function HeaderWorkTogetherPage() {
  const [checked, setChecked] = useState(false);

  const handleMouseDown = (e) => {
    toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  const toggleMenu = () => {
    setChecked(!checked);
    console.log("checked")
  };

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


      {/* mobile header */}
      <div className="banner-area">
      <MenuButton 
      handleMouseDown={handleMouseDown}
      />
      <MenuWorkTogether 
      handleMouseDown={handleMouseDown}
      menuVisibility={checked}
      />
    </div>
    </div>
  );
}

export default HeaderWorkTogetherPage;
