import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import {motion} from 'framer-motion';
import WithBackButton from "../../Components/Navbar/WithBackButton";
// @ts-ignore
import backImg from "../../assets/back.png";
import "pannellum";
import "pannellum/build/pannellum.css";

declare global {
    interface Window {
        pannellum: any;
    }
}

export default function Vr() {
    // const navigate = useNavigate();
    const location = useLocation();
    const [currentScene, setCurrentScene] = useState<string>("dropoff");
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
    const viewerRef = useRef<any>(null);

    useEffect(() => {
        if (location.pathname === "/vr" && viewerRef.current) {
            viewerRef.current.loadScene("dropoff");
            setCurrentScene("dropoff");
        }
    }, [location.pathname]);

    const tourConfig: any = {
        default: {
            firstScene: "dropoff",
            autoLoad: true,
            sceneFadeDuration: 0,
        },
        scenes: {
            dropoff: {
                panorama: "./vr/dropoff.webp",
                yaw: -140,
                hotSpots: [
                    {
                        pitch: -18, yaw: -120, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Outdoor Seating 1", next: "dropoff_left", rotation: 40 }
                    },
                    {
                        pitch: -25, yaw: -130, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Outdoor Seating 2", next: "dropoff_right", rotation: 230 }
                    },
                    {
                        pitch: -25, yaw: -120, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Reception", next: "reception", rotation: 120 }
                    }
                ]
            },
            dropoff_left: {
                panorama: "./vr/dropoff_left.webp",
                yaw: 60,
                hotSpots: [
                    {
                        pitch: -25, yaw: 80, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Back to Drop Off", next: "dropoff", rotation: 60 }
                    }
                ]
            },
            dropoff_right: {
                panorama: "./vr/dropoff_right.webp",
                yaw: -90,
                hotSpots: [
                    {
                        pitch: -25, yaw: -130, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Back to Drop Off", next: "dropoff", rotation: 180 }
                    }
                ]
            },
            reception: {
                panorama: "./vr/reception.webp",
                pitch: -10,
                hotSpots: [
                    {
                        pitch: -25, yaw: 10, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Fine Dining", next: "cafeteria", rotation: 90 }
                    },
                    {
                        pitch: -20, yaw: 0, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Lift Lobby", next: "liftlobby", rotation: 0 }
                    },
                    {
                        pitch: -28, yaw: 0, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Back to Drop Off", next: "dropoff", rotation: 180 }
                    }
                ]
            },
            cafeteria: {
                panorama: "./vr/cafeteria.webp",
                pitch: -25,
                hotSpots: [
                    {
                        pitch: -50, yaw: 0, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Back to Reception", next: "reception", rotation: 180 }
                    }
                ]
            },
            liftlobby: {
                panorama: "./vr/liftlobby.webp",
                pitch: -25,
                hotSpots: [
                    {
                        pitch: -40, yaw: 0, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Breakout Zone", next: "top", rotation: 0 }
                    },
                    {
                        pitch: -43, yaw: -10, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Back to Reception", next: "reception", rotation: 270 }
                    }
                ]
            },
            top: {
                panorama: "./vr/top.webp",
                pitch: -10,
                hotSpots: [
                    {
                        pitch: -30, yaw: 0, type: "custom",
                        createTooltipFunc: (d: any, a: any) => createCustomHotspot(d, a),
                        createTooltipArgs: { text: "Back to Lift Lobby", next: "liftlobby", rotation: 180 }
                    }
                ]
            }
        }
    };

    const createCustomHotspot = (hotspotDiv: any, args: any) => {
        hotspotDiv.classList.add('custom-hotspot-main');
        const img = document.createElement('img');
        img.src = './vr/arrow2.png';
        img.className = 'custom-arrow-asset';
        img.setAttribute('draggable', 'false');

        const angle = args.rotation || 0;
        setTimeout(() => {
            img.style.transform = `rotate(${angle}deg)`;
        }, 10);

        const span = document.createElement('span');
        span.innerHTML = args.text;
        span.className = 'hotspot-label';
        hotspotDiv.appendChild(img);
        hotspotDiv.appendChild(span);

        img.onclick = () => {
            if (viewerRef.current) {
                viewerRef.current.loadScene(args.next);
                setCurrentScene(args.next);
            }
        };
    };

    useEffect(() => {
        if (window.pannellum && !viewerRef.current) {
            viewerRef.current = window.pannellum.viewer('pan-container', {
                ...tourConfig,
                "showControls": false,
                "mouseZoom": true,
                "autoRotate": 2,
                "autoRotateInactivityDelay": 5000
            });
            viewerRef.current.on('load', () => {
                setIsInitialLoad(false);
            });
        }
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, []);

    const handleZoomIn = () => viewerRef.current?.setHfov(viewerRef.current.getHfov() - 10);
    const handleZoomOut = () => viewerRef.current?.setHfov(viewerRef.current.getHfov() + 10);

    const getDisplayName = (id: string) => {
        const names: any = {
            dropoff: "DROP OFF",
            dropoff_left: "OUTDOOR SEATING 1",
            dropoff_right: "OUTDOOR SEATING 2",
            reception: "RECEPTION",
            cafeteria: "FINE DINING",
            liftlobby: "LIFT LOBBY",
            top: "BREAKOUT ZONE"
        };
        return names[id] || id.toUpperCase();
    };

    return (
        <div className="relative w-screen h-screen 
        overflow-hidden font-sans bg-[#0c0f12]">
            <style>{`
        .custom-hotspot-main { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; pointer-events: auto !important; }
        .custom-arrow-asset { 
          width: 65px !important; 
          height: 65px !important; 
          min-width: 65px !important; 
          min-height: 65px !important; 
          cursor: pointer !important; 
          display: block !important; 
          transition: transform 0.3s ease !important, opacity 0.2s ease !important; 
          opacity: 0.6;
          user-select: none !important;
          -webkit-user-drag: none !important;
        }
        .custom-arrow-asset:hover { opacity: 1; }
        .hotspot-label { visibility: hidden; position: absolute; bottom: 120px; background: rgba(0,0,0,0.8); color: white; padding: 6px 15px; border-radius: 20px; white-space: nowrap; font-weight: bold; font-size: 14px; border: 1px solid rgba(255,255,255,0.2); pointer-events: none; }
        .custom-hotspot-main:hover .hotspot-label { visibility: visible; }
        .pnlm-hotspot-base { background: none !important; }
        .pnlm-load-box, .pnlm-lbox, .pnlm-loading-indicator { display: none !important; }
        .pnlm-container { background-image: none !important; background-color: transparent !important; }

        @media (max-width: 768px) {
          .custom-arrow-asset {
            width: 45px !important;
            height: 45px !important;
            min-width: 45px !important;
            min-height: 45px !important;
          }
          .hotspot-label {
            font-size: 11px !important;
            padding: 4px 10px !important;
            bottom: 80px !important;
          }
        }

          @media (max-width: 425px) {
          .custom-arrow-asset {
            width: 20px !important;
            height: 20px !important;
            min-width: 20px !important;
            min-height: 20px !important;
          }
          .hotspot-label {
            font-size: 9px !important;
            padding: 4px 5px !important;
            bottom: 80px !important;
          }
        }
      `}</style>
       <motion.div
        className="absolute left-4 md:left-6 top-1/2 z-[100]"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: "-50%", opacity: 1 }} // Settles at standard vertical center
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
      >
        {/* <LeftNavbar /> */}
        <WithBackButton/>
      </motion.div>

            {/* Back Button */}
            {/* <button
                onClick={() => navigate('/home')}
                className="absolute top-6 left-6 md:top-10 md:left-16 w-10 
                h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center
                 justify-center transition-transform duration-300
                  hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
                aria-label="Go back"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
                    <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button> */}

            {/* Zoom Controls */}
            <div
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col
                 gap-3 md:right-8 md:gap-4"
            >
                <button onClick={handleZoomIn} className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xl md:text-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg">+</button>
                <button onClick={handleZoomOut} className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xl md:text-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg">−</button>
            </div>

            <div
                id="pan-container"
                className={`w-full h-full bg-transparent transition-opacity duration-500 ${isInitialLoad ? 'opacity-0' : 'opacity-100'}`}
            ></div>

            <div
                className="absolute bottom-16 md:bottom-20 lg:bottom-10
                 left-1/2 -translate-x-1/2 z-40"
            >
                <div className="bg-black/70 backdrop-blur-md text-white px-3
                 py-1.5 lg:px-8 lg:py-3 rounded-full border border-white/10 
                 shadow-2xl font-bold tracking-[0.25em] text-[9px] lg:text-sm
                  uppercase text-center">
                    {getDisplayName(currentScene)}
                </div>
            </div>
        </div>
    );
}