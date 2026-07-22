import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


import leftLogo from '../../assets/Home/cignus updated logo.png';
import rightLogo from '../../assets/Home/K_Raheja_Corp 1.png';
import WithoutMotionHome from '../../Components/Navbar/WithoutMotionHome';
// import WithBackButton from '../../Components/Navbar/WithBackButton'
import Reception1 from '../../assets/Gallery/Reception (3).png'
import Reception2 from '../../assets/Gallery/Reception (2).png'
import LiftLobby from '../../assets/Gallery/Lift Lobby.png'
import Cafetaria from '../../assets/Gallery/Cafeteria (2).png'
import SeatingArea from '../../assets/Gallery/Seating Area.jpg.jpeg'

import ElevationView from '../../assets/Gallery/new/elevation-with-lake-view.jpeg'
import AerialView from '../../assets/Gallery/new/aerial-view.jpeg'
import NightAerialView from '../../assets/Gallery/new/night-aerial-view1.jpeg'
import FacadeView from '../../assets/Gallery/new/facade-view.jpeg'
import Amenity1 from '../../assets/Gallery/new/amenities-view.jpeg'
import Amenity2 from '../../assets/Gallery/new/amenities-view-2.jpeg'
import Amenity3 from '../../assets/Gallery/new/amenities-view-3.png'

interface ImageItem {
  url?: string;
  image?: string;
  title?: string;
}

interface CategoryImages {
  category: string;
  images: ImageItem[];
}

const GALLERY_DATA: CategoryImages[] = [
  {
    category: "exterior",
    images: [
      {
        image: ElevationView,
        title: "Elevation With Lake View",
      },
      {
        image: AerialView,
        title: "Aerial View"
      },
      {
        image: NightAerialView,
        title: "Aerial View (Night)",
      },
      {
        image: FacadeView,
        title: "Facade View",
      },
      {
        image: Amenity1,
        title: "Amenities View",
      },
      {
        image: Amenity2,
        title: "Amenities View"
      },
      {
        image: Amenity3,
        title: "Amenities View"
      }
    ]
  },
  {
    category: "interior",
    images: [
      {
        image: Reception2,
        title: "Reception",
      },
      {
        image: Reception1,
        title: "Reception Entrance",
      },
      {
        image: SeatingArea,
        title: "Seating Area",
      },
      {
        image: Cafetaria,
        title: "Cafeteria",
      },
      {
        image: LiftLobby,
        title: "Lift Lobby",
      }
    ]
  }
];

export default function GalleryPage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("exterior");

  const filteredImages = useMemo(() => {
    return GALLERY_DATA.find((img) => img.category === viewMode)?.images || [];
  }, [viewMode]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const currentImage = filteredImages[activeIndex]?.image || "";

  return (
    <div className="w-screen h-[100vh] overflow-hidden relative
     bg-black flex flex-col items-center">
      <motion.div
        className="absolute left-4 md:left-6 top-1/2 z-[100]"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: "-50%", opacity: 1 }} // Settles at standard vertical center
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
      >
        {/* <LeftNavbar /> */}
        {/* <WithBackButton/> */}
        <WithoutMotionHome />
      </motion.div>

      {/* Full Screen Image with Cross-fade Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {currentImage && (
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={filteredImages[activeIndex]?.title || "Gallery"}
              className="w-full h-full object-contain lg:object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
        {/* Subtle dark overlay for UI readability */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Top Branding Logos */}
      <div onClick={() => navigate("/home")} className="absolute top-8 left-[50px] z-50 transition-transform hover:scale-105 duration-300">
        <img src={leftLogo} alt="Cignus Powai" className="h-20 w-auto object-contain" />
      </div>
      <div onClick={() => navigate("/home")} className="absolute top-8 right-8 z-50 mr-5 transition-transform hover:scale-105 duration-300">
        <img src={rightLogo} alt="K Raheja Corp" className="h-16 w-auto object-contain" />
      </div>



      {/* --- BACK BUTTON (Bottom Left) --- 
      <button
        onClick={() => navigate('/home')}
        className="absolute bottom-8 left-4 md:bottom-10 md:left-16 w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>*/}

      {/* Image Title Overlay */}
      <div className="absolute bottom-[20%] md:bottom-[25%] lg:bottom-[11.5%]  left-1/2 -translate-x-1/2 z-50
       text-center pointer-events-none">
        <AnimatePresence mode="wait">
          {filteredImages[activeIndex]?.title && (
            <motion.h2
              key={filteredImages[activeIndex]?.title}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-white text-lg md:text-xl font-light tracking-widest
               uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
            >
              {filteredImages[activeIndex]?.title}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Controls capsule */}
      <div className="absolute bottom-[15%] md:bottom-[15%] lg:bottom-[2%] left-1/2 -translate-x-1/2 z-50 flex 
      items-center bg-[#1e2018]/80 backdrop-blur-md border border-white/10 p-1
       rounded-full gap-2 shadow-2xl">

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-black/40 border border-white/10 text-white hover:bg-[#FFCF77] hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Toggle Group */}
        <div className="flex bg-black/35 rounded-full p-0.5 border border-white/5">
          <button
            onClick={() => { setViewMode('interior'); setActiveIndex(0); }}
            style={
              viewMode === 'interior'
                ? {
                  borderRadius: '60.714px',
                  border: '1.192px solid rgba(255, 255, 255, 0.44)',
                  opacity: 0.87,
                  background: 'linear-gradient(152deg, #FFCA6A 17.13%, #483E2D 107.38%)',
                }
                : undefined
            }
            className={`px-6 py-2.5 text-xs font-bold tracking-wider transition-all duration-300 ${viewMode === 'interior'
              ? 'text-white shadow-lg'
              : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
          >
            Interior
          </button>
          <button
            onClick={() => { setViewMode('exterior'); setActiveIndex(0); }}
            style={
              viewMode === 'exterior'
                ? {
                  borderRadius: '60.714px',
                  border: '1.192px solid rgba(255, 255, 255, 0.44)',
                  opacity: 0.87,
                  background: 'linear-gradient(152deg, #FFCA6A 17.13%, #483E2D 107.38%)',
                }
                : undefined
            }
            className={`px-6 py-2.5 text-xs font-bold tracking-wider transition-all duration-300 ${viewMode === 'exterior'
              ? 'text-white shadow-lg'
              : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
          >
            Exterior
          </button>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-black/40 border border-white/10 text-white hover:bg-[#FFCF77] hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

      </div>

    </div>
  );
}