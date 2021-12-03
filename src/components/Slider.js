import React from "react";
import "./Slider.css";
import Treehouse1 from "../TreehouseImages/Treehouse1.jpg";
import Treehouse2 from "../TreehouseImages/Treehouse2.jpg";
import Treehouse3 from "../TreehouseImages/Treehouse3.jpg";
import Treehouse4 from "../TreehouseImages/Treehouse4.jpg";
import Treehouse5 from "../TreehouseImages/Treehouse5.jpg";
import Treehouse6 from "../TreehouseImages/Treehouse6.jpg";

function Slider() {
  return (
    <div className="App">
      <div class="slides">
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
