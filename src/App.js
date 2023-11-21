import "./App.scss";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import HtmlDocument from "./components/HtmlDocument";
import usePageTracking from "./components/usePageTracking";
import { routes } from "./routes";

const routesList = routes.map((route, idx) => (
  <Route
    key={idx}
    path={route.path}
    element={<HtmlDocument location={route.location} />}
  />
));

function App() {
  usePageTracking();

  useEffect(() => {
    document.body.classList.remove("is-preload");
  }, []);

  return (
    <div>
      <ScrollToTop />
      <SideBar />
      <main role="main">
        <div id="content" className="container">
          <Routes>{routesList}</Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
