// import React from 'react';

// // Adjust the path to your assets based on your actual folder structure
// import bgImage from '../../assets/Project_Details/bg-image.png';
// import buildingImage from '../../assets/Project_Details/buiding-image.png';

// // Import your new reusable navbar component
// import ProjectBottomNav from '../../Components/Project details/ProjectBottomNav';

// const Project_Details: React.FC = () => {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">

//       {/* --- BACKGROUND LAYERS --- */}
//       {/* Z-0: Sky/Background Image */}
//       <img 
//         src={bgImage} 
//         alt="Background sky" 
//         className="absolute inset-0 w-full h-full object-cover z-0" 
//       />

//       {/* Z-10: Building Image in front */}
//       <img 
//         src={buildingImage} 
//         alt="Building" 
//         className="absolute inset-0 w-full h-full object-cover z-10" 
//       />

//       {/* --- UI OVERLAY --- */}
//       {/* Z-20: Interactive UI Elements. pointer-events-none lets clicks pass through to the 
//           background if needed, while pointer-events-auto re-enables clicks on our UI components */}
//       <div className="absolute inset-0 z-20 flex flex-col justify-between p-10 pointer-events-none">

//         {/* Top Section: Glassmorphism List Container */}
//         <div className="flex flex-1 items-center justify-start ml-[120px] pointer-events-auto">

//           {/* List Container (Glassmorphism styling) */}
//           <div className="w-[380px] h-[550px] bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col shadow-2xl">
//             {/* Table Header */}
//             <div className="grid grid-cols-3 gap-4 border-b border-white/20 pb-4 mb-4 text-xs font-semibold text-gray-300 uppercase tracking-wider">
//               <span>Floor</span>
//               <span>Tower 1 sqft</span>
//               <span>Tower 2 sqft</span>
//             </div>

//             {/* Table Rows (Empty lines for the visual layout) */}
//             <div className="flex-1 flex flex-col gap-0">
//               {[...Array(10)].map((_, i) => (
//                 <div key={i} className="grid grid-cols-3 gap-4 border-b border-white/40 py-3">
//                   <div className="h-4 w-full"></div>
//                   <div className="h-4 w-full"></div>
//                   <div className="h-4 w-full"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>



//     </div>
//   );
// };

// export default Project_Details;

import React, { useState } from 'react';
import RightTable from './RightTable';
import Building from './Building';
import LeftNavbar from '../../Components/Navbar/LeftNavbar';
import left_logo from "../../assets/Home/cignus updated logo.png"
import { Link } from 'react-router-dom';
// import right_logo from "../../assets/Home/K_Raheja_Corp 1.png"
import { motion } from 'framer-motion'
import { type FloorData, floors } from "../../Data/FloorData";

const Project_Details: React.FC = () => {
  const [hoveredFloor, setHoveredFloor] = useState<FloorData | null>(null);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      {/* Left Navbar */}
      <motion.div
        className="absolute left-4 md:left-6 z-[100]"
        style={{ top: "50%" }}
        // 1. Changed x from "-100%" to -50 for a shorter, elegant slide distance
        initial={{ x: -50, y: "-50%", opacity: 0 }}
        animate={{ x: 0, y: "-50%", opacity: 1 }}
        transition={{
          duration: 3, // 2. Slightly increased duration to make it gentler
          // delay: 5,
          delay: 2,
          // 3. A premium cubic-bezier that gives a luxurious slow-down effect
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <LeftNavbar />
      </motion.div>

      <header className="fixed top-1 md:top-6 left-8 z-20 pointer-events-none">
        <div className="relative pointer-events-auto transition-transform duration-300">
          <div className="absolute  -translate-x-1/2 -translate-y-1/2 w-[650%] h-[220%] bg-transparent lg:bg-gradient-to-r lg:from-[#054d8d]/70 lg:to-[#6c95c2] rounded-full md:blur-xl pointer-events-none z-0" />
          <Link to="/" className="relative z-10 block">
            <img src={left_logo} alt="Cignus Logo" className="h-14 w-14 md:h-[67px] md:w-auto object-contain" />
          </Link>
        </div>
      </header>
      {/* --- LAYER 1: BASE MAP CANVAS (z-10) --- */}
      <div className="absolute inset-0 z-10 w-full h-screen overflow-hidden">
        <Building floors={floors}
          hoveredFloor={hoveredFloor}
          setHoveredFloor={setHoveredFloor} />
      </div>

      {/* --- LAYER 2: INTERACTIVE SIDEBAR UI (z-20) --- */}
      {/* Container wraps around the right side. pointer-events-none lets clicks pass through to the building */}
      <motion.div
        className="absolute z-20 top-[30%] md:top-0  right-2 w-[30%] lg:w-[23%] h-screen flex justify-center
         items-center pointer-events-none"
        // 1. Changed x from "100%" to 60 for a shorter, more elegant slide distance
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 3,                 // 2. Increased from 1s to 1.4s to make it gentler
          // delay: 5,
          delay: 2,
          // 3. Premium ease-out curve that bursts smoothly and spends time gently slowing down
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {/* pointer-events-auto is isolated directly here so only the table captures clicks */}
        <div className="pointer-events-auto w-full h-[35%] md:h-[50%] lg:h-[80%]">

          <RightTable
            floors={floors}
            hoveredFloor={hoveredFloor}
            setHoveredFloor={setHoveredFloor}

          />
        </div>
      </motion.div>

    </div>
  );
};

export default Project_Details;