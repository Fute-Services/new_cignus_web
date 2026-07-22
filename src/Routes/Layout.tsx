import { Outlet, useLocation } from "react-router-dom";
import LeftNavbar from "../Components/Navbar/LeftNavbar";
import Vr from "../Pages/VR/Vr";
import Amenities from "../Pages/Amenities/Amenities";

// --- 1. Standard Layout (WITH Left Navbar) ---
const Layout = () => {
  const location = useLocation();

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 text-white select-none">

      {/* Left Navigation Bar */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100]">
        <LeftNavbar />
      </div>

      {/* Main Content Area */}
      <div className="w-full h-full pointer-events-auto">
        {location.pathname === "/vr" && <Vr />}
        {location.pathname === "/amenities" && <Amenities />}
        {location.pathname !== "/vr" && location.pathname !== "/amenities" && <Outlet />}
      </div>

    </div>
  );
};

// --- 2. Cinematic Layout (WITHOUT Left Navbar) ---
export const BlankLayout = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black text-white select-none">
      <div className="w-full h-full pointer-events-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;