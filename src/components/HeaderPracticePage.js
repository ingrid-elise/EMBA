import React, {useState} from "react";
import "./HeaderPracticePage.css";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import Menu from "./Menu";


function HeaderPracticePage() {
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
    <div className="headerLogoAndTextPages">
      <img className="embaLogoPages" src="images/EMBALogo.png" alt="EMBALogo" />
      <div className="headerTextPages">
        <p className="bolderFontPages">Ecological</p>
        <p className="bolderFontPages">Material</p>
        <p className="bolderFontPages">Based</p>
        <div className="lineFourHeaderPages">
          <p className="bolderFontPages">Architecture </p>
          <p className="lighterFontPages">& Development</p>
        </div>
      </div>
      <div id="hoverPages">
        <div id="menuNavTextPages">MENU</div>
        <div className="navLinksBlockPages" id="navLinksHoverPages">
          <Link to="/" className="navLinksPages">
            HOME
          </Link>
          <Link to="/WorkTogether" className="navLinksPages">
            WORK TOGETHER
          </Link>
          <Link to="/ProjectsPage" className="navLinksPages">
            PROJECTS
          </Link>
        </div>
      </div>
      
{/* mobile header */}
      <div className="banner-area">
      <MenuButton 
      handleMouseDown={handleMouseDown}
      />
      <Menu 
      handleMouseDown={handleMouseDown}
      menuVisibility={checked}
      />
    </div>
    </div>
  );
}

export default HeaderPracticePage;
