import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets & Components
import bgImage from '../../assets/Project_Details/bg-image.png';
import ProjectBottomNav from '../../Components/Project details/ProjectBottomNav';

// Static Data (Replaces Backend API for now)
const staticData = [
  { title: 'Lower Zone', url: 'https://placehold.co/1280x720/4a4a4a/FFFFFF?text=Gray+Image+1' },
  { title: 'Mid Zone', url: 'https://placehold.co/1280x720/6b6b6b/FFFFFF?text=Gray+Image+2' },
  { title: 'Upper Zone', url: 'https://placehold.co/1280x720/8c8c8c/FFFFFF?text=Gray+Image+3' },
];

const Mobility: React.FC = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Since we are using static data, we don't need isLoading state anymore
  const contentItems = staticData;
  const selectedItem = contentItems[selectedIndex];

  // Get indices of items that are NOT currently selected for the thumbnails
  const otherIndices = contentItems
    .map((_, i) => i)
    .filter((i) => i !== selectedIndex);

  // Animation constants from your template
  const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
  const DUR = "750ms";

  return (
    <div className="relative text-white w-screen h-screen flex flex-col items-center overflow-hidden font-sans bg-black">
      
      {/* --- BACKGROUND LAYER (From Circulation Page) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={bgImage} 
          alt="Background sky" 
          className="w-full h-full object-cover blur-xl scale-110 opacity-70" 
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ── LAPTOP (lg+) ── */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative w-full z-10 px-4">

        {/* Title Section */}
        <div className="absolute top-[8%] z-20 pointer-events-none flex items-center justify-center gap-8">
          <div className="h-[2px] w-16 bg-white/50"></div> {/* Replaced missing L_vector */}
          <h2 className="text-white text-lg lg:text-3xl font-bold uppercase tracking-[0.2em] text-center drop-shadow-lg">
            {selectedItem?.title}
          </h2>
          <div className="h-[2px] w-16 bg-white/50"></div> {/* Replaced missing R_vector */}
        </div>

        {/* Main media container */}
        <div className="relative w-[65%] h-[70vh] flex items-center justify-center">
          {contentItems.map((item, index) => {
            const isActive = selectedIndex === index;
            const isVideo = item.url.includes(".mp4");

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(0.1)',
                  transformOrigin: 'bottom right',
                  transition: `transform ${DUR} ${EASE}, opacity ${DUR} ${EASE}`,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 20 : 10
                }}
              >
                <div className="w-[80vw] h-[75vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[20px] overflow-hidden border border-white/20 bg-black">
                  {!isVideo ? (
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Side Panel (Thumbnails) */}
        <div className="absolute top-[30%] right-[4%] z-[100] flex flex-col gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-3 shadow-2xl pointer-events-auto">
          {otherIndices.map((idx) => {
            const item = contentItems[idx];
            const isVideo = item.url.includes(".mp4");

            return (
              <div
                key={idx}
                className="relative w-[165px] h-[115px] rounded-[14px] overflow-hidden cursor-pointer border-2 border-white/30 hover:border-[rgba(255,206,117,1)] transition-all duration-300 shadow-xl group"
                onClick={() => setSelectedIndex(idx)}
              >
                {!isVideo ? (
                  <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <video src={item.url} muted loop autoPlay playsInline className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end justify-center pb-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center px-1">
                    {item.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── MOBILE & TABLET (up to lg) ── */}
      <div className="flex lg:hidden flex-col w-full h-full z-10 pointer-events-none pb-24">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-3 pt-14 md:pt-16 pb-4 md:pb-2 px-4 md:px-8">
          <h2 className="text-white text-base md:text-xl font-bold uppercase text-center tracking-wider drop-shadow-md">
            {selectedItem?.title}
          </h2>
        </div>

        {/* Main Media */}
        <div className="flex-1 relative w-full px-4 md:px-12 pb-4 md:pb-8">
          {contentItems.map((item, index) => {
            const isActive = selectedIndex === index;
            const isVideo = item.url.includes(".mp4");
            return (
              <div
                key={index}
                className="absolute inset-0 px-4 md:px-12 flex items-center justify-center md:-translate-y-6"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(0.1)',
                  transformOrigin: 'bottom right', 
                  transition: `transform ${DUR} ${EASE}, opacity ${DUR} ${EASE}`,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 20 : 10
                }}
              >
                <div className="w-full h-auto md:w-fit md:h-full md:max-h-[55vh] flex items-center justify-center shadow-xl rounded-[20px] overflow-hidden border border-white/20 bg-black pointer-events-auto">
                  {!isVideo ? (
                    <img src={item.url} className="w-full h-full object-contain md:w-auto" alt="" />
                  ) : (
                    <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-cover md:w-auto md:object-contain" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Thumbnails */}
        <div className="w-full pb-8 md:pb-8 md:mt-2 px-4 md:px-12 pointer-events-auto z-50">
          <div className="flex flex-row justify-center gap-3 md:gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-2.5 md:p-4">
            {otherIndices.map((idx) => {
              const item = contentItems[idx];
              const isVideo = item.url.includes(".mp4");
              return (
                <div
                  key={idx}
                  className="relative rounded-[14px] overflow-hidden border-2 border-white/30 h-20 md:h-28 flex-1 cursor-pointer active:border-[rgba(255,206,117,1)]"
                  onClick={() => setSelectedIndex(idx)}
                >
                  {!isVideo ? (
                    <img src={item.url} className="w-full h-full object-cover" />
                  ) : (
                    <video src={item.url} muted loop autoPlay playsInline className="w-full h-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end justify-center pb-1">
                     <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center px-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* --- BACK BUTTON --- */}
      <button 
        onClick={() => navigate('/project-details')}
        className="absolute bottom-8 left-8 md:bottom-10 md:left-16 w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* --- BOTTOM NAVIGATION --- */}
      <ProjectBottomNav />

    </div>
  );
};

export default Mobility;