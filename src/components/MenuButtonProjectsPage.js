import React from "react";
import "./MenuButtonProjectsPage.css";
import blackMenuBtn from "../Icons/BlackMenuIcon.png";

function MenuButton(props) {
  return (
    <div className="menuBtnDiv">
      <button id="menuBtnProjectsPage" onMouseDown={props.handleMouseDown}>
          <img src={blackMenuBtn} alt="blackMenuBtn" className="blackMenuBtn"/>
      </button>
    </div>
  );
}

export default MenuButton;