import React from "react";
import "./TimeAndLifeSlider.css";
import Architect_TimeLife_2400x1600px_1 from "./TimeAndLifePhotos/Architect_TimeLife_2400x1600px_1.jpg";
import Architect_TimeLife_2400x1600px_2 from "./TimeAndLifePhotos/Architect_TimeLife_2400x1600px_2.jpg";
import Architect_TimeLife_2400x1600px_3 from "./TimeAndLifePhotos/Architect_TimeLife_2400x1600px_3.jpg";
import Architect_TimeLife_2400x1600px_4 from "./TimeAndLifePhotos/Architect_TimeLife_2400x1600px_4.jpg";
import Architect_TimeLife_2400x1600px_5 from "./TimeAndLifePhotos/Architect_TimeLife_2400x1600px_5.jpg";


function TimeAndLifeSlider() {
  return (
    <div className="App-ShellHarbour">
      <div className="slides-ShellHarbour">
        <div>
          <img
            src={Architect_TimeLife_2400x1600px_1}
            alt="TimeAndLife-1"
            className="slideImgs-TimeAndLife"
          />
        </div>

        <div>
          <img
            src={Architect_TimeLife_2400x1600px_2}
            alt="TimeAndLife-2"
            className="slideImgs-TimeAndLife"
          />
        </div>

        <div>
          <img
            src={Architect_TimeLife_2400x1600px_3}
            alt="TimeAndLife-3"
            className="slideImgs-TimeAndLife"
          />
        </div>

        <div>
          <img
            src={Architect_TimeLife_2400x1600px_4}
            alt="TimeAndLife-4"
            className="slideImgs-TimeAndLife"
          />
        </div>

        <div>
          <img
            src={Architect_TimeLife_2400x1600px_5}
            alt="TimeAndLife-5"
            className="slideImgs-TimeAndLife"
          />
        </div>

        

        
      </div>
    </div>
  );
}

export default TimeAndLifeSlider;