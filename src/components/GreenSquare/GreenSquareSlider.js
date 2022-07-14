import React from "react";
import "./GreenSquareSlider.css";
import Architect_GreenSquare_2400x1600px_1 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_1.jpg";
import Architect_GreenSquare_2400x1600px_2 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_2.jpg";
import Architect_GreenSquare_2400x1600px_3 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_3.jpg";
import Architect_GreenSquare_2400x1600px_4 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_4.jpg";
import Architect_GreenSquare_2400x1600px_5 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_5.jpg";
import Architect_GreenSquare_2400x1600px_6 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_6.jpg";
import Architect_GreenSquare_2400x1600px_7 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_7.jpg";
import Architect_GreenSquare_2400x1600px_8 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_8.jpg";
import Architect_GreenSquare_2400x1600px_9 from "./GreenSquarePhotos/Architect_GreenSquare_2400x1600px_9.jpg";


function GreenSquareSlider() {
  return (
    <div className="App-GreenSquare">
      <div className="slides-GreenSquare">
        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_1}
            alt="GreenSquare-1"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_2}
            alt="GreenSquare-2"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_3}
            alt="GreenSquare-3"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_4}
            alt="GreenSquare-4"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_5}
            alt="GreenSquare-5"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_6}
            alt="GreenSquare-6"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_7}
            alt="GreenSquare-7"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_8}
            alt="GreenSquare-8"
            className="slideImgs-GreenSquare"
          />
        </div>

        <div>
          <img
            src={Architect_GreenSquare_2400x1600px_9}
            alt="GreenSquare-9"
            className="slideImgs-GreenSquare"
          />
        </div>
      </div>
    </div>
  );
}

export default GreenSquareSlider;
