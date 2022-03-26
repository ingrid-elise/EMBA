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
    <div className="headerLogoAndTextWTPage">
      <img className="embaLogoWTPage" src="images/EMBALogo.png" alt="EMBALogo" />
      <div className="headerTextWTPage">
        <p className="bolderFontWTPage">Ecological</p>
        <p className="bolderFontWTPage">Material</p>
        <p className="bolderFontWTPage">Based</p>
        <div className="lineFourHeaderWTPage">
          <p className="bolderFontWTPage">Architecture </p>
          <p className="lighterFontWTPage">& Development</p>
        </div>
      </div>
      <div id="hoverWTPage">
        <span id="menuNavTextWTPage">MENU</span>
        <div className="navLinksBlockWTPage" id="navLinksHoverWTPage">
          <Link to="/" className="navLinksWTPage">
            HOME
          </Link>
          <Link to="/PracticePage" className="navLinksWTPage">
            PRACTICE
          </Link>
          <Link to="/ProjectsPage" className="navLinksWTPage">
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
