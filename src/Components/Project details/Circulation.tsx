import React from 'react';
import { useNavigate } from 'react-router-dom';
import WithoutMotionHome from '../Navbar/WithoutMotionHome';

import bgImage from '../../assets/intial/bg_img.png';
import circulationVideo from '../../assets/Circulation/Powai-Site-plan Circulation.mp4';
import RightNavbar from '../../Components/Navbar/RightNavbar';
import logo1 from '../../assets/Home/cignus updated logo.png';

import logo2 from '../../assets/Home/K_Raheja_Corp 1.png';
const Circulation: React.FC = () => {
  const navigate = useNavigate();

  return (
     <div
            className="h-screen w-screen bg-cover bg-center bg-no-repeat relative pointer-events-auto overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Center Content Area */}
            {/* ✅ FIXED: Reduced z-index to 10 so it cleanly catches user actions underneath floating elements */}
            <div className="relative z-10 flex flex-col justify-center lg:justify-start items-center w-full h-full pt-0 lg:pt-10">

                {/* Page Title */}
                <h1 className="text-2xl md:text-3xl  lg:text-[45px] font-bold text-white tracking-wide mb-4 md:mb-10 drop-shadow-lg z-10 select-none">
                  Circulation
                </h1>

                {/* Rounded Rectangle Video Container */}
                {/* ✅ FIXED: Bumped to z-40 so it stays explicitly layered ABOVE any transparent components or side navbars */}
                <div className="relative z-40 w-[270px] md:w-[500px] lg:w-[1000px] aspect-video rounded-lg lg:rounded-3xl overflow-hidden shadow-2xl bg-black backdrop-blur-sm pointer-events-auto">
                    <video
                        src={circulationVideo}
                        className="w-full h-full object-cover relative z-50 pointer-events-auto"
                        autoPlay
                        muted
                        loop
                        controls
                        playsInline
                    />
                </div>

            </div>

            {/* Logos - Elevated z-index to z-50 */}
            <div className="absolute top-8 left-12 z-50 cursor-pointer" onClick={() => navigate("/home")}>
                <img src={logo1} alt="Cignus Powai" className="h-12 md:h-[63px] object-contain" />
            </div>
            <div className="absolute top-8 right-12 z-50 cursor-pointer" onClick={() => navigate("/home")}>
                <img src={logo2} alt="K Raheja Corp" className="h-12 md:h-[75px] object-contain" />
            </div>

            {/* Left Navbar Container */}
            <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
                <WithoutMotionHome />
            </div>

            {/* Right Navbar Container */}
            {/* ✅ FIXED: Wrapped in a self-contained absolute container with pointer-events-none, 
                forcing the component itself to drop any invisible background blocking layers. */}
            <div className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
                <div className="pointer-events-auto">
                    <RightNavbar />
                </div>
            </div>
        </div>
  );
};

export default Circulation;