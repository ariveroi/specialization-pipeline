import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify, Analytics } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

if (process.env.NODE_ENV === "development") {
  console.log("in dev");
} else {
  Analytics.autoTrack("session", {
    enable: true,
    immediate: true,
  });

  Analytics.autoTrack("pageView", {
    enable: true,
    type: "SPA",
    immediate: true,
  });

  Analytics.autoTrack("event", {
    enable: true,
    immediate: true,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
