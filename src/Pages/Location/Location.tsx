import { useState } from 'react';
import siteLocation from '../../assets/Location/NEW FINAL SITE LOCATION IMG.jpeg';
import neighborhood from '../../assets/Location/img location.png';
import transport from '../../assets/Location/Transport.mp4';

import jvlr from '../../assets/Location/Towards eastern & western expressway final (2) (2).mp4';
import lnt from '../../assets/Location/AAREY METRO (2).mp4';
import sakinaka from '../../assets/Location/SAKINAKA METRO (2).mp4';
import rambaugh from '../../assets/Location/RAMBAUG METRO (3).mp4';

import logo from '../../assets/Home/cignus updated logo.png'

const Location = () => {
  const [activeTab, setActiveTab] = useState('site');

  // New state to track which video is playing inside the 'Network Road' tab
  const [activeNetworkVideo, setActiveNetworkVideo] = useState('jvlr');

  // Data structure holding the content for each tab
  const tabs = [
    {
      id: 'site',
      label: 'Site Location',
      type: 'image',
      src: siteLocation,
      markers: [
        { id: 1, top: '25%', left: '49%', label: 'CIGNUS 1' },
        { id: 2, top: '67%', left: '44%', label: 'Proposed Development' },
        { id: 3, top: '65%', left: '60%', label: '', imgSrc: logo },
        { id: 4, top: '35%', left: '59%', label: 'THE WESTIN' },
        { id: 5, top: '65%', left: '85%', label: 'POWAI LAKE' },
      ]
    },
    {
      id: 'neighbourhood',
      label: 'Neighbourhood',
      type: 'image',
      src: neighborhood,
      markers: [
        { id: 1, top: '18%', left: '8%', label: 'JVLR Metro Station' },
        { id: 2, top: '64%', left: '38%', label: 'Rambaug Metro Station' },
        { id: 3, top: '62%', left: '76%', label: 'Hiranandani Hospital' },
        { id: 4, top: '77%', left: '67%', label: 'Hiranandani Gardens' },
        { id: 5, top: '20%', left: '80%', label: 'IIT Bombay' },
        { id: 6, top: '40%', left: '50%', label: 'POWAI LAKE' },
        { id: 7, top: '19%', left: '45%', label: '', imgSrc: logo },
      ]
    },
    {
      id: 'road',
      label: 'Connectivity',
      type: 'multi-video',
      videos: [
        {
          id: 'jvlr',
          label: 'JVLR',
          src: jvlr,
          markers: [
            { id: 'jvlr-m1', top: '19%', left: '45%', label: '', imgSrc: logo },
          ]
        },
        {
          id: 'rambaug',
          label: 'Rambaugh Metro',
          src: rambaugh,
          markers: [
            { id: 'jvlr-m1', top: '20%', left: '45%', label: '', imgSrc: logo },
            { id: 'ram-m2', top: '63%', left: '36%', label: 'Rambaugh Metro Station' }
          ]
        },
        {
          id: 'sakanaka',
          label: 'Saki-Naka Metro',
          src: sakinaka,
          markers: [
            { id: 'jvlr-m1', top: '22%', left: '45%', label: '', imgSrc: logo },
            { id: 'saki-m2', top: '95%', left: '8%', label: 'Saki-Naka Metro Station' }
          ]
        },
        {
          id: 'lt',
          label: 'Aarey Metro Station',
          src: lnt,
          markers: [
            { id: 'jvlr-m1', top: '20%', left: '45%', label: '', imgSrc: logo },
            { id: 'aarey-m2', top: '20%', left: '5.5%', label: 'Aarey Metro Station' }
          ]
        },
      ]
    },
    {
      id: 'transport',
      label: 'Airport Connectivity',
      type: 'video',
      src: transport,
      markers: [
        { id: 'air-m1', top: '15%', left: '58.7%', label: '', imgSrc: logo },
        { id: 'air-m3', top: '59%', left: '49.5%', label: 'Towards Saki-Naka Metro Station' },
        { id: 'air-m2', top: '70%', left: '25.5%', label: 'Chhatrapati Shivaji Maharaj International Airport' },
      ]
    }
  ];

  const currentContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

  // Helper to determine the active video source for rendering
  const activeVideoSrc = currentContent.type === 'multi-video'
    ? currentContent.videos?.find(v => v.id === activeNetworkVideo)?.src || currentContent.videos?.[0]?.src || ""
    : currentContent.src || "";

  // Helper to find markers for active sub-video if on multi-video tab
  const activeVideoMarkers = currentContent.type === 'multi-video'
    ? currentContent.videos?.find(v => v.id === activeNetworkVideo)?.markers || []
    : [];

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-y-auto lg:overflow-hidden">

      {/* INJECTED CSS FOR STAGGERED MARKER ANIMATION */}
      <style>{`
        @keyframes markerPopIn {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-marker {
          opacity: 0; 
          animation: markerPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* BACKGROUND CONTENT LAYER */}
      <div className="absolute inset-0 w-full h-full">
        {currentContent.type === 'image' ? (
          <div key={activeTab} className="relative w-full h-full">
            <img
              src={currentContent.src}
              alt={currentContent.label}
              className="w-full h-full object-cover"
            />

            {/* INTERACTIVE ANIMATED MARKERS FOR IMAGES */}
            {currentContent.markers?.map((marker, index) => (
              <div
                key={marker.id}
                className="absolute z-20"
                style={{ top: marker.top, left: marker.left }}
              >
                <div className="transform -translate-x-1/2 -translate-y-full">
                  <div
                    className="flex flex-col items-center pb-2 animate-marker cursor-pointer group"
                    style={{ animationDelay: `${index * 0.15}s` }}
                    onClick={() => console.log(`Navigating for: ${marker.label}`)}
                  >
                    <div className="relative z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-2xl text-[10px] tracking-[0.1em] uppercase whitespace-nowrap border border-white/5 transition-all duration-300 group-hover:bg-[#ffce75] group-hover:text-gray-900 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center gap-2">

                      {/* Conditional Logo Rendering */}
                      {marker.imgSrc && (
                        <img
                          src={marker.imgSrc}
                          alt="logo"
                          className="h-20 w-20 object-contain"
                          style={{ backgroundColor: 'white', borderRadius: '8px' }}
                        />
                      )}

                      {marker.label}
                    </div>
                    <div className="w-6 h-6 bg-black/70 backdrop-blur-sm rotate-45 -mt-3 rounded-sm z-0 border-b border-r border-white/5 transition-all duration-300 group-hover:bg-[#ffce75]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Video Player Container */
          <div className="relative w-full h-full bg-black">

            {/* INSTANT SWITCHING LOGIC: Render all videos and toggle opacity to avoid white loading flash */}
            {currentContent.type === 'multi-video' ? (
              currentContent.videos?.map((vid) => (
                <video
                  key={vid.id}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: activeNetworkVideo === vid.id ? 1 : 0,
                    zIndex: activeNetworkVideo === vid.id ? 10 : 0
                  }}
                >
                  <source src={vid.src} type="video/mp4" />
                </video>
              ))
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                key={activeVideoSrc}
              >
                <source src={activeVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* INTERACTIVE ANIMATED MARKERS ON TOP OF MULTI-VIDEOS */}
            {currentContent.type === 'multi-video' && (
              <div key={activeNetworkVideo} className="absolute inset-0 pointer-events-none z-20">
                {activeVideoMarkers.map((marker, index) => (
                  <div
                    key={marker.id}
                    className="absolute pointer-events-auto"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <div className="transform -translate-x-1/2 -translate-y-full">
                      <div
                        className="flex flex-col items-center pb-2 animate-marker cursor-pointer group"
                        style={{ animationDelay: `${index * 0.15}s` }}
                        onClick={() => console.log(`Handling click for video marker: ${marker.label}`)}
                      >
                        <div className="relative z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-2xl text-[10px] tracking-[0.1em] uppercase whitespace-nowrap border border-white/5 transition-all duration-300 group-hover:bg-[#ffce75] group-hover:text-gray-900 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center gap-2">

                          {/* LOGO RENDERING LOGIC */}
                          {marker.imgSrc && (
                            <img
                              src={marker.imgSrc}
                              alt="logo"
                              className="h-20 w-20 object-contain rounded"
                              style={{ backgroundColor: 'white' }}
                            />
                          )}

                          {marker.label}
                        </div>
                        <div className="w-6 h-6 bg-black/70 backdrop-blur-sm rotate-45 -mt-3 rounded-sm z-0 border-b border-r border-white/5 transition-all duration-300 group-hover:bg-[#ffce75]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* INTERACTIVE ANIMATED MARKERS ON TOP OF SINGLE AIRPORT CONNECTIVITY VIDEO */}
            {currentContent.type === 'video' && currentContent.markers && (
              <div key={activeTab} className="absolute inset-0 pointer-events-none z-20">
                {currentContent.markers.map((marker, index) => (
                  <div
                    key={marker.id}
                    className="absolute pointer-events-auto"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <div className="transform -translate-x-1/2 -translate-y-full">
                      <div
                        className="flex flex-col items-center pb-2 animate-marker cursor-pointer group"
                        style={{ animationDelay: `${index * 0.15}s` }}
                        onClick={() => console.log(`Handling click for airport marker: ${marker.label}`)}
                      >
                        {/* Added flex, items-center, and gap-2 to the div below to align logo + text */}
                        <div className="relative z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-2xl text-[10px] tracking-[0.1em] uppercase whitespace-nowrap border border-white/5 transition-all duration-300 group-hover:bg-[#ffce75] group-hover:text-gray-900 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center gap-2">

                          {/* IMAGE RENDERING LOGIC */}
                          {marker.imgSrc && (
                            <img
                              src={marker.imgSrc}
                              alt="logo"
                              className="h-14 w-14 object-contain rounded"
                              style={{ backgroundColor: 'white', padding: '2px' }}
                            />
                          )}

                          {marker.label}
                        </div>
                        <div className="w-6 h-6 bg-black/70 backdrop-blur-sm rotate-45 -mt-3 rounded-sm z-0 border-b border-r border-white/5 transition-all duration-300 group-hover:bg-[#ffce75]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* TOP NAVIGATION BAR OVERLAY */}
      <div className="absolute bottom-[5%] md:bottom-[8%] lg:bottom-[3%] left-0
       right-0 w-full flex justify-center z-30 px-2 lg:px-4">
        <div className="bg-[#6A6A6A]/90 backdrop-blur-sm p-1.5 rounded-full flex gap-2 shadow-lg ">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={` px-2 py-1
                  lg:px-8 lg:py-3 rounded-full text-[10px] lg:text-sm font-medium transition-all duration-300
                  ${isActive
                    ? 'bg-[#ffce75] text-gray-900 shadow-sm'
                    : 'text-white hover:bg-[rgba(255, 205, 114, 1)]'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE MULTI-VIDEO NAVIGATION OVERLAY */}
      {activeTab === 'road' && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md rounded-l-3xl p-6 w-64 flex flex-col gap-6 z-30 border border-white/10 border-r-0 shadow-2xl">
          {currentContent.videos?.map((vid) => {
            const isActiveVid = activeNetworkVideo === vid.id;
            return (
              <button
                key={vid.id}
                onClick={() => setActiveNetworkVideo(vid.id)}
                className={`
                  text-left pb-3 text-sm tracking-wide transition-all duration-300
                  ${isActiveVid
                    ? '!text-[#ffcd72] border-b-2 !border-[#ffcd72] font-medium'
                    : 'text-white/70 border-b border-white/20 hover:!text-[#ffcd72] hover:!border-[#ffcd72]'
                  }
                `}
              >
                {vid.label}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Location;