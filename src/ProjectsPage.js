import React from "react";
import TreehouseProject from "./components/treehouseProject";
import "./ProjectsPage.css";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-router-dom";
import HeaderProjectsPage from "./components/HeaderProjectsPage";
import FulhamRdProject from "./components/FulhamRdProject";
import ShellHarbourProject from "./components/ShellHarbour/ShellHarbourProject";
import TimeAndLifeProject from "./components/TimeAndLife/TimeAndLifeProject";
import BrutonLaneProject from "./components/BrutonLane/BrutonLaneProject";
// import GreenSquareProject from "./components/GreenSquare/GreenSquareProject";
import CanterburyHouseProject from "./components/CanterburyHouse/CanterburyHouseProject";

function ProjectsPage() {
  return (
    <div className="projectsPageBackground">
      <HeaderProjectsPage />
      <div className="projectsPage">
        <h1 className="titleProjects">PROJECTS</h1>
        <Controller>
          <TreehouseProject />

          <div className="sectionFRP" />
          <div id="triggerFRP" />
          <Scene
            duration={0}
            classToggle="zapFRP"
            triggerElement="#triggerFRP"
            indicators={false}
          >
            <div className="testFRP">
              <FulhamRdProject />
            </div>
          </Scene>

          <div className="sectionSH" />
          <div id="triggerSH" />
          <Scene
            duration={0}
            classToggle="zapSH"
            triggerElement="#triggerSH"
            indicators={false}
          >
            <div className="testSH">
              <ShellHarbourProject />
            </div>
          </Scene>

          <div className="sectionTAL" />
          <div id="triggerTAL" />
          <Scene
            duration={0}
            classToggle="zapTAL"
            triggerElement="#triggerTAL"
            indicators={false}
          >
            <div className="testTAL">
              <TimeAndLifeProject />
            </div>
          </Scene>

          <div className="sectionBL" />
          <div id="triggerBL" />
          <Scene
            duration={0}
            classToggle="zapBL"
            triggerElement="#triggerBL"
            indicators={false}
          >
            <div className="testBL">
              <BrutonLaneProject />
            </div>
          </Scene>

          {/* <div className="sectionGS" />
          <div id="triggerGS" />
          <Scene
            duration={0}
            classToggle="zapGS"
            triggerElement="#triggerGS"
            indicators={false}
          >
            <div className="testGS">
              <GreenSquareProject />
            </div>
          </Scene> */}

          <div className="sectionCH" />
          <div id="triggerCH" />
          <Scene
            duration={0}
            classToggle="zapCH"
            triggerElement="#triggerCH"
            indicators={false}
          >
            <div className="testCH">
              <CanterburyHouseProject />
            </div>
          </Scene>
        </Controller>

        <div className="footerProjectsPage">
          <img
            className="embaLogoFooter"
            src="images/EmbaLogoWhiteThickWebsite.png"
            alt="EMBALogoWhite"
          />
          <Link to="/" className="footerLink">
            HOME
          </Link>
          <Link to="/PracticePage" className="footerLink">
            PRACTICE
          </Link>
          <Link to="/ProjectsPage" className="footerLink">
            PROJECTS
          </Link>
          <Link to="/WorkTogether" className="footerLink">
            WORK TOGETHER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
