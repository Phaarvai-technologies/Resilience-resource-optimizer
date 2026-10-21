import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { CityRiskDashboard } from "./components/CityRiskDashboard";
import { RiskMap } from "./components/RiskMap";
import { PrioritySites } from "./components/PrioritySites";
import { SiteProfile } from "./components/SiteProfile";
import { ResourcePlanner } from "./components/ResourcePlanner";
import { CommunityGuidance } from "./components/CommunityGuidance";
import { Reports } from "./components/Reports";
import { Settings } from "./components/Settings";
import { Transparency } from "./components/Transparency";

const base = import.meta.env.BASE_URL || "/";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "city-risk", Component: CityRiskDashboard },
      { path: "risk-map", Component: RiskMap },
      { path: "priority-sites", Component: PrioritySites },
      { path: "site-profile/:id", Component: SiteProfile },
      { path: "resource-planner", Component: ResourcePlanner },
      { path: "community-guidance", Component: CommunityGuidance },
      { path: "reports", Component: Reports },
      { path: "transparency", Component: Transparency },
      { path: "settings", Component: Settings },
    ],
  },
], { basename: base.endsWith("/") ? base.slice(0, -1) : base });
