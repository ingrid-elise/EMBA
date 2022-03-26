import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import HeaderHomePage from "./components/HeaderHomePage";

function HomePage() {
  return (
    <div className="homePage">
      <HeaderHomePage />

      <div className="homePageLinksAndNumbers">
        <div className="linkNumbers">
          <p className="number" id="numberOne">01.</p>
          <p className="number" id="numberTwo">02.</p>
          <p className="number" id="numberThree">03.</p>
        </div>
        <div className="homePageLinks">
          <Link to="/PracticePage" className="singleLinkPractice">
            PRACTICE
          </Link>
          <Link to="/WorkTogether" className="singleLinkWorkTogether">
            WORK TOGETHER
          </Link>
          <Link to="/ProjectsPage" className="singleLinkProjects">
            PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
