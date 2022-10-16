import React from "react";
import "./WorkTogether.css";
// import Header from "./components/HeaderPracticePage";
import Form from "./components/Form";
import HeaderWorkTogetherPage from "./components/HeaderWorkTogetherPage";

function WorkTogether() {
  return (
    <div className="workTogetherPage">
      <HeaderWorkTogetherPage />
      <div>
        <div className="formAndTitleRow">
          <div className="formAndTitleCol">
            <h1 className="titleWorkTogether">WORK TOGETHER</h1>
            <div className="workTogetherDropdowns">
              <div className="services">
                <div className="shortline"></div>
                <div className="titleAndNumber" id="servicesHover">
                  <p className="dropdownTitle">Services</p>
                  <p className="dropdownTitle">01.</p>
                </div>
                <div
                  className="dropdownTextWorkTogether"
                  id="servicesHoverText"
                >
                  <p className="paragraphTextWorkTogether">
                    We design custom, high quality, ecologically and materially
                    innovative/ progressive design-led buildings for private,
                    investor and developer clients that are tailored to project
                    specific requirements and objectives.
                    <p className="paragraphTextWorkTogether">
                      We offer a full architectural service that ensures we are
                      involved for the entire lifecycle of the project through
                      concept, design, consultant coordination, project
                      management and construction to provide the best outcome
                      for the project and our clients.
                    </p>
                    <p className="paragraphTextWorkTogether">
                      We structure our level of involvement during stages of the
                      project life-cycle according to the specifics of the
                      project, to meet client’s business objectives and through
                      the contract arrangement.
                    </p>
                    <p className="paragraphTextWorkTogether">
                      We are interested in joint ventures for property
                      development and real estate projects.
                    </p>
                  </p>
                </div>
              </div>
              <div className="sectors">
                <div className="shortline"></div>
                <div className="titleAndNumber" id="sectorsHover">
                  <p className="dropdownTitle">Sectors</p>
                  <p className="dropdownTitle">02.</p>
                </div>

                <div className="dropdownTextWorkTogether" id="sectorsHoverText">
                  <p className="paragraphTextWorkTogether">
                    Our experience covers high-end private residences, boutique
                    hotel and guest accommodation, medium-high density
                    residential developments, adaptive re-use and work to
                    existing and listed buildings, public sector projects for
                    visitor spaces and ecological and conservation projects on
                    sites of special environmental interest.
                    <p className="paragraphTextWorkTogether">
                      We are always looking to expand and grow into new areas!
                    </p>
                  </p>
                </div>
              </div>
              <div className="initialConsultation">
                <div className="shortline"></div>
                <div className="titleAndNumber" id="initialConHover">
                  <p className="dropdownTitle">Initial Consultation</p>
                  <p className="dropdownTitle">03.</p>
                </div>
                <div
                  className="dropdownTextWorkTogether"
                  id="initialConHoverText"
                >
                  <p className="paragraphTextWorkTogether">
                    Initial consultations are required for all projects to
                    discuss the client’s project objectives and requirements
                    before a fee estimate can be provided.
                    <p className="paragraphTextWorkTogether">
                      Initial consultation fee: £200
                    </p>
                    <p className="paragraphTextWorkTogether">
                      Before we commence work, a written agreement must be
                      signed and an upfront fee for the equivalent of 5 hours
                      work is charged.
                    </p>
                  </p>
                </div>
              </div>
              <div className="fees">
                <div className="shortline"></div>
                <div className="titleAndNumber" id="feesHover">
                  <p className="dropdownTitle">Fees</p>
                  <p className="dropdownTitle">04.</p>
                </div>
                <div className="dropdownTextWorkTogether" id="feesHoverText">
                  <p className="paragraphTextWorkTogether">
                    Fees reflect the quality of service offered and are
                    structured in one of three ways depending on the specifics
                    of a project, client preference and the scope of services to
                    be provided. Before we commence work on a formal written
                    agreement is signed, and an advance fee of £500 is paid to
                    ensure client commitment.
                    <div>
                      <br />
                      <p className="underlineText">Initial Consultation</p>
                      <p className="paragraphTextWorkTogether">
                        Flat rate fee: £200
                      </p>
                      <p className="paragraphTextWorkTogether">
                        Initial consultations are held with all clients to
                        discuss project requirements, define the scope of
                        services to be provided and to formulate a project
                        brief.
                      </p>
                      <p className="underlineText">
                        Small projects & private clients:
                      </p>
                      <p className="paragraphTextWorkTogether">
                        Time charge whereby fees are calculated on hourly and
                        daily rates. Please see below.
                      </p>
                      <p className="paragraphTextWorkTogether">
                        Or, fees are calculated as a percentage of the
                        construction cost generally negotiated between 10-15%
                        based on project requirements.
                      </p>
                    </div>
                    <div>
                      <p className="underlineText">
                        Medium & large-scale projects:
                      </p>
                      <p className="paragraphTextWorkTogether">
                        Fees are calculated as a percentage of the construction
                        cost and are generally negotiated between:
                      </p>
                      <p className="paragraphTextWorkTogether">
                        6-12% for medium-scale projects, under 6% for
                        large-scale projects
                      </p>
                      {/* <p className="paragraphTextWorkTogether">
                        under 6% for large-scale projects
                      </p> */}
                      <p className="paragraphTextWorkTogether">
                        Or, fixed cost; a fee proposal is prepared based on a
                        time, services and resourcing calculation and the
                        construction stage conducted on a time charge basis.
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="workTogetherForm">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkTogether;
