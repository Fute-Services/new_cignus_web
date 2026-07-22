import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


import bgImage from '../../assets/Project_info/project_info_bg_img.png';
import ReusableNavbar_projectinfo from './ReusableNavbar_Projectinfo';

// import leftimage from '../../assets/Project_info/Projectinfo_CignusTower.png';
import leftimage from '../../assets/Gallery/night-aerial-view1.jpeg';

import logo from '../../assets/Home/cignus updated logo.png';
import logo2 from '../../assets/Home/K_Raheja_Corp 1.png'
export default function Project_info() {
  const navigate = useNavigate();

  // The list of building specifications
  const specifications = [
    { label: "SITE & ARCHITECTURE", value: "Landmark building located directly by the lake" },
    { label: "FACADE DESIGN", value: "Curved full-glass curtain wall" },
    { label: "PODIUM SPACE", value: "Lush green-terraced podium levels" },
    { label: "ARRIVAL EXPERIENCE", value: "Dedicated arrival court and grand entry" },
    { label: "CERTIFICATIONS & POWER", value: "IGBC Platinum & WELL Gold target • 100% DG backup" }
  ];

  return (<>
    <div className="relative w-screen h-screen overflow-hidden text-white font-sans selection:bg-[#DAA950] selection:text-black">
      <ReusableNavbar_projectinfo />

      {/* --- LAYER 1: STATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover "
        />
        {/* Subtle dark overlay to ensure text pops */}
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* --- TOP LOGOS --- */}
      <motion.img
        src={logo}
        alt="Top Left Logo"
        className="absolute top-8 left-10 h-12 md:h-16 w-auto object-contain z-50 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <motion.img
        src={logo2}
        alt="Top Right Logo"
        className="absolute top-8 right-14 h-16 md:h-20 w-auto object-contain z-50 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* --- BACK BUTTON --- */}
      {/* --- TOP CENTER TITLE --- */}
      <motion.div
        className="absolute top-8 left-1/2 flex flex-col items-center justify-center text-center z-50 pointer-events-none"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-2xl lg:text-[40px] font-light tracking-[0.2em] text-white uppercase select-none leading-none">
          Design Philosophy
        </h1>
        <h2 className="text-[10px] lg:text-xs tracking-[0.25em] text-[#DAA950] font-light uppercase select-none mt-2">
          — THE ARCHITECTURE —
        </h2>
      </motion.div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-16 md:px-24 lg:px-32 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full max-w-7xl mt-10">

          {/* Left Column: Image with rounded corners and gold border */}
          <div className="w-full lg:w-[45%] flex items-center justify-center">
            <motion.div
              className="w-full max-w-[450px] aspect-[1/1] rounded-[32px] overflow-hidden border border-[#DAA950]/30 shadow-2xl bg-black/40"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src={leftimage}
                className="w-full h-full object-cover object-[30%_50%]"
                alt="Building Rendering"
              />
            </motion.div>
          </div>

          {/* Right Column: Title, Subtitles, Text, and Cards */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center text-left">

            {/* Paragraphs Section */}
            <motion.div
              className="flex flex-col gap-3.5 mt-6 text-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-xs lg:text-[15px] italic text-[#DAA950] font-light leading-relaxed">
                "Designed to disappear into its surroundings... and stand apart from everything else."
              </p>
              <p className="text-[10px] lg:text-[13px] text-white/80 font-light leading-relaxed">
                The curved glass façade wasn't a stylistic choice. It was a response to the site, to the way light moves off the lake, and the way the building needed to sit in its setting without competing with it. At different hours and from different angles, it looks like a completely different building.
              </p>
              <p className="text-[10px] lg:text-[13px] text-[#DAA950] font-bold leading-relaxed">
                That's the point. A tower that belongs here, not transplanted from a business district.
              </p>
            </motion.div>

            {/* List of Specifications (Cards with Rounded Corners) */}
            <motion.div
              className="flex flex-col gap-3 w-full mt-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {specifications.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-2.5 px-4 rounded-xl bg-white/00 border border-white/20 shadow-lg backdrop-blur-md"
                >
                  {/* Gold Check Circle Icon */}
                  <svg className="w-5 h-5 text-[#DAA950] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {/* Text Content */}
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-[11px] font-bold text-[#DAA950] uppercase tracking-wider leading-none">{item.label}</span>
                    <span className="text-[11px] md:text-[13px] text-white/90 font-light mt-0.5 leading-tight">{item.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- SPECIFICATIONS BUTTON --- */}
      <motion.div
        className="absolute bottom-6 right-20 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate("/specification")}
          className="bg-[#FFEFA8] text-black/80 hover:bg-[#FFEFA8]/90 px-6 py-2.5 rounded-full text-xs lg:text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Specifications
        </button>
      </motion.div>
    </div >

  </>)

}