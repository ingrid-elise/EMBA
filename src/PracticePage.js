import React from "react";
import "./PracticePage.css";
import HeaderPracticePage from "./components/HeaderPracticePage";

function PracticePage() {
  return (
    <div>
      <HeaderPracticePage />
      <div className="mobileDivColumn">
        <h3 className="teamTitle">Team</h3>
        <h1 className="titlePractice">PRACTICE</h1>
        <div className="practiceTextAndImg">
          <div className="practiceDropdowns">
            <div className="about">
              <div className="shortline"></div>
              <div className="titleAndNumber" id="aboutSectionHover">
                <p className="dropdownTitle">About</p>
                <p className="dropdownTitle">01.</p>
              </div>
              <div className="dropdownText" id="aboutTextHover">
                <p className="paragraphText">
                  We bring our experience from leading, top-tier architectural
                  practices to new design and ecologically-led architecture and
                  development projects. We support openness to change, boldness
                  in innovation with consciousness, progressive technology for
                  the enhancement of natural and urban environments, material
                  innovation, architecture for health and wellness, and
                  sustainable profitability in and beyond fiscal systems. We
                  believe the future of architecture and urbanism is in the
                  ecological advancement, technology, production, use,
                  implementation, impact, adaptation, re-use and regeneration of
                  the material – its material ecology, or life-cycle.
                </p>
              </div>
            </div>
            <div className="awareness">
              <div className="shortline"></div>
              <div className="titleAndNumber" id="awarenessSectionHover">
                <p className="dropdownTitle">Awareness</p>
                <p className="dropdownTitle">02.</p>
              </div>
              <div className="dropdownText" id="awarenessTextHover">
                <div className="paragraphText">
                  <p>
                  The economy of construction is not aligned with the ecology of
                  our planet and consequently cities, urban environments and
                  buildings do not share a symbiotic relationship with nature.
                  </p>
                  
                  <p>
                    As a result of overlooking the potential integration of
                    available technologies and natural ecologies, many in-use
                    design and construction practices are outdated, inefficient
                    and now cause unnecessary harm to the environment and our
                    health.
                  </p>
                  <p>
                    A paradigm shift in awareness, consciousness and thinking
                    alongside radical innovation and change is required in the
                    development and construction sectors if ‘urbanism’ is to
                    support longer term human futures, it must be redefined.
                  </p>
                  <p>
                    We believe the same level of innovation is required in the
                    eco-technological advancement of construction material
                    (material ecologies) to overcome the problem of diminishing
                    material resources, damaging industrial production processes
                    and to support continued market-capitalisation.
                  </p>
                </div>
              </div>
            </div>
            <div className="philosophy">
              <div className="shortline"></div>
              <div className="titleAndNumber" id="philosophySectionHover">
                <p className="dropdownTitle">Philosophy</p>
                <p className="dropdownTitle">03.</p>
              </div>
              <div className="dropdownText" id="philosophyTextHover">
                <p className="paragraphText">
                  For us the design process begins with intelligent decision
                  making about networking the ecology of the site into the
                  design of the building; its mass, form, layout, use,
                  environmental and technical systems and performance. We then
                  explore the ecological integration and properties of the
                  building materials to be selected or developed, and the
                  continued or life-time relationship between the building, its
                  environment and users.
                </p>
              </div>
            </div>
            <div className="purpose">
              <div className="shortline"></div>
              <div className="titleAndNumber" id="purposeSectionHover">
                <p className="dropdownTitle">Purpose</p>
                <p className="dropdownTitle">04.</p>
              </div>
              <div className="dropdownText" id="purposeTextHover">
                <p className="paragraphText">
                  Through observing buildings as extensions of ecology we apply
                  modern thinking and knowledge to develop new architectural
                  design practices and techniques that seek to redefine
                  urbanism, development, construction and revolutionise material
                  technology and the use and production of construction
                  materials. The purpose being to deliver, superior,
                  contemporary and high- performance buildings for clients and
                  users and to achieve sustainable development.
                </p>
              </div>
            </div>
          </div>

          <div className="imageBlock">
            <img
              className="dylanHeadShot"
              src="./images/Dylan.png"
              alt="Dylan Headshot"
            />
            <div className="caption">
              <div className="captionFirstLine">
                <p className="boldTextFirstLine">Dylan Main |</p>
                <p className="normalTextFirstLine">Architect ARB</p>
              </div>
              <div>
                <p className="captionSmallText">BA Architecture & Planning</p>
                <p className="captionSmallText">M. Arch Architecture</p>
                <p className="captionSmallText">
                  Adv. Dip Arch Professional Practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticePage;
