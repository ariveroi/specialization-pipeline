const sidebarRoutes = [
  {
    title: "Welcome",
    items: [{ title: "Introduction", path: "/" }],
  },
  {
    title: "Partner Resources",
    items: [
      { title: "Resources", path: "/resources" },
      { title: "Other Collaterals", path: "/other-collaterals" },
    ],
  },
  {
    title: "Partner Training",
    items: [
      { title: "Partner Learning Paths", path: "/partner-learning-paths" },
      { title: "Partner Webinars", path: "/partner-webinars" },
    ],
  },
  {
    title: "Partner Differentiation",
    items: [
      { title: "IoT Competency Program", path: "/iot-competency-program" },
      {
        title: "IoT Service Delivery Programs",
        path: "/iot-service-delivery-programs",
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    location: "content/introduction.html",
  },
  {
    path: "/resources",
    location: "content/resources.html",
  },
  {
    path: "/other-collaterals",
    location: "content/other-collaterals.html",
  },
  {
    path: "/partner-learning-paths",
    location: "content/partner-learning-paths.html",
  },
  {
    path: "/partner-webinars",
    location: "content/partner-webinars.html",
  },
  {
    path: "/iot-competency-program",
    location: "content/iot-competency-program.html",
  },
  {
    path: "/iot-service-delivery-programs",
    location: "content/iot-service-delivery-programs.html",
  },
];

export { routes, sidebarRoutes };
