import React from "react";

function ImgComp({ src }) {
  let imgStyles = {
    width: "auto", // changes width of image
    height: 100 + "%",
    padding: "0px 0px 0px 0px",
  };
  return <img src={src} alt="slide-img" style={imgStyles}></img>;
}

export default ImgComp;

// padding: "0px 21px 0px 0px",
