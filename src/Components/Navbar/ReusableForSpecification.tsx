import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';

import homeIcon from '../../assets/Home/icons/home.icon.svg';
import amenitiesIcon from '../../assets/Home/icons/amenities_icon.svg';
import detailsIcon from '../../assets/Home/icons/Project_dteails_icon.png';
import vrIcon from '../../assets/Home/icons/Vr_icon.svg';
import brochureIcon from '../../assets/Home/icons/Brocher_icon1 (2).png';
// import rightlogo from "../../assets/Home/K_Raheja_Corp 1.png"
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const navItems = [
    { path: '/home', label: 'Master\nPlan', icon: homeIcon, isCustom: true, end: true },
    { path: '/location', label: 'Location', icon: MapPin, isCustom: false, end: false },
    { path: '/amenities', label: 'Amenities', icon: amenitiesIcon, isCustom: true, end: false, iconSizeClass: 'w-6 h-6' },
    { path: '/project-details', label: 'Project\nDetails', icon: detailsIcon, isCustom: true, end: false, iconSizeClass: 'w-5 h-5' },
    { path: '/vr', label: 'VR', icon: vrIcon, isCustom: true, end: false, iconSizeClass: 'w-5 h-5' },
    { path: '/brochure', label: 'Brochure', icon: brochureIcon, isCustom: true, end: false },
];

interface NavbarLinkProps {
    to: string;
    label: string;
    icon: any;
    isCustom: boolean;
    end?: boolean;
    heightClass?: string;
    iconWrapperClass?: string;
    inactiveBgClass?: string;
    disableFilter?: boolean;
    hasGradientText?: boolean;
    iconSizeClass?: string;
}

const NavbarLink = ({
    to,
    label,
    icon: IconComponent,
    isCustom,
    end = false,
    heightClass = ' h-[70px] lg:h-[76px]',
    iconWrapperClass = ' w-[40px] h-[40px] lg:w-[43px] lg:h-[50px]',
    inactiveBgClass = 'bg-white/5 border-white/5',
    disableFilter = false,
    hasGradientText = false,
    iconSizeClass = 'w-4.5 h-4.5'
}: NavbarLinkProps) => {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <NavLink
            to={to}
            end={end}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={label.replace('\n', ' ')}
            className={({ isActive }) =>
                `flex flex-col ${heightClass}  items-center justify-center gap-0.8 transition-all duration-300 w-full rounded-full p-1 border
        ${(isActive || isHovered)
                    ? 'bg-[#FFCF77] border-transparent shadow-lg shadow-[#FFCF77]/20'
                    : `${inactiveBgClass} hover:bg-[#FFCF77] hover:border-transparent hover:shadow-lg hover:shadow-[#FFCF77]/20`}`
            }
        >
            {({ isActive }) => {
                const isThemeActive = isActive || isHovered;
                return (
                    <>
                        {/* Icon Circle Wrapper */}
                        <div
                            className={`flex items-center justify-center ${iconWrapperClass} rounded-full border transition-all duration-300
              ${isActive
                                    ? 'bg-black/20 border-transparent'
                                    : isHovered
                                        ? 'bg-black/20 border-transparent'
                                        : 'bg-black/15 border-white/10'}`}
                        >
                            {isCustom ? (
                                <img
                                    src={IconComponent as string}
                                    alt={label.replace('\n', ' ')}
                                    style={{
                                        filter: isThemeActive
                                            ? 'brightness(0) saturate(100%) invert(27%) sepia(21%) saturate(987%) hue-rotate(345deg) brightness(92%) contrast(89%)'
                                            : disableFilter
                                                ? undefined
                                                : 'brightness(0) invert(1)'
                                    }}
                                    className={`${iconSizeClass} transition-all duration-300`}
                                />
                            ) : (
                                <IconComponent
                                    size={17}
                                    className={`transition-all duration-300 ${isThemeActive ? 'text-[#5D4037]' : 'text-white'}`}
                                />
                            )}
                        </div>

                        {/* Label Text */}
                        <span
                            style={
                                hasGradientText && !isThemeActive
                                    ? {
                                        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFEFA8 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }
                                    : undefined
                            }
                            className={`text-[8.5px] font-medium text-center leading-tight whitespace-pre-line select-none transition-colors duration-300
                ${isThemeActive ? 'text-[#5D4037]' : hasGradientText ? '' : 'text-white'}`}
                        >
                            {label}
                        </span>
                    </>
                );
            }}
        </NavLink>
    );
};

const WithoutMotionHome = () => {
    const mainNavItems = navItems.slice(0, 5);
    const brochureItem = navItems[5];
    const navigate = useNavigate();

    return (
        <div className="fixed left-1 lg:left-8 top-0 -translate-y-1/2 z-50 
    flex flex-col gap-2 items-center w-[60px] mt-2 lg:mt-5">
            <nav
                className="bg-[#2a2d1e]/70 backdrop-blur-xl border border-white/10
          py-2 px-1 rounded-[80px] shadow-2xl w-full 
          flex flex-col gap-2 items-center"
            >
                {mainNavItems.map((item) => (
                    <NavbarLink
                        key={item.path}
                        to={item.path}
                        label={item.label}
                        icon={item.icon}
                        isCustom={item.isCustom}
                        end={item.end}
                        heightClass="h-[55px] lg:h-[70px]"
                        iconWrapperClass="w-[16px] h-[25px] lg:w-[38px] lg:h-[44px]"
                        iconSizeClass={item.iconSizeClass}
                    />
                ))}
            </nav>


            {/* Brochure - Separate Pill */}
            <NavbarLink
                to={brochureItem.path}
                label={brochureItem.label}
                icon={brochureItem.icon}
                isCustom={brochureItem.isCustom}
                end={brochureItem.end}
                heightClass="h-[80px]"
                iconWrapperClass="w-[40px] h-[48px]"
                inactiveBgClass="bg-[#2a2d1e]/70 border-white/10 shadow-2xl backdrop-blur-xl"
                disableFilter={true}
                hasGradientText={true}
                iconSizeClass="w-[17px] h-[23px]"
            />

           {/* --- BACK BUTTON --- */}
      <motion.button
        onClick={() => navigate(-1)}
        className=" w-11 h-11 bg-[#DAA950] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.button>
        </div>
    );
};

export default WithoutMotionHome;