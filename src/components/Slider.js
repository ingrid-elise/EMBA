import React from "react";
import "./Slider.css";
import Treehouse1 from "../components/Treehouse/TreehousePhotos/Treehouse1.jpg";
import Treehouse2 from "../components/Treehouse/TreehousePhotos/Treehouse2.jpg";
import Treehouse3 from "../components/Treehouse/TreehousePhotos/Treehouse3.jpg";
import Treehouse4 from "../components/Treehouse/TreehousePhotos/Treehouse4.jpg";
import Treehouse5 from "../components/Treehouse/TreehousePhotos/Treehouse5.jpg";
import Treehouse6 from "../components/Treehouse/TreehousePhotos/Treehouse6.jpg";

function Slider() {
  return (
    <div className="App">
      <div className="slides">
        <div>
          <img src={Treehouse1} alt="Treehouse1" className="slideImgs" />
        </div>

        <div>
          <img src={Treehouse2} alt="Treehouse2" className="slideImgs" />
        </div>

        <div>
          <img src={Treehouse3} alt="Treehouse3" className="slideImgs" />
        </div>

        <div>
          <img src={Treehouse4} alt="Treehouse4" className="slideImgs" />
        </div>

        <div>
          <img src={Treehouse5} alt="Treehouse5" className="slideImgs" />
        </div>

        <div>
          <img src={Treehouse6} alt="Treehouse6" className="slideImgs" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
