import { motion } from 'framer-motion';
// Components
// import LeftNavbar from '../Navbar/LeftNavbar';
import RightNavbar from '../Navbar/RightNavbar';
import logo from '../../assets/Home/cignus updated logo.png';
// import { useNavigate } from 'react-router-dom';
import WithoutMotionHome from '../Navbar/WithoutMotionHome';
export default function ReusableNavbar_projectinfo() {
  // const navigate=useNavigate();
  return (<>
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
      className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100]"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: "-50%", opacity: 1 }} // Settles at standard vertical center
      transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
    >
      {/* <LeftNavbar /> */}
      <WithoutMotionHome/>

      {/* <motion.button
        onClick={() => navigate("/home")}
        className="absolute w-11 h-11 bg-[#DAA950] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.button> */}
    </motion.div>

    {/* Right Navbar */}
    <motion.div
      className="absolute right-4 md:right-6 top-1/2 z-[100]"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: "-50%", opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
    >
      <RightNavbar />
    </motion.div>
  </>)
}