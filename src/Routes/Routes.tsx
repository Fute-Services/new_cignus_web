import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layouts from Layout.tsx
import Layout, { BlankLayout } from "./Layout";

// Main Pages
import Home from "../Pages/Home/Home";
import Location from "../Pages/Location/Location";
import Project_Details from "../Pages/Project details/Project_Details";
import Gallery from "../Pages/Gallery/Gallery";
import InitialPage from "../Pages/Home/HomeNew";
// import Initial2 from "../Pages/Home/intial2";

// Sub-components / Additional Pages
import Broucher from "../Components/Home/Broucher";
import Construction from "../Components/Home/Construction";
import Project_info from "../Components/Home/Project_info";
import Walkthrough from "../Components/Home/Walkthrough";
import Droneview from "../Components/Home/Droneview";

// Project Details Sub-Pages
import Circulation from "../Components/Project details/Circulation";
import Mobility from "../Components/Project details/Mobility";
import VerticalTransport from "../Components/Project details/VerticalTransport";
import Overview from "../Components/Project details/OverviewNew";
import AnimatedOverview from '../Components/Project details/AnimatedOverview';
import UnitPlanPage from "../Components/Project details/UnitPlanPage";
import Specification from "../Components/Home/Specification";
import Vr from "../Pages/VR/Vr";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* --- PAGES WITH LEFT NAVBAR --- */}
        <Route element={<Layout />}>

          {/* Main Navigation Pages */}
         
          <Route path="/location" element={<Location />} />
        
         
          <Route path="/amenities" element={<></>} />

          {/* Other Views */}
          
         


        </Route>

        {/* --- PAGES WITHOUT LEFT NAVBAR --- */}
        <Route element={<BlankLayout />}>
         <Route path="/home" element={<Home />} />
          <Route path="/" element={<InitialPage />} />
           <Route path="/vr" element={<Vr/>} />
          {/* <Route path="/initial2" element={<Initial2 />} /> */}
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
    </BrowserRouter>
  );
};

export default AppRoutes;