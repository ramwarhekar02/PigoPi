import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Lazy loading route components
const MainHome = lazy(() => import("../Pages/Home/HomePage"));
const PrivacyPolicy = lazy(() => import("../Pages/Privacy-policy/PrivacyPolicy"));
const TermsConditions = lazy(() => import("../Pages/Terms-Conditions/TermsConditions"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainHome /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
    ],
  },
]);

export default router;
