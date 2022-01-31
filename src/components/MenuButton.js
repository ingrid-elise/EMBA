import React from "react";
import "./MenuButton.css";
import whiteMenuBtn from "../Icons/WhiteMenuIcon.png";

function MenuButton(props) {
  return (
    <div className="menuBtnDiv">
      <button id="menuBtn" onMouseDown={props.handleMouseDown}>
          <img src={whiteMenuBtn} alt="whiteMenuBtn" className="whiteMenuBtn"/>
      </button>
    </div>
  );
}

export default MenuButton;
