import React, { useEffect, useRef } from "react";
import { type FloorData } from "../../Data/FloorData";
import { useNavigate } from "react-router-dom";

interface RightTableProps {
  floors: FloorData[];
  hoveredFloor: FloorData | null;
  setHoveredFloor: React.Dispatch<React.SetStateAction<FloorData | null>>;
}

export default function RightTable({
  floors,
  hoveredFloor,
  setHoveredFloor,
}: RightTableProps) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({});

  useEffect(() => {
    if (!hoveredFloor) return;

    const row = rowRefs.current[hoveredFloor.id];
    const container = tableContainerRef.current;

    if (!row || !container) return;

    // getBoundingClientRect gives positions relative to the viewport.
    // Subtracting the container's top and adding scrollTop converts
    // that into a position relative to the scrollable content.
    const rowRect = row.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const rowTopRelative = rowRect.top - containerRect.top + container.scrollTop;
    const rowCenterRelative = rowTopRelative - container.clientHeight / 2 + rowRect.height / 2;

    // Only scroll if the row is outside the visible area
    const isAbove = rowRect.top < containerRect.top;
    const isBelow = rowRect.bottom > containerRect.bottom;

    if (isAbove || isBelow) {
      container.scrollTo({
        top: rowCenterRelative,
        behavior: "smooth",
      });
    }
  }, [hoveredFloor]);

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col gap-5 items-center 
    justify-center h-full p-2 md:p-6 font-sans">

      {/* Main Glassmorphism Container */}
      <div className="w-full max-w-xl lg:max-w-lg bg-slate-900/40 
      backdrop-blur-md rounded-[28px] border border-white/10 shadow-2xl overflow-hidden p-1">

        {/* Scrollable Table Body Container */}
        <div
          ref={tableContainerRef}
          className="max-h-[380px] overflow-y-auto 
          overflow-x-hidden custom-scrollbar border border-white/20 rounded-[24px]"
        >
          <table className="w-full text-center text-[11px] 
          mtext-white/90 border-collapse table-fixed">

            {/* Sticky Table Headers */}
            <thead className="sticky top-0 z-10 bg-slate-950 
            backdrop-blur-md border-b border-white/20 text-xs font-medium 
            tracking-wide text-white/90">
              <tr>
                <th className="py-4 w-1/3 text-[9px] lg:text-sm border-r border-white/10 font-medium select-none">Floor</th>
                {/* <th className="py-4 w-1/3 border-r border-white/10 font-medium select-none">Area 1</th> */}
                <th className="py-4 w-1/3 text-[9px] lg:text-sm font-medium select-none">Carpet Area</th>
              </tr>
            </thead>

            <tbody>
              {floors.map((row) => {
                const isActive = hoveredFloor?.id === row.id;
                return (
                  <tr
                    key={row.id}
                    ref={(el) => {
                      rowRefs.current[row.id] = el;
                    }}
                    onMouseEnter={() => setHoveredFloor(row)}
                    onMouseLeave={() => setHoveredFloor(null)}
                    className={`
                      border-b border-white/10
                      transition-all duration-300
                      cursor-pointer
                      ${isActive
                        ? "bg-[#F5A623]/25 text-[#F5C369] font-semibold"
                        : "hover:bg-white/5"
                      }
                    `}
                  >
                    <td className="py-2.5 w-1/3 text-[9px] lg:text-sm border-r border-white/10">{row.floorname}</td>
                    <td className="py-2.5 w-1/3 text-[9px] lg:text-sm border-r border-white/10">{row.area1}</td>
                    {/* <td className="py-2.5 w-1/3">{row.area2}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview Button */}
      <button
        onClick={() => navigate("/overview")}
        className="relative z-50 text-black/80 flex items-center pointer-events-auto justify-between cursor-pointer
          w-full max-w-sm lg:max-w-[416px] px-2 md:px-6 py-1 md:py-3.5 bg-[#FFCF77]/90 border-transparent
          shadow-lg shadow-[#FFCF77]/20 rounded-full border border-white/10
          font-light text-[10px] md:text-sm hover:bg-[#FFCF77] transition-all group"
      >
        <span className="w-full text-center tracking-wide pl-0 lg:pl-6">Overview</span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 group-hover:border-white/60 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-2 h-2 md:w-4 md:h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </button>
    </div>
  );
}