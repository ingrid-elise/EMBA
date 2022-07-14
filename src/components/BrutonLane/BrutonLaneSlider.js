import React from "react";
import "./BrutonLaneSlider.css";
import Architect_BrutonLane_2400x1600px_1 from "./BrutonLanePhotos/Architect_BrutonLane_2400x1600px_1.jpg";
import Architect_BrutonLane_2400x1600px_2 from "./BrutonLanePhotos/Architect_BrutonLane_2400x1600px_2.jpg";
import Architect_BrutonLane_2400x1600px_3 from "./BrutonLanePhotos/Architect_BrutonLane_2400x1600px_3.jpg";


function BrutonLaneSlider() {
  return (
    <div className="App-BrutonLane">
      <div className="slides-BrutonLane">
        <div>
          <img
            src={Architect_BrutonLane_2400x1600px_1}
            alt="BrutonLane-1"
            className="slideImgs-BrutonLane"
          />
        </div>

        <div>
          <img
            src={Architect_BrutonLane_2400x1600px_2}
            alt="BrutonLane-2"
            className="slideImgs-BrutonLane"
          />
        </div>

        <div>
          <img
            src={Architect_BrutonLane_2400x1600px_3}
            alt="BrutonLane-3"
            className="slideImgs-BrutonLane"
          />
        </div>

        
      </div>
    </div>
  );
}

export default BrutonLaneSlider;