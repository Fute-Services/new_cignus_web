import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets & Components
import bgImage from '../../assets/Project_Details/bg-image.png';
import ProjectBottomNav from '../../Components/Project details/ProjectBottomNav';
import placeholderImg from '../../assets/Project_Details/placeholder-gray.svg';

// Interface
interface Transport {
  _id: string;
  label: string;
  video: string;
}

// Static Placeholder Data (Replaces the API call) — no video yet, so a local
// placeholder image is shown instead (works offline, unlike an external URL)
const staticData: Transport[] = [
  { _id: '1', label: 'VT STRATEGY SECTION 01', video: '' },
  { _id: '2', label: 'VT STRATEGY SECTION 02', video: '' },
  { _id: '3', label: 'T1 & T2 VT STRATEGY', video: '' },
  { _id: '4', label: 'T2 – VT STRATEGY', video: '' },
];

const VerticalTransport: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [sections, setSections] = useState<Transport[]>([]);
  const [activeSection, setActiveSection] = useState<Transport | null>(null);
  const [animating, setAnimating] = useState(false);

  // Load static data on mount
  useEffect(() => {
    setSections(staticData);
  }, []);

  // Set initial active section once data is loaded
  useEffect(() => {
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0]);
    }
  }, [sections, activeSection]);

  if (!activeSection) return null; // Wait for data to set

  const handleSelect = (section: Transport) => {
    if (!activeSection || section._id === activeSection._id) return;

    setAnimating(true);
    setTimeout(() => {
      setActiveSection(section);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="relative text-white h-screen w-screen flex flex-col overflow-hidden font-sans bg-black">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={bgImage} 
          alt="Background sky" 
          className="w-full h-full object-cover blur-xl scale-110 opacity-70" 
        />
        <div className="absolute inset-0 bg-black/20"></div>
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

      {/* --- TITLE SECTION --- */}
      <div className="relative z-10 w-full flex items-center justify-center gap-4 md:gap-8 pt-10 pb-2 lg:pb-4 px-16 pointer-events-none">
        <div className="h-[2px] w-8 md:w-16 bg-white/50"></div>
        <h1 className="text-sm sm:text-base md:text-2xl lg:text-3xl tracking-[0.15em] lg:tracking-[0.2em] text-white uppercase drop-shadow-lg text-center font-bold">
          {activeSection.label}
        </h1>
        <div className="h-[2px] w-8 md:w-16 bg-white/50"></div>
      </div>

      {/* ── LAPTOP (lg+): video center, buttons floating right ── */}
      <div className="hidden lg:flex flex-row flex-1 gap-6 px-6 pb-20 overflow-hidden items-center relative z-10 pointer-events-none">
        
        {/* Video Container */}
        <div
          style={{ flex: 1, transition: 'opacity 0.3s ease', opacity: animating ? 0 : 1 }}
          className="h-[80vh] flex items-center justify-center"
        >
          <div className="w-[65%] h-[90%] rounded-[20px] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black pointer-events-auto">
            {activeSection.video ? (
              <video
                ref={videoRef}
                key={activeSection?._id}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={activeSection.video} type="video/mp4" />
              </video>
            ) : (
              <img src={placeholderImg} alt={activeSection.label} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* Floating Right Buttons (Animated Slide In) */}
        <div className="absolute right-[-100px] flex flex-col justify-center gap-4 shrink-0 w-[330px] pointer-events-auto pr-8">
          {sections.map((section) => {
            const isActive = section._id === activeSection._id;
            return (
              <button
                key={section._id}
                onClick={() => handleSelect(section)}
                className={`px-6 py-4 rounded-[50px] text-sm tracking-wider text-left cursor-pointer shadow-lg whitespace-nowrap border backdrop-blur-md transition-all duration-300 hover:-translate-x-10 ${
                  isActive 
                    ? 'bg-[rgba(255,206,117,1)] text-black border-[rgba(255,206,117,1)] font-bold' 
                    : 'bg-[#1a1a1a]/80 text-white border-white/20 hover:border-[rgba(255,206,117,1)] hover:bg-[#1a1a1a]'
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE / TABLET (< lg): video top, buttons bottom ── */}
      <div className="flex lg:hidden flex-col flex-1 overflow-hidden z-10 pb-28 pointer-events-none">
        
        {/* Video Container */}
        <div
          className="flex-1 flex items-center justify-center min-h-0 px-4 pt-1 pb-4"
          style={{ transition: 'opacity 0.3s ease', opacity: animating ? 0 : 1 }}
        >
          <div className="w-full h-auto max-h-[50vh] rounded-[20px] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black pointer-events-auto flex items-center justify-center">
            {activeSection.video ? (
              <video
                ref={videoRef}
                key={activeSection._id}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={activeSection.video} type="video/mp4" />
              </video>
            ) : (
              <img src={placeholderImg} alt={activeSection.label} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* Bottom Button Grid */}
        <div className="flex-shrink-0 px-4 pointer-events-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-2 gap-3">
              {sections.map((section) => {
                const isActive = section._id === activeSection._id;
                return (
                  <button
                    key={section._id}
                    onClick={() => handleSelect(section)}
                    className={`px-3 py-3 rounded-[14px] text-[10px] sm:text-xs font-bold tracking-wider text-center cursor-pointer shadow-md border transition-all duration-300 ${
                      isActive 
                        ? 'bg-[rgba(255,206,117,1)] text-black border-[rgba(255,206,117,1)]' 
                        : 'bg-[#1a1a1a]/80 text-white border-white/20 active:border-[rgba(255,206,117,1)] active:bg-white/10'
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <ProjectBottomNav />

    </div>
  );
};

export default VerticalTransport;