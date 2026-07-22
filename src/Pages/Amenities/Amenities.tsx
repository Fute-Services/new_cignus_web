import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "pannellum";
import "pannellum/build/pannellum.css";

import bgImg from '../../assets/Project_Details/Amenities cover page updated image (1).png';
import logo from '../../assets/Home/cignus updated logo.png';
import AmenitiesBottomNav from '../../Components/Amenities/AmenitiesBottomNav';
declare global {
    interface Window {
        pannellum: any;
    }
}

const Amenities: React.FC = () => {

    const navigate=useNavigate();

    const location = useLocation();
    const [currentScene, setCurrentScene] = useState<string>("");
    const [is360Active, setIs360Active] = useState<boolean>(false);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
    const viewerRef = useRef<any>(null);

    useEffect(() => {
        if (location.pathname !== "/amenities") {
            setIs360Active(false);
            setCurrentScene("");
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === "/amenities" && is360Active && viewerRef.current) {
            viewerRef.current.resize();
            const t1 = setTimeout(() => viewerRef.current?.resize(), 50);
            const t2 = setTimeout(() => viewerRef.current?.resize(), 150);
            const t3 = setTimeout(() => viewerRef.current?.resize(), 300);
            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                clearTimeout(t3);
            };
        }
    }, [location.pathname, is360Active]);

    const tourConfig: any = {
        default: {
            firstScene: "dropoff",
            autoLoad: true,
            sceneFadeDuration: 0,
        },
        scenes: {
            dropoff: {
                panorama: "./vr/dropoff.webp",
                yaw: -140
            },
            dropoff_left: {
                panorama: "./vr/dropoff_left.webp",
                yaw: 60
            },
            dropoff_right: {
                panorama: "./vr/dropoff_right.webp",
                yaw: -90
            },
            reception: {
                panorama: "./vr/reception.webp",
                pitch: -10
            },
            cafeteria: {
                panorama: "./vr/cafeteria.webp",
                pitch: -25
            },
            liftlobby: {
                panorama: "./vr/liftlobby.webp",
                pitch: 0
            },
            top: {
                panorama: "./vr/top.webp",
                pitch: -10
            }
        }
    };

    const getPanoramaUrl = (sceneId: string) => {
        const scenes: any = {
            dropoff: "./vr/dropoff.webp",
            dropoff_left: "./vr/dropoff_left.webp",
            dropoff_right: "./vr/dropoff_right.webp",
            reception: "./vr/reception.webp",
            cafeteria: "./vr/cafeteria.webp",
            liftlobby: "./vr/liftlobby.webp",
            top: "./vr/top.webp"
        };
        return scenes[sceneId] || "./vr/dropoff.webp";
    };

    useEffect(() => {
        if (window.pannellum && !viewerRef.current) {
            viewerRef.current = window.pannellum.viewer('pan-container-amenities', {
                ...tourConfig,
                "showControls": false,
                "mouseZoom": true,
                "autoRotate": 2,
                "autoRotateInactivityDelay": 5000
            });
            viewerRef.current.on('load', () => {
                setIsInitialLoad(false);
                viewerRef.current?.resize();
                setTimeout(() => {
                    viewerRef.current?.resize();
                }, 50);
            });
        }
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, []);

    const handleSceneChange = (sceneId: string) => {
        if (viewerRef.current) {
            setIs360Active(true);

            // If selecting dropoff initially and it is already loaded
            if (currentScene === "" && sceneId === "dropoff") {
                setCurrentScene("dropoff");
                return;
            }

            if (sceneId !== currentScene) {
                setCurrentScene(sceneId);
                viewerRef.current.loadScene(sceneId);
            }
        }
    };

    // const navItems = [
    //     { id: 'dropoff', label: 'Drop Off' },
    //     { id: 'dropoff_left', label: 'Outdoor Seating 1' },
    //     { id: 'dropoff_right', label: 'Outdoor Seating 2' },
    //     { id: 'reception', label: 'Reception' },
    //     { id: 'cafeteria', label: 'Fine Dining' },
    //     { id: 'liftlobby', label: 'Lift Lobby' },
    //     { id: 'top', label: 'Breakout Zone' },
    // ];

    return (
        <div
            className="relative w-screen h-screen overflow-hidden
             font-sans bg-[#0c0f12] text-white select-none"
            style={{
                backgroundImage: is360Active ? `url('${getPanoramaUrl(currentScene)}')` : `url('${bgImg}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
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
            `}</style>

            {/* --- LAYER 1: 360 PANORAMA VIEWER (z-0) --- */}
            <div
                id="pan-container-amenities"
                className={`absolute inset-0 z-0 w-full h-full bg-transparent transition-opacity duration-300 ${(is360Active && !isInitialLoad) ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* --- LAYER 2: LOGO (Top Left, hidden when 360 is active) --- */}
            <div onClick={()=>navigate("/home")}
            className={`absolute   z-10   pointer-events-auto top-6 left-6 w-32 md:w-44 z-[100] 
                transition-opacity duration-500 ${is360Active ? 'opacity-0 ' : 'opacity-100'}`}>
                <div  className="absolute top-[10px] 
                 -translate-x-1/2 -translate-y-1/2 w-full h-[67px] rounded-full blur-xl
                
                " />
                <img
                    src={logo}
                    alt="Logo"
                    className="relative z-10 w-full h-[75px] object-contain"
                />
            </div>

            {/* Back Button (Only shown if 360 is active) */}
            {is360Active && (
                <button
                    onClick={() => {
                        setIs360Active(false);
                        setCurrentScene("");
                    }}
                    className="absolute top-6 left-6 md:top-10 md:left-16 w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
                    aria-label="Go back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
                        <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            )}

            {/* --- LAYER 3: POP-UP TEXT (z-10) --- */}
            <div className={`absolute top-[15%] w-full flex justify-center z-10 pointer-events-none transition-opacity duration-500 ${is360Active ? 'opacity-0' : 'opacity-100'}`}>
                <h1
                    className="text-4xl sm:text-6xl md:text-[8vw] font-light tracking-widest uppercase drop-shadow-[0_0_30px_rgba(218,169,80,0.5)]"
                    style={{
                        background: 'linear-gradient(to left, rgba(218, 169, 80, 1) 60%, rgba(218, 169, 80, 0) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Amenities
                </h1>
            </div>

            {/* --- LAYER 4: BOTTOM NAVBAR --- */}
            {/* --- LAYER 4: BOTTOM NAVBAR --- */}
            <div
                className="
    absolute
    bottom-[10%]
    sm:bottom-[10%]
    md:bottom-[10%]
    lg:bottom-[3%]

    landscape:bottom-[7%]
    md:landscape:bottom-[12%]
    lg:landscape:bottom-[3%]

    w-full
    z-[999]
    px-4
  "
            >
                <div className="flex justify-center items-center">
                    <AmenitiesBottomNav
                        currentScene={currentScene}
                        onSceneChange={handleSceneChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Amenities;