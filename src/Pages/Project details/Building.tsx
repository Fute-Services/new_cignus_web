import React, { useCallback } from "react";
import buildingImage from "../../assets/Project_Details/project-details.webp";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { VIEWBOX_W, VIEWBOX_H, type FloorData } from "../../Data/FloorData";

interface BuildingSelectorProps {
  floors: FloorData[];
  hoveredFloor: FloorData | null;
  setHoveredFloor: React.Dispatch<React.SetStateAction<FloorData | null>>;
  // buildingImage: string; // Ensure this is typed or passed correctly
}

export default function BuildingSelector({
  floors,
  hoveredFloor,
  setHoveredFloor,
  // buildingImage,
}: BuildingSelectorProps) {

  const svgToPercent = useCallback(
    (svgX: number, svgY: number) => ({
      x: (svgX / VIEWBOX_W) * 100,
      y: (svgY / VIEWBOX_H) * 100,
    }),
    []
  );

  const navigate = useNavigate();

  return (
    /* FIX 1: Changed w-screen to w-full. Max-w-full prevents overflows on smaller breakpoints.
      The aspect ratio remains strict, locking down coordinate alignment.
    */
    <div
      className="relative w-full max-w-full  overflow-hidden justify-center
       items-center h-screen flex select-none mx-auto"
      style={{ aspectRatio: `${VIEWBOX_W} / ${VIEWBOX_H}` }}
    >
      {/* ── Background Image Layer ── */}
      <motion.div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{ originX: 0.5, originY: 0.2 }}
        initial={{ scale: 1.10 }}
        animate={{ scale: [1.15, 1.20, 1] }}
        transition={{
          duration: 2,
          delay: 0.1,
          times: [0, 0.1, 1],
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        <img
          src={buildingImage}
          alt="Cignus Building"
          draggable={false}
          /* FIX 2: Switched to object-cover. 
            Because the outer div holds the aspect-ratio, 'object-cover' forces the graphic 
            to stretch and trim perfectly with the bounding matrix.
          */
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Interactive SVG layer ── */}
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        /* FIX 3: Changed from 'none' to 'xMidYMid slice'. 
          This forces the SVG vector layer to crop and scale exactly like the 'object-cover' image above,
          keeping coordinates seamlessly pinned together on mobile, tablets, and desktops.
        */
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full z-20 pointer-events-auto"
        aria-hidden="true"
      >
        <defs>
          {floors.map((f) => (
            <linearGradient
              key={f.gradientId}
              id={f.gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#D4830A" stopOpacity="0.10" />
              <stop offset="45%" stopColor="#F5A623" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#F5A623" stopOpacity="0.35" />
              <stop offset="68%" stopColor="#E8941A" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#E8941A" stopOpacity="0.55" />
              <stop offset="78%" stopColor="#E8941A" stopOpacity="0.60" />
              <stop offset="100%" stopColor="#C47A10" stopOpacity="0.65" />
            </linearGradient>
          ))}
        </defs>

        {floors.map((floor) => {
          const isActive = hoveredFloor?.id === floor.id;
          return (
            <polygon
              key={floor.id}
              points={floor.points}
              fill={isActive ? `url(#${floor.gradientId})` : "transparent"}
              strokeOpacity={isActive ? 0.6 : 0}
              className="cursor-pointer transition-all duration-300"
              style={{
                filter: isActive
                  ? "drop-shadow(0 0 6px rgba(245,166,35,0.35))"
                  : "none",
              }}
              onClick={() => navigate(`/unitplan/${floor.id}`)}
              onMouseEnter={() => setHoveredFloor(floor)}
              onMouseLeave={() => setHoveredFloor(null)}
            />
          );
        })}
      </svg>

      {/* ── Tooltip ── */}
      {hoveredFloor && (() => {
        const { x, y } = svgToPercent(hoveredFloor.anchorX, hoveredFloor.anchorY);
        return (
          <div
            className="absolute z-30 flex items-center pointer-events-none transition-all duration-150"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translateY(-50%)",
            }}
          >
            {/* Left-pointing arrow (now responsive too) */}
            <ArrowPointer />

            {/* Glassmorphism Card Container Template */}
            <div
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "6px",
              }}
              /* FIX 4: Added mobile padding boundaries and smaller base text sizes 
                via Tailwind responsive variants so the tooltip isn't oversized on mobile.
              */
              className="text-white font-sans bg-gradient-to-r from-[#F5C369]/50 via-transparent to-transparent backdrop-blur-sm flex flex-col justify-center gap-0.5 p-1.5 min-w-[90px] sm:p-[7px_14px_8px] sm:min-w-[110px]"
            >
              <span className="text-[9px] sm:text-[11px] font-medium tracking-wide leading-tight opacity-80">
                {hoveredFloor.floorname}
              </span>
              <span className="font-light text-sm sm:text-lg tracking-wide leading-tight text-white">
                {hoveredFloor.area}
              </span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

/** Left-pointing arrow containing the horizontal gradient specifications */
function ArrowPointer() {
  return (
    /* FIX 5: Scale down the arrow wrapper dimensions on small mobile layouts 
      so it hooks perfectly into the card without overflowing.
    */
    <div className="relative w-[22px] h-[36px] -ml-4 -mr-[2px] sm:w-[34px] sm:h-[52px] sm:-ml-5 sm:-mr-[5px] flex-shrink-0 z-10 flex items-center justify-center">
      <svg
        viewBox="0 0 34 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5C369" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#F5C369" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#efefef" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="arrowBorderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgba(245, 166, 35, 0.3)" />
          </linearGradient>
        </defs>

        <path
          d="M 0 26 L 34 0 L 34 52 Z"
          fill="url(#arrowGradient)"
          stroke="url(#arrowBorderGradient)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}