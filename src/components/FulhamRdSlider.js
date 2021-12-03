import React from "react";
import "./FulhamRdSlider.css";
import FulhamRd1 from "../FulhamRdImages/FulhamRd_2400x1600px_01.jpg";
import FulhamRd2 from "../FulhamRdImages/FulhamRd_2400x1600px_02.jpg";
import FulhamRd3 from "../FulhamRdImages/FulhamRd_2400x1600px_03.jpg";
import FulhamRd4 from "../FulhamRdImages/FulhamRd_2400x1600px_04.jpg";
import FulhamRd5 from "../FulhamRdImages/FulhamRd_2400x1600px_05.jpg";

function FulhamRdSlider() {
  return (
    <div className="App-FulhamRd">
      <div class="slides-FulhamRd">
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
