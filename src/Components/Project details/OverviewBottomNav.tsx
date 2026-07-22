// Components/Project details/OverviewBottomNav.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const OverviewBottomNav: React.FC = () => {
  // Routes for the overview sub-pages
  const navItems = [
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/concept-summary', label: 'Concept Summary' },
  ];

  return (
    <div className="flex justify-center pb-6 pointer-events-auto w-full absolute bottom-0 z-50">
      <div className="flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 shadow-2xl">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-6 py-2 rounded-full text-xs md:text-sm capitalize transition-all duration-300 border bg-[#1a1a1a] ${
                isActive
                  ? 'text-white border-[rgba(255,206,117,1)] bg-white/5 shadow-[0_0_15px_rgba(255,206,117,0.3)]'
                  : 'text-gray-400 border-white/10 hover:text-black hover:bg-[rgba(255,206,117,1)]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default OverviewBottomNav;