import React from "react";
import TreehouseProject from "./components/treehouseProject";
import "./ProjectsPage.css";
import HeaderProjectsPage from "./components/HeaderProjectsPage";
import FulhamRdProject from "./components/FulhamRdProject";
import { Controller, Scene } from "react-scrollmagic";

function ProjectsPage() {
  return (
    <div className="projectsPageBackground">
      <HeaderProjectsPage />
      <div className="projectsPage">
        <h1 className="titleProjects">PROJECTS</h1>

        <div className="section" />
        <div id="trigger" />
        <Controller>
          <Scene
            duration={0}
            classToggle="zap"
            triggerElement="#trigger"
            indicators={false}
          >
            <div className="test">
              <TreehouseProject />
            </div>
          </Scene>

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
        </Controller>
        <div className="sectionFRP" />

        <div className="footerProjectsPage">
          <img
        className="embaLogoFooter"
        src="images/EMBALogo.png"
        alt="EMBALogoBlack"
      />
          <p>HOME</p>
          <p>PRACTICE</p>
          <p>PROJECTS</p>
          <p>WORK TOGETHER</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
