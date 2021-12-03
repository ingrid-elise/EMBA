import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./HomePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PracticePage from "./PracticePage";
import ProjectsPage from "./ProjectsPage";
import WorkTogether from "./WorkTogether";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/PracticePage">
          <PracticePage />
        </Route>
        <Route path="/WorkTogether">
          <WorkTogether />
        </Route>
        <Route path="/ProjectsPage">
          <ProjectsPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// the switch component makes sure only one route shows in the browser at any one time
