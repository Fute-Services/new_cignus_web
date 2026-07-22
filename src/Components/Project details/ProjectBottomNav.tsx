// Components/Project details/ProjectBottomNav.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectBottomNav: React.FC = () => {
  // These paths must perfectly match the routes defined in your AppRoutes
  const navItems = [
    { path: '/circulation', label: 'Circulation' },
    { path: '/mobility', label: 'Mobility' },
    { path: '/vertical-transport', label: 'vertical transport' },
    { path: '/overview', label: 'overview' },
  ];

  return (
    <div className="flex justify-center pb-6 pointer-events-auto w-full absolute bottom-0 z-50">
      <div className="flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full text-sm capitalize transition-all duration-300 border bg-[#1a1a1a] ${
                isActive
                  ? 'text-black border-[rgba(255,206,117,1)] bg-[rgba(255,206,117,1)]' // Active state (Yellow Glow)
                  : 'text-gray-400 border-white/10 hover:text-black hover:bg-[rgba(255,206,117,1)]'           // Inactive state
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

export default ProjectBottomNav;