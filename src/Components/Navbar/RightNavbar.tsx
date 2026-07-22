// import { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
// import { BackgroundContext } from '../../Pages/Home/Home'

// import dayIcon from '../../assets/Home/icons/day.png'
// import nightIcon from '../../assets/Home/icons/night.png'
// import infoIcon from '../../assets/Home/icons/project_inco_icon.svg'
// import progressIcon from '../../assets/Home/icons/construction_icon.svg'
// import videoIcon from '../../assets/Home/icons/walkthrogh.svg'
// import galleryIcon from '../../assets/Home/icons/gallery.svg'

// const navItems = [
//   { path: '/project-info', label: 'Project Info', icon: infoIcon, isCustom: true },
//   { path: '/construction', label: 'Construction\nProgress', icon: progressIcon, isCustom: true },
//   { path: '/walkthrough', label: 'Walkthrough', icon: videoIcon, isCustom: true },
//   { path: '/gallery', label: 'Gallery', icon: galleryIcon, isCustom: true },
// ]

// const RightNavbar = () => {
//   const { bgTheme, setBgTheme } = useContext(BackgroundContext)

//   const darkCircle = 'w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[#1e2018]/80 transition-all duration-300'
//   const goldenCircle = 'w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[#FFCF77] transition-all duration-300'

//   // New style for inactive state in toggle
//   const inactiveToggleCircle = 'w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[#FFCF77]/10 hover:bg-[#FFCF77]/40 transition-all duration-300'

//   return (
//     <nav
//       className="fixed right-8 top-1/2 -translate-y-1/2  z-50 flex flex-col items-center rounded-[44px] w-[60px] py-4 mt-5"
//       style={{
//         background: 'rgba(42, 46, 34, 0.37)',
//         backdropFilter: 'blur(18px)',
//         WebkitBackdropFilter: 'blur(18px)',
//         border: '1px solid rgba(255, 255, 255, 0)',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0)',
//       }}
//     >
//       {/* ── Toggle Container ── */}
//       <div className="flex flex-col items-center gap-4 bg-[#FFCF77]/20 rounded-[30px] mb-4">
//         <button onClick={() => setBgTheme('day')} className="mb-[2px]">
//           <div className={bgTheme === 'day' ? goldenCircle : inactiveToggleCircle}>
//             <img src={dayIcon} alt="Day" style={{ filter: bgTheme === 'day' ? 'brightness(0)' : 'brightness(0) invert(1)' }} className="w-[22px] h-[22px]" />
//           </div>
//         </button>
//         <button onClick={() => setBgTheme('night')}>
//           <div className={bgTheme === 'night' ? goldenCircle : inactiveToggleCircle}>
//             <img src={nightIcon} alt="Night" style={{ filter: bgTheme === 'night' ? 'brightness(0)' : 'brightness(0) invert(1)' }} className="w-[22px] h-[22px]" />
//           </div>
//         </button>
//       </div>

//       {/* ── Nav Links ── */}
//       {navItems.map((item) => (
//         <NavLink key={item.path} to={item.path} className="flex flex-col items-center py-[5px] w-full">
//           {({ isActive }) => (
//             <>
//               <div className={isActive ? goldenCircle : darkCircle}>
//                 <img src={item.icon} alt={item.label} style={{ filter: isActive ? 'brightness(0)' : 'brightness(0) invert(1)' }} className="w-[22px] h-[22px]" />
//               </div>
//               <span className="text-[9px] text-white mt-[3px] text-center whitespace-pre-line leading-[1.3]">
//                 {item.label}
//               </span>
//             </>
//           )}
//         </NavLink>
//       ))}
//     </nav>
//   )
// }

// export default RightNavbar


import { NavLink } from 'react-router-dom'

import infoIcon from '../../assets/Home/icons/project_inco_icon.svg'
import progressIcon from '../../assets/Home/icons/construction_icon.svg'
import videoIcon from '../../assets/Home/icons/walkthrogh.svg'
import galleryIcon from '../../assets/Home/icons/gallery.svg'
import circulationIcon from '../../assets/Home/icons/Circulation.svg'
import droneviewIcon from '../../assets/Home/icons/Droneview.png'

const navItems = [
  { path: '/circulation', label: 'Circulation', icon: circulationIcon, isCustom: true },
  { path: '/project-info', label: 'Project Info', icon: infoIcon, isCustom: true },
  { path: '/construction', label: 'Construction\nProgress', icon: progressIcon, isCustom: true },
  { path: '/walkthrough', label: 'Walkthrough', icon: videoIcon, isCustom: true },
  { path: '/gallery', label: 'Gallery', icon: galleryIcon, isCustom: true },
  { path: '/droneview', label: 'Drone View', icon: droneviewIcon, isCustom: true },
]

const RightNavbar = () => {
  // const { bgTheme, setBgTheme } = useContext(BackgroundContext)
  // const location = useLocation() // Get the current active route

  const darkCircle = 'w-[30px] lg:w-[48px] h-[30px] lg:h-[48px] rounded-full flex items-center justify-center bg-[#1e2018]/80 transition-all duration-300'
  const goldenCircle = 'w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[#FFCF77] transition-all duration-300'

  // New style for inactive state in toggle


  return (
    <nav
      className="fixed right-5 lg:right-8 top-1/2 
      -translate-y-1/2  z-50 flex flex-col items-center rounded-[44px] w-[60px] py-4 mt-0 lg:mt-5"
      style={{
        background: 'rgba(42, 46, 34, 0.37)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255, 255, 255, 0)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0)',
      }}
    >
      {/* ── Toggle Container ── */}
      {/* Conditionally render this block ONLY if not on /project-info */}
      {/* {location.pathname !== '/project-info' && (
        <div className="flex flex-col items-center gap-4 bg-[#FFCF77]/20 rounded-[30px] mb-4">
          <button onClick={() => setBgTheme('day')} className="mb-[2px]">
            <div className={bgTheme === 'day' ? goldenCircle : inactiveToggleCircle}>
              <img src={dayIcon} alt="Day" style={{ filter: bgTheme === 'day' ? 'brightness(0)' : 'brightness(0) invert(1)' }} className="w-[22px] h-[22px]" />
            </div>
          </button>
          <button onClick={() => setBgTheme('night')}>
            <div className={bgTheme === 'night' ? goldenCircle : inactiveToggleCircle}>
              <img src={nightIcon} alt="Night" style={{ filter: bgTheme === 'night' ? 'brightness(0)' : 'brightness(0) invert(1)' }} className="w-[22px] h-[22px]" />
            </div>
          </button>
        </div>
      )} */}

      {/* ── Nav Links ── */}
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className="flex flex-col items-center py-[5px] w-full">
          {({ isActive }) => (
            <>
              <div className={isActive ? goldenCircle : darkCircle}>
                <img src={item.icon} alt={item.label} style={{ filter: isActive ? 'brightness(0)' : 'brightness(0) invert(1)' }} className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px]" />
              </div>
              <span className="text-[8px] lg:text-[9px] text-white mt-[3px] text-center whitespace-pre-line leading-[1.3]">
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default RightNavbar