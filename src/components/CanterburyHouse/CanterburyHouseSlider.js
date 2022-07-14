import React from "react";
import "./CanterburyHouseSlider.css";
import Architect_CanterburyHouse_2400x1600px_1 from "./CanterburyHousePhotos/Architect_CanterburyHouse_2400x1600px_1.jpg";
import Architect_CanterburyHouse_2400x1600px_2 from "./CanterburyHousePhotos/Architect_CanterburyHouse_2400x1600px_2.jpg";
import Architect_CanterburyHouse_2400x1600px_3 from "./CanterburyHousePhotos/Architect_CanterburyHouse_2400x1600px_3.jpg";
import Architect_CanterburyHouse_2400x1600px_4 from "./CanterburyHousePhotos/Architect_CanterburyHouse_2400x1600px_4.jpg";
import Architect_CanterburyHouse_2400x1600px_5 from "./CanterburyHousePhotos/Architect_CanterburyHouse_2400x1600px_5.jpg";

function CanterburyHouseSlider() {
  return (
    <div className="App-CanterburyHouse">
      <div className="slides-CanterburyHouse">
        <div>
          <img
            src={Architect_CanterburyHouse_2400x1600px_1}
            alt="CanterburyHouse-1"
            className="slideImgs-CanterburyHouse"
          />
        </div>

        <div>
          <img
            src={Architect_CanterburyHouse_2400x1600px_2}
            alt="CanterburyHouse-2"
            className="slideImgs-CanterburyHouse"
          />
        </div>

        <div>
          <img
            src={Architect_CanterburyHouse_2400x1600px_3}
            alt="CanterburyHouse-3"
            className="slideImgs-CanterburyHouse"
          />
        </div>

        <div>
          <img
            src={Architect_CanterburyHouse_2400x1600px_4}
            alt="CanterburyHouse-4"
            className="slideImgs-CanterburyHouse"
          />
        </div>

        <div>
          <img
            src={Architect_CanterburyHouse_2400x1600px_5}
            alt="CanterburyHouse-5"
            className="slideImgs-CanterburyHouse"
          />
        </div>
      </div>
    </div>
  );
}

export default CanterburyHouseSlider;
