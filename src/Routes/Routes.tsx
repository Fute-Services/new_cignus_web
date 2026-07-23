import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layouts from Layout.tsx
import Layout, { BlankLayout } from "./Layout";

// First screen — loaded eagerly so it appears instantly
import InitialPage from "../Pages/Home/HomeNew";

// All other pages are lazy-loaded (code-split) so the app opens fast
const Home = lazy(() => import("../Pages/Home/Home"));
const Location = lazy(() => import("../Pages/Location/Location"));
const Project_Details = lazy(() => import("../Pages/Project details/Project_Details"));
const Gallery = lazy(() => import("../Pages/Gallery/Gallery"));

// Sub-components / Additional Pages
const Broucher = lazy(() => import("../Components/Home/Broucher"));
const Construction = lazy(() => import("../Components/Home/Construction"));
const Project_info = lazy(() => import("../Components/Home/Project_info"));
const Walkthrough = lazy(() => import("../Components/Home/Walkthrough"));
const Droneview = lazy(() => import("../Components/Home/Droneview"));

// Project Details Sub-Pages
const Circulation = lazy(() => import("../Components/Project details/Circulation"));
const Mobility = lazy(() => import("../Components/Project details/Mobility"));
const VerticalTransport = lazy(() => import("../Components/Project details/VerticalTransport"));
const Overview = lazy(() => import("../Components/Project details/OverviewNew"));
const AnimatedOverview = lazy(() => import("../Components/Project details/AnimatedOverview"));
const UnitPlanPage = lazy(() => import("../Components/Project details/UnitPlanPage"));
const Specification = lazy(() => import("../Components/Home/Specification"));
const Vr = lazy(() => import("../Pages/VR/Vr"));

const PageLoader = () => (
  <div className="w-screen h-screen bg-[#071d33] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* --- PAGES WITH LEFT NAVBAR --- */}
          <Route element={<Layout />}>
            <Route path="/location" element={<Location />} />
            <Route path="/amenities" element={<></>} />
          </Route>

          {/* --- PAGES WITHOUT LEFT NAVBAR --- */}
          <Route element={<BlankLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<InitialPage />} />
            <Route path="/vr" element={<Vr />} />
            <Route path="/sustainability" element={<AnimatedOverview />} />
            <Route path="/concept-summary" element={<AnimatedOverview />} />
            <Route path="/brochure" element={<Broucher />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/project-info" element={<Project_info />} />
            <Route path="/project-details" element={<Project_Details />} />

            <Route path="/specification" element={<Specification />} />

            <Route path="/unitplan/:id" element={<UnitPlanPage />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/overview" element={<Overview />} />

            <Route path="/walkthrough" element={<Walkthrough />} />
            <Route path="/droneview" element={<Droneview />} />

            {/* Project Details & The 4 Navigation Pages */}
            <Route path="/circulation" element={<Circulation />} />
            <Route path="/mobility" element={<Mobility />} />
            <Route path="/vertical-transport" element={<VerticalTransport />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
