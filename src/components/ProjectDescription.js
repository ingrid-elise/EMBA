import React from "react";
import "./ProjectDescription.css";

function ProjectDescription(props) {
  return (
    <div className="projectDesciptionDetails"> 
      <div className="projectDescHeading">
        <p className="descHeading">Client:</p>
        <p className="descHeading">Architect:</p>
        <p className="descHeading">Status:</p>
        <p className="descHeading">Structural Engineer:</p>
        <p className="descHeading">Services Engineer:</p>
        <p className="descHeading">Contractor:</p>
        <p className="descHeading">Contract Value:</p>
      </div>
      <div className="projectDescInfo">
        <p className="descInfo">{props.clientName}</p>
        <p className="descInfo">{props.architect}</p>
        <p className="descInfo">{props.projectStatus}</p>
        <p className="descInfo">{props.structuralEngineer}</p>
        <p className="descInfo">{props.servicesEngineer}</p>
        <p className="descInfo">{props.contractor}</p>
        <p className="descInfo">{props.contractValue}</p>
      </div>
    </div>
  );
}

export default ProjectDescription;

