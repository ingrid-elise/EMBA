import React from "react";
import "./FulhamRdSlider.css";
import FulhamRd1 from "../components/FulhamRd/FulhamRdPhotos/FulhamRd1.jpg";
import FulhamRd2 from "../components/FulhamRd/FulhamRdPhotos/FulhamRd2.jpg";
import FulhamRd3 from "../components/FulhamRd/FulhamRdPhotos/FulhamRd3.jpg";
import FulhamRd4 from "../components/FulhamRd/FulhamRdPhotos/FulhamRd4.jpg";
import FulhamRd5 from "../components/FulhamRd/FulhamRdPhotos/FulhamRd5.jpg";

function FulhamRdSlider() {
  return (
    <div className="App-FulhamRd">
      <div className="slides-FulhamRd">
        <div>
          <img
            src={FulhamRd1}
            alt="Fulham-Rd-1"
            className="slideImgs-FulhamRd"
          />
        </div>

        <div>
          <img
            src={FulhamRd2}
            alt="Fulham-Rd-2"
            className="slideImgs-FulhamRd"
          />
        </div>

        <div>
          <img
            src={FulhamRd3}
            alt="Fulham-Rd-3"
            className="slideImgs-FulhamRd"
          />
        </div>

        <div>
          <img
            src={FulhamRd4}
            alt="Fulham-Rd-4"
            className="slideImgs-FulhamRd"
          />
        </div>

        <div>
          <img
            src={FulhamRd5}
            alt="Fulham-Rd-5"
            className="slideImgs-FulhamRd"
          />
        </div>
      </div>
    </div>
  );
}

export default FulhamRdSlider;
