// import LeftNavbar from '../../Components/Navbar/LeftNavbar';
import RightNavbar from '../../Components/Navbar/RightNavbar';

// import { useNavigate } from 'react-router-dom';

import bgImage from '../../assets/intial/bg_img.png';
import logo1 from '../../assets/Home/cignus updated logo.png';
import WithoutMotionHome from '../Navbar/WithoutMotionHome';
import logo2 from '../../assets/Home/K_Raheja_Corp 1.png';
import Video from '../../assets/cignus_drone.mp4';

const Droneview = () => {
  // const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center font-sans animate-fadeIn">

      {/* 1. FULL-SCREEN BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. TOP LOGOS */}
      <div className="absolute top-8 left-12 z-20">
        <img src={logo1} alt="Cignus Powai" className="h-12 object-contain" />
      </div>
      <div className="absolute top-8 right-12 z-20">
        <img src={logo2} alt="K Raheja Corp" className="h-20 object-contain" />
      </div>

      {/* WRAPPER TO FORCE VERTICAL STACKING */}
      <div className="flex flex-col items-center justify-center w-full">

        {/* TITLE TEXT */}
        <h1 className="pt-2 mb-8 text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-wide drop-shadow-lg z-10 text-center">
          Drone View
        </h1>

        {/* 3. CENTER VIDEO CONTAINER */}
        <div className="relative z-10 w-[270px] md:w-[600px] lg:w-[1000px] 
        aspect-video max-w-[90%] rounded-sm md:rounded-lg lg:rounded-[3rem] overflow-hidden shadow-2xl bg-black/50">
          {/* <iframe
            src="https://player.vimeo.com/video/1200124883?h=cfecb215c9&autoplay=1"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Drone View Video"
          ></iframe> */}

          <div className="relative z-10  
         rounded-lg lg:rounded-[3rem] overflow-hidden shadow-2xl bg-black/50">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

      </div>
      {/* Left Navbar */}
      <div
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100]"
      // initial={{ y: "100vh", opacity: 0 }}
      // animate={{ y: "-50%", opacity: 1 }} // Settles at standard vertical center
      // transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
      >
        {/* <LeftNavbar /> */}
        <WithoutMotionHome />
      </div>


      {/* --- BACK BUTTON (Bottom Left) --- 
      <button
        onClick={() => navigate('/home')}
        className="absolute bottom-8 left-8 md:bottom-10 md:left-16 w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>*/}

      {/* <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
        <LeftNavbar />
      </div> */}
      <RightNavbar />

    </div>
  );
};

export default Droneview;
