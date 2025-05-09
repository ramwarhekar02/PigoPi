import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RefundPolicy from "../Pages/Refund-policy/RefundPolicy";
import TermsConditions from "../Pages/Terms-Conditions/TermsConditions";
import PrivacyPolicy from "../Pages/Privacy-policy/PrivacyPolicy";
import CareersPage from "../Pages/Careers/CareersPage";

// Lazy loading route components
const MainHome = lazy(() => import("../Pages/Home/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainHome /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "/refund-policy", element: <RefundPolicy/> },
      { path: "/career", element: <CareersPage/> }
    ],
  },
]);

export default router;
