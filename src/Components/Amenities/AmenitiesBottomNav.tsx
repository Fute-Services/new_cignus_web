// Components/Amenities/AmenitiesBottomNav.tsx
import React from 'react';

interface AmenitiesBottomNavProps {
  currentScene: string;
  onSceneChange: (scene: string) => void;
}

const AmenitiesBottomNav: React.FC<AmenitiesBottomNavProps> = ({ currentScene, onSceneChange }) => {
  const navItems = [
    { id: 'dropoff', label: 'Drop Off' },
    { id: 'dropoff_left', label: 'Outdoor Seating 1' },
    { id: 'dropoff_right', label: 'Outdoor Seating 2' },
    { id: 'reception', label: 'Reception' },
    { id: 'cafeteria', label: 'Fine Dining' },
    { id: 'liftlobby', label: 'Lift Lobby' },
    { id: 'top', label: 'Breakout Zone' },
  ];

  return (
   
   
      <div className="flex items-center gap-1.5 md:gap-2 bg-[#142035]
       border-[0.2px] border-[#6F8BB7] rounded-full py-1 px-1 lg:p-1.5 shadow-2xl 
       overflow-x-auto max-w-full lg:max-w-[90vw] custom-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSceneChange(item.id)}
            className={`px-0 md:px-2 lg:px-6 py-2.5 rounded-full
               text-[8px] md:text-[10px] lg:text-sm font-medium tracking-wide 
               capitalize transition-all duration-300 
               lg:whitespace-nowrap ${currentScene === item.id
                ? 'text-white border-0 md:border md:border-[#6F8BB7]/30 bg-transparent md:bg-[rgba(0,0,0,0.50)] shadow-inner'
                : 'text-white/85 hover:text-white hover:bg-black/60'
              }`}
          >
            {item.label}
          </button>
        ))}
    
    </div>
  );
};

export default AmenitiesBottomNav;