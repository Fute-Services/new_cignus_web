// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Asset imports
// import rightLogo from "../../assets/Home/K_Raheja_Corp 1.png";
// import cignusLogo from "../../assets/Home/cignus updated logo.png";
// import exploreBtn from "../../assets/intial/Primary button.png";
// import linesImg from "../../assets/Project_Details/lines.png";
// import lakePlaceholder from "../../assets/Home/lake_placeholder.webp";
// import entrance from '../../assets/video/entrance.mp4'
// const Initial2 = () => {
//     const navigate = useNavigate();
//     const [videoLoaded, setVideoLoaded] = useState(false);

//     useEffect(() => {
//         // Failsafe timeout to force display after 3.5 seconds if message events fail
//         const failsafe = setTimeout(() => {
//             setVideoLoaded(true);
//         }, 3500);

//         const handleMessage = (e: MessageEvent) => {
//             try {
//                 const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
//                 // Detect when Vimeo player begins actual playback to trigger the fade transition
//                 if (data && (data.event === 'play' || data.event === 'playing')) {
//                     // Small delay to ensure frames are decoding and avoid flash
//                     setTimeout(() => {
//                         setVideoLoaded(true);
//                     }, 500);
//                     clearTimeout(failsafe);
//                 }
//             } catch (err) {
//                 // Ignore non-Vimeo messages
//             }
//         };

//         window.addEventListener('message', handleMessage);
//         return () => {
//             window.removeEventListener('message', handleMessage);
//             clearTimeout(failsafe);
//         };
//     }, []);

//     useEffect(() => {
//         const unmuteVideo = () => {
//             const iframe = document.querySelector('iframe');
//             if (iframe && iframe.contentWindow) {
//                 try {
//                     iframe.contentWindow.postMessage(JSON.stringify({ method: 'setMuted', value: false }), '*');
//                     iframe.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*');
//                 } catch (err) {
//                     // Fail silently
//                 }
//             }
//         };

//         window.addEventListener('click', unmuteVideo, { once: true });
//         window.addEventListener('touchstart', unmuteVideo, { once: true });

//         return () => {
//             window.removeEventListener('click', unmuteVideo);
//             window.removeEventListener('touchstart', unmuteVideo);
//         };
//     }, []);

//     const handleExplore = () => {
//         navigate('/home');
//     };

//     return (
//         <div className="relative w-screen h-screen overflow-hidden 
//         text-white font-sans bg-black">
//             {/* 1. Background Video Layer */}
//             <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-black">
//                 {/* 1a. Video Iframe (always fully opaque underneath) */}
//                 {/* <iframe
//                     src="https://player.vimeo.com/video/1199709728?h=d7f71f83d6&autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&muted=1&autopause=0&api=1"
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-0"
//                     style={{
//                         width: '100vw',
//                         height: '56.25vw', // 16:9 ratio
//                         minHeight: '100vh',
//                         minWidth: '177.77vh' // 16:9 ratio
//                     }}
//                     frameBorder="0"
//                     allow="autoplay; fullscreen"
//                     allowFullScreen
//                     title="Cignus Background Video"
//                 /> */}
//                 <video
//                     src={entrance}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
//                     style={{
//                         width: "100vw",
//                         height: "56.25vw",
//                         minHeight: "100vh",
//                         minWidth: "177.77vh",
//                     }}
//                 />

//                 {/* 1b. Static Thumbnail Placeholder loaded locally (on top, fades out) */}
//                 <div
//                     className={`absolute inset-0 z-10 transition-opacity duration-[1200ms] ease-in-out ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
//                         }`}
//                 >
//                     <img
//                         src={lakePlaceholder}
//                         alt="Background Placeholder"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>



//             {/* 2. Top Decorative Lines */}
//             <div className="absolute top-0 left-0 w-full z-10 pointer-events-none opacity-45 transform rotate-180">
//                 <img
//                     src={linesImg}
//                     alt="Decorative Waves"
//                     className="w-full h-auto object-cover mix-blend-screen"
//                 />
//             </div>

//             {/* 3. Top Right K Raheja Corp Logo */}
//             <motion.div
//                 initial={{ y: -50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
//                 className="absolute top-8 right-12 z-20"
//             >
//                 <img
//                     src={rightLogo}
//                     alt="K Raheja Corp"
//                     className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
//                 />
//             </motion.div>

//             {/* 4. Main Content Center Layer */}
//             <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center select-none">

//                 {/* Ambient Center Glow from Figma Spec */}
//                 <div
//                     className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
//                     style={{
//                         width: '676px',
//                         height: '626px',
//                         background: '#224B73',
//                         filter: 'blur(244px)',
//                         WebkitFilter: 'blur(244px)'
//                     }}
//                 />

//                 {/* Title Line 1 */}
//                 <motion.h1
//                     initial={{ y: 35, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
//                     className="relative z-10 text-[56px] md:text-[66px] font-extralight tracking-wide leading-tight bg-gradient-to-r from-[#006DA8] to-[#002645] bg-clip-text text-transparent"
//                     style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
//                 >
//                     Where The Lake Meets
//                 </motion.h1>

//                 <motion.h1
//                     initial={{ y: 35, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
//                     className="relative z-10 text-[66px] md:text-[82px] tracking-wide leading-tight mt-1 boardroom-title"
//                 >
//                     The Boardroom
//                 </motion.h1>

//                 {/* Cignus Gold Logo */}
//                 <motion.div
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 1.3, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
//                     className="relative z-10 my-11 w-full max-w-[160px] md:max-w-[180px]"
//                 >
//                     <img
//                         src={cignusLogo}
//                         alt="Cignus Powai"
//                         className="w-full h-auto object-contain transition-transform duration-300 hover:scale-103"
//                     />
//                 </motion.div>

//                 {/* Explore Pill Capsule Button */}
//                 <motion.div
//                     initial={{ y: 40, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 1.1, delay: 1.0, ease: [0.25, 1, 0.5, 1] }}
//                     className="relative z-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#75BFFF]/25 to-[#00253f]/60 border border-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/20"
//                 >
//                     {/* White badge with Raheja logo inside */}
//                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 select-none pointer-events-none shadow-md shrink-0">
//                         <img src={rightLogo} alt="K Raheja Corp Logo" className="w-full h-full object-contain" />
//                     </div>

//                     {/* Explore action button */}
//                     <button
//                         onClick={handleExplore}
//                         className="transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
//                     >
//                         <img
//                             src={exploreBtn}
//                             alt="Explore"
//                             className="h-10 w-auto object-contain"
//                         />
//                     </button>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Initial2;