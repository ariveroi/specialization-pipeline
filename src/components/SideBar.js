import "./SideBar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarRoutes } from "../routes";

const sidebarRoutesList = sidebarRoutes.map((section, index) => {
  return (
    <React.Fragment key={`${section.title}-${index}`}>
      <div className="heading">{section.title}</div>
      <ul>
        {section.items.map((item, index) => (
          <li key={`${section.title}-${index}`}>
            <div className="nav-link-container">
              <NavLink to={item.path} className="nav-link">
                {item.title}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
});

function SideBar() {
  return (
    <section id="sidebar">
      <div className="inner">
        <div className="logo">
          <img alt="aws-logo" src="/aws.png" />
        </div>
        <div>{/* <NavBar></NavBar> */}</div>
        <nav>{sidebarRoutesList}</nav>
        <div className="contact">
          <a href="mailto:iot-partner-question@amazon.com" target="_blank" rel="noopener noreferrer">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
