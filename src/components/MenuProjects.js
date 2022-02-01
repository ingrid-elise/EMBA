import React from "react";
import "./Menu.css";
import closeCross from "../Icons/close-cross.png";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div id="flyoutMenu"
    handleMouseDown={props.handleMouseDown}
    className={props.menuVisibility ? "show" : "hide"}
    >
        <div className="closeMenuBtn" onClick={props.handleMouseDown}>
            <p className="menuCloseBtn">close</p>
            <img src={closeCross} alt="closeCross" className="menuCloseCross"/>
        </div>
        <div className="menuTextBlock">
            <Link to="/" className="menuText"><h2>HOME</h2></Link>
            <Link to="/PracticePage" className="menuText"><h2>PRACTICE</h2></Link>
            <Link to="/WorkTogether" className="menuText"><h2>WORK TOGETHER</h2></Link>
        </div>
    </div>
  );
}

export default Menu;