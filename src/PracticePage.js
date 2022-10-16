import React from "react";
import "./PracticePage.css";
import HeaderPracticePage from "./components/HeaderPracticePage";

function PracticePage() {
  return (
    <div>
      <HeaderPracticePage />
      <div className="mobileDivColumn">
        <h1 className="titlePractice">PRACTICE</h1>
        <div className="practiceTextAndImg">
          <div className="practiceDropdowns">
            <div className="about">
              <div className="shortline"></div>
              <div className="titleAndNumber" id="aboutSectionHover">
                <p className="dropdownTitle">What We Do</p>
                <p className="dropdownTitle">01.</p>
              </div>
              <div className="dropdownText" id="aboutTextHover">
                <p className="paragraphTextPracticePage">
                  We design modern, low environmental impact, sustainable and
                  ecologically focused buildings that integrate natural building
                  products and innovative material technology to have as little
                  adverse impact on the planet as possible yet still deliver
                  design excellence and performance for our partners, clients
                  and users.
                </p>
                <p className="paragraphTextPracticePage">
                  We bring our experience from leading architectural practices
                  to new projects with openminded and forward-thinking clients,
                  developers, organisations and consultants to positively shape
                  our future across all of the following building typologies
                  including; spaces of wellness, functional health, retreats,
                  hotels, workspaces, multi-residential, private residential,
                  environmental, public sector, bio and agri-industry projects.
                </p>
                <p className="paragraphTextPracticePage">
                  We support openness to change and boldness in innovation with
                  consciousness.
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
                <div>
                  <p className="paragraphTextPracticePage">
                    We are confronted with the fact buildings and urban areas
                    embody more carbon than any other known products, have some
                    of the most far reaching and devastating impacts on our
                    natural environment and drastically contribute to the
                    increasing problem of diminishing material resources.
                  </p>

                  <p className="paragraphTextPracticePage">
                    The economy of construction is not aligned with the ecology
                    of our planet and consequently cities, urban environments
                    and buildings do not share a symbiotic relationship with
                    nature. Many widely used design and construction practices
                    are outdated and inefficient, while industrial manufacturing
                    processes for materials directly and indirectly causes
                    unnecessary harm to the environment and our health.
                  </p>

                  <p className="paragraphTextPracticePage">
                    A paradigm shift in awareness, consciousness and thinking
                    alongside radical innovation and change is required in the
                    development and construction sectors if ‘urbanism’ is to
                    support longer term human futures. It needs to be redefined.
                    Here Architects and Developers are responsible for radially
                    re-thinking their practice if sustainable development is to
                    be achieved.
                  </p>
                </div>
              </div>
            </div>
            <div className="philosophy">
              <div className="shortline"></div>
              <div className="titleAndNumber" id="philosophySectionHover">
                <p className="dropdownTitle">Design Philosophy</p>
                <p className="dropdownTitle">03.</p>
              </div>
              <div className="dropdownText" id="philosophyTextHover">
                <p className="paragraphTextPracticePage">
                  Behind our design philosophy is the question ‘how can
                  buildings restore our connection with nature, drive economic
                  growth, support the continued supply of resources and at the
                  same time meet our client’s objectives?” Responding to these
                  often-conflicting objectives is at the core of our design
                  approach and fosters innovation.
                </p>
                <p className="paragraphTextPracticePage">
                  We believe one of the core ways to accomplish this is through
                  technological and ecological integration and the innovation of
                  natural, bio-dynamic construction materials, passive
                  architectural and environmental systems and their
                  implementation in building projects. Creating beneficial
                  interdependency according to the specific conditions of a
                  site, its context, and the unique requirements of a project.
                </p>
                <p className="paragraphTextPracticePage">
                  We see buildings as extensions of our ecology and believe the
                  future of architecture and urbanism lies in the ecological
                  advancement, technology, production, use, quantity,
                  implementation, impact, adaptation, re-use and regeneration of
                  the materials used, their construction arrangement, and their
                  lifecycle. Their ‘material ecology'.
                </p>
                <p className="paragraphTextPracticePage">
                  In our studio the design process begins with intelligent
                  decision making about networking the ecology of the site into
                  the design of the building; its mass, form, layout, use,
                  construction materials, environmental, energy and technical
                  systems and performance are all explored for their potential
                  integration. We then consider the continued or life-time
                  relationship between the building, its users and its
                  environment.
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
                <p className="paragraphTextPracticePage">
                  Our goal is to expand the possibilities of ecologically
                  innovative buildings and typologies to collectively enhance
                  and re-program our lives, resolve the complex and detached
                  human condition and bring people and buildings back into
                  balance with nature.
                </p>
              </div>
            </div>
          </div>

          <div className="imageBlock">
            {/* <p className="teamTitle">Team</p> */}
            <img
              className="dylanHeadShot"
              src="./images/DylanPortraitPracticePage.jpg"
              alt="Dylan Main Portrait"
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
