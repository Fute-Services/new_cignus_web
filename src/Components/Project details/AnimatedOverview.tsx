import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Assets
import buildingImg from '../../assets/Project_Details/animated.png';
import logo from '../../assets/Home/cignus updated logo.png';
import bgVideo from '../../assets/Project_Details/animated_Video.mp4'; 
import linesImg from '../../assets/Project_Details/lines.png'; 

const AnimatedOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which state is currently active based on the URL
  const isConcept = location.pathname.includes('concept-summary');

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      
      {/* --- LAYER 1: INFINITE BACKGROUND VIDEO (z-0) --- */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-60 mix-blend-screen" 
          autoPlay 
          loop 
          muted 
          playsInline
          src={bgVideo}
        />
        {/* Subtle dark overlay to ensure text readability */}
        <div className="absolute inset-0"></div>
      </div>

      {/* --- LAYER 1.5: HORIZONTAL LINES (z-10) --- */}
      {/* Sits right above the video but behind the building, text, and UI */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <img 
          src={linesImg} 
          alt="Decorative Lines" 
          className="w-full h-auto object-cover opacity-80 mix-blend-screen" 
        />
      </div>

      {/* --- BACK BUTTON (Bottom Left) --- */}
      <button 
        onClick={() => navigate('/overview')}
        className="absolute bottom-8 left-8 md:bottom-10 md:left-10 w-12 h-12 bg-[rgba(255,239,168,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* --- LOGO (Top Left - Fades out slowly on Concept page) --- */}
      <img 
        src={logo} 
        alt="Logo" 
        className={`absolute top-10 left-10 w-24 md:w-32 z-[100] transition-opacity duration-[3000ms] ease-in-out ${isConcept ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
      />

      {/* --- LAYER 2: THE ANIMATED BUILDING (z-20) --- */}
      <div 
        className={`absolute bottom-0 left-[1%] w-[55%] md:w-[48%] h-[90%] z-20 transition-all duration-[3000ms] ease-in-out origin-bottom pointer-events-none
          ${isConcept ? 'translate-x-[110%] md:translate-x-[125%] md:translate-y-[20%] scale-[1.2]' : '-translate-x-[20%] translate-y-[8%] scale-[1.05]'}
        `}
      >
        <img 
          src={buildingImg} 
          alt="Animated Building" 
          className="w-full h-full object-contain object-bottom drop-shadow-2xl" 
        />
      </div>

      {/* --- LAYER 3: TEXT CONTENT OVERLAYS (z-30) --- */}
      
      {/* STATE A: SUSTAINABILITY TEXT (Right Side) */}
      <div 
        className={`absolute top-[15%] right-[5%] w-[50%] md:w-[45%] h-[70%] z-30 flex flex-col justify-center transition-all duration-[3000ms] ease-in-out
          ${isConcept ? 'opacity-0 translate-x-32 pointer-events-none scale-95' : 'opacity-100 translate-x-0 scale-100 delay-300'}
        `}
      >
        <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-12 drop-shadow-md">
          Sustainability Initiatives
        </h1>

        <div className="flex flex-col gap-8 relative">
          {/* Decorative Vertical Dashed Line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] border-l-2 border-dashed border-white/30 -z-10"></div>

          {/* Item 1 */}
          <div className="flex gap-6">
            <div className="w-6 h-6 rounded-full bg-[rgba(255,239,168,1)] shrink-0 mt-1"></div>
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-3">Water Conservation</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Recycling & Reuse of water.<br/>
                Storage, Recharge & Use of Rainwater.<br/>
                Low Flow water efficient fixtures.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-6">
            <div className="w-6 h-6 rounded-full bg-[rgba(255,239,168,1)] shrink-0 mt-1"></div>
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-3">Energy Conservation</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                LED High efficiency light fixtures in common areas.<br/>
                Energy efficient motors for mechanical equipment.<br/>
                High COP chillers.<br/>
                Use of Low Global Warming Potential (LGWP) refrigent.<br/>
                Variable Frequency Drive on motors.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-6">
            <div className="w-6 h-6 rounded-full bg-[rgba(255,239,168,1)] shrink-0 mt-1"></div>
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-3">Other Initiatives</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                High efficiency double glazed envelope.<br/>
                Installation of Energy recovery systems.<br/>
                Below grade parking with Co sensors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STATE B: CONCEPT SUMMARY TEXT (Left Side) */}
      <div 
        className={`absolute top-[15%] left-[8%] w-[50%] md:w-[40%] h-[70%] z-30 flex flex-col justify-center transition-all duration-[3000ms] ease-in-out
          ${isConcept ? 'opacity-100 translate-x-0 scale-100 delay-300' : 'opacity-0 -translate-x-32 pointer-events-none scale-95'}
        `}
      >
        <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-10 drop-shadow-md">
          Superstructure
        </h1>

        <div className="flex flex-col gap-6 text-sm md:text-base text-gray-200 font-light leading-relaxed">
          <p>
            <span className="font-medium text-[rgba(255,239,168,1)] block mb-1">Superstructure</span>
            The building is designed on graded land with roughly 8m gradient west to east. It houses 8 levels of parking, an amenity floor and 1st to 17th floors of offices with terrace above having mechanical areas, elevator access for roof top recreational areas.
          </p>
          <p>
            <span className="font-medium text-[rgba(255,239,168,1)] block mb-1">Tenant Office</span>
            Tenant offices are located in 1st to 17th floor in both the towers T1 as well as T2.
          </p>
          <p>
            <span className="font-medium text-[rgba(255,239,168,1)] block mb-1">Refuge Area</span>
            Refuge areas are designed on 1st, 5th, 9th and 13th level, in compliance with Indian national code. Refuge areas are accessible from the road on South side.
          </p>
          <p>
            <span className="font-medium text-[rgba(255,239,168,1)] block mb-1">Office Lobbies</span>
            A public entrance hall is designed on Lower Ground level for T1 and Upper Ground floor for T2 accessible through drop off designed on South side of the site. Each tower has its own separate lobby.
          </p>
        </div>
      </div>

      {/* --- LAYER 4: STATE TOGGLE NAVBAR (z-50) --- */}
      <div className="absolute bottom-8 w-full flex justify-center z-50 pointer-events-none">
        <div className="flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-2xl pointer-events-auto">
          
          <button
            onClick={() => navigate('/sustainability')}
            className={`px-8 py-2.5 rounded-full text-xs md:text-sm capitalize transition-all duration-300 border ${
              !isConcept
                ? 'text-black border-[rgba(255,239,168,1)] bg-[rgba(255,239,168,1)] font-semibold'
                : 'text-gray-400 border-transparent hover:text-white bg-transparent'
            }`}
          >
            Sustainability
          </button>

          <button
            onClick={() => navigate('/concept-summary')}
            className={`px-8 py-2.5 rounded-full text-xs md:text-sm capitalize transition-all duration-300 border ${
              isConcept
                ? 'text-black border-[rgba(255,239,168,1)] bg-[rgba(255,239,168,1)] font-semibold'
                : 'text-gray-400 border-transparent hover:text-white bg-transparent'
            }`}
          >
            Concept Summary
          </button>

        </div>
      </div>

    </div>
  );
};

export default AnimatedOverview;