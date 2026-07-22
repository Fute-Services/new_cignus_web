import logo from '../../assets/Home/cignus updated logo.png';
import logo2 from '../../assets/Home/K_Raheja_Corp 1.png'
import bgVedio from '../../assets/overview/overview.mp4';
import image from '../../assets/overview/overview.png';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
// Components
// import LeftNavbar from '../Navbar/LeftNavbar';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WithBackButton from '../Navbar/WithBackButton';
const OverviewNew: React.FC = () => {
  // const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const sections = [
    {
      title: "Westin Hotel",
      description:
        "When your counterpart flies in, you host them properly — dinner, a room, breakfast the next morning — without a single car journey.The hotel is across the courtyard.",


    },
    {
      title: "Convention Centre",
      description:
        "All hands meetings, investor days, large conferences — the venue is steps from your office.No booking a hotel ballroom months in advance.No shuttling people across the city.",
    },
    {
      title: "Marriott Residences",
      description:
        "Your team across the globe lands and stays on campus.Your extended project team doesn't need a flat finding exercise. The accommodation is already here.",
    },
    {
      title: "Cignus Tower I",
      description:
        "Tower I has been here long enough to build its own gravity.The companies, the people, the everyday rhythm of the campus - Tower II inherits all of that from day one.",
    },
  ];
  return (
    <div className="relative w-screen h-screen
     overflow-hidden text-white font-sans selection:bg-[#DAA950] selection:text-black">

      {/* --- LAYER 1: STATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          src={bgVedio}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* --- LAYER 2: ANIMATED LOGO --- */}
      <motion.div
        className="absolute z-50 pointer-events-none"
        initial={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%", // Perfectly centered
          scale: 2   // Starts at scale 2
        }}
        animate={{
          top: "50%",
          left: "50%",
          x: "-50%",  // Keeps it horizontally centered so it moves straight up
          y: "-100vh", // Pushes it well beyond the top edge of the screen
          scale: 2    // Keeps scale 2 throughout
        }}
        transition={{
          duration: 1.2,
          delay: 1, // Pauses in the center for 1 second before moving
          ease: [0.25, 0.1, 0.25, 1] // Smooth, cinematic bezier curve
        }}
      >
        <img src={logo} alt="Cignus Logo" className="w-32 md:w-40" />
      </motion.div>

      {/* --- LAYER 3: SIDE NAVBARS --- */}
      {/* Both slide down from the top after the logo starts moving */}

      {/* Left Navbar */}
      <motion.div
        className="absolute left-4 md:left-6 top-1/2 z-[100]"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: "-50%", opacity: 1 }} // Settles at standard vertical center
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
      >
        {/* <LeftNavbar /> */}
        <WithBackButton/>
      </motion.div>

      {/* --- BACK BUTTON --- */}
      {/* <motion.button
        onClick={() => navigate("/project-details")}
        className="absolute bottom-8 left-16 w-11 h-11 bg-[#DAA950] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.button> */}

      {/* Drops down from the top left */}
      <motion.img
        src={logo}
        alt="Top Left Logo"
        className="absolute top-10 left-10 w-24 md:w-32 z-50 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Drops down from the top right */}
      <motion.img
        src={logo2}
        alt="Top Right Logo"
        className="absolute top-10 right-14 w-24 md:w-16 z-50 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.2, // after logo animation finishes
                }}
            /> */}
      <div className="relative w-screen h-screen overflow-hidden text-white">

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.2,
          }}
        >



          {/* Toggle Button */}
          {/* <button
                        onClick={() => setShowContent(!showContent)}
                        className="
        absolute right-8 top-1/2 -translate-y-1/2
        z-[120]
        w-14 h-14
        rounded-full
        bg-white/15
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
        text-2xl
        text-white
        hover:scale-110
        transition-all duration-300
    "
                    >
                        {showContent ? "‹" : "›"}
                    </button> */}

          {/* <button
                        onClick={() => setShowContent(!showContent)}
                        className="
        absolute -right-2 top-1/2 -translate-y-1/2
        z-[120]
        w-12 h-12
        rounded-full
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        flex items-center justify-center
        text-white
        hover:scale-110
        hover:bg-white/20
        transition-all duration-500
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
    "
                    >
                        {showContent ? (
                            <HiOutlineArrowSmRight size={25} />
                        ) : (
                            <HiOutlineArrowSmLeft size={25} />
                        )}
                    </button> */}
          {/* <button
                        onClick={() => setShowContent(!showContent)}
                        className="
    absolute -right-4 top-1/2 -translate-y-1/2
    z-[120]
    w-16 h-36
   rounded-l-[24px]
    bg-white/10
        backdrop-blur-2xl
        border border-white/20
        flex items-center justify-center
        text-white
    hover:bg-white/20
        transition-all duration-500
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
                        style={{
                            clipPath: "polygon(0 15%,100% 0,100% 100%,0 85%)",
                              borderRadius: "12px",
                        }}
                    > */}
          <button
            onClick={() => setShowContent(!showContent)}
            className="
    absolute -right-4 top-1/2 -translate-y-1/2
    z-[120]
    w-14 h-36

  

    bg-white/10
    backdrop-blur-2xl
    border border-white/20

    flex items-center justify-center
    text-white

    hover:bg-white/20
    transition-all duration-500
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
            style={{
              clipPath:
                "path('M 0 25 Q 0 0 25 0 L 64 0 L 64 144 L 25 144 Q 0 144 0 119 Z')",
            }}
          >
            {showContent ? (
              <HiOutlineArrowSmRight size={25} />
            ) : (
              <HiOutlineArrowSmLeft size={25} />
            )}
          </button>

          {/* Content Panel */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 500, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="
               absolute
        top-5
        right-[10%]
        bottom-5

        z-[110]

        w-[90%]
        md:w-[50%]

        overflow-hidden

       rounded-lg
        bg-black/15
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    
            "
              >
                <div className="p-8 md:p-10">
                  <h1 className="text-xl lg:text-4xl  font-light leading-relaxed mb-2 lg:mb-6">
                    Work. Stay. Entertain.
                    <br />
                    All without leaving.
                  </h1>

                  <p className=" text-[10px] lg:text-[15px] leading-relaxed mb-2 lg:mb-8
                                     text-white font-light">
                    Most offices ask you to leave for everything else.
                    A dinner with clients. A room for the visiting team.
                    A venue for three hundred people.
                    Here, none of that requires leaving the campus.
                  </p>

                  {sections.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.5,
                      }}
                      className="mb-6"
                    >
                      <h2 className="text-sm lg:text-xl font-normal mb-1 lg:mb-2">
                        {item.title}
                      </h2>

                      <p className="text-[10px] lg:text-[15px] font-light leading-relaxed 
                                            text-white">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>  </motion.div>
      </div>
    </div>
  );
};

export default OverviewNew;