// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Import your brochure file here!
// import brochureFile from '../../assets/Broucher/Cignus Tower 2 1.pdf';

// const Broucher: React.FC = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="relative w-screen px-20 md:px-0 md:w-screen h-screen
//          overflow-hidden bg-[#0a1118] text-white font-sans ">

//             {/* --- TOP HEADER --- */}
//             <div className="absolute top-0 w-full h-24 
//             bg-gradient-to-b from-black/90 -ml-14 md:-ml-0 to-transparent z-10 flex 
//             items-center justify-center pointer-events-none">
//                 <h1 className="text-xl md:text-3xl font-light 
//                 tracking-widest uppercase drop-shadow-md mt-0">
//                     Project Brochure
//                 </h1>
//             </div>

//             {/* --- BROCHURE VIEWER CONTAINER --- */}
//             {/* We add padding to account for the header and back button so the PDF doesn't overlap them */}
//             <div className="relative w-full h-full pt-20 pb-0 md:px-40 z-0">

//                 {/* If your brochure is a PDF: 
//           The iframe will automatically handle scrolling natively.
//           Adding "#toolbar=0" to the end of the src hides the ugly default browser PDF controls for a cleaner look!
//         */}
//                 <iframe
//                     src={`${brochureFile}#toolbar=0`}
//                     className="w-full h-full shadow-[0_-10px_40px_rgba(0,0,0,0.5)] bg-white"
//                     title="Cignus Brochure"
//                 />

//                 {/* If your brochure is a series of IMAGES instead of a PDF, 
//           delete the iframe above and uncomment this block:
//         */}
//                 {/* <div className="w-full h-full overflow-y-auto rounded-t-[32px] pb-32">
//           <img src={page1} alt="Page 1" className="w-full h-auto mb-4" />
//           <img src={page2} alt="Page 2" className="w-full h-auto mb-4" />
//         </div> 
//         */}

//             </div>

//             {/* --- BACK BUTTON (Bottom Left) --- */}
//             <button
//                 onClick={() => navigate('/home')}
//                 className="absolute bottom-8 left-8 md:bottom-10 md:left-16 w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
//                 aria-label="Go back"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
//                     <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//             </button>

//         </div>
//     );
// };

// export default Broucher;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // ✅ Root-relative path — works in dev AND after deployment
// // const BROCHURE_URL = './brochures/Cignustower2.pdf';
// const Broucher: React.FC = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="relative w-screen h-screen overflow-hidden bg-[#0a1118] text-white font-sans">

//             {/* TOP HEADER */}
//             <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/90 to-transparent z-10 flex items-center justify-center pointer-events-none">
//                 <h1 className="text-xl md:text-3xl font-light tracking-widest uppercase drop-shadow-md">
//                     Project Brochure
//                 </h1>
//             </div>
//             <div className="absolute inset-0 pt-20 pb-0">
//                 <iframe
//                     // src={BROCHURE_URL}
//                     src="./brochures/Cignustower2.pdf"
//                     className="w-full h-full"
//                     title="Brochure"
//                 /></div>
//             {/* PDF VIEWER — full bleed, padded under header */}
//             {/* <div className="absolute inset-0 pt-20 pb-0"> */}
//             {/* <iframe
//                     src={`${BROCHURE_URL}#toolbar=0&navpanes=0&scrollbar=0`}
//                     className="w-full h-full bg-white"
//                     title="Cignus Tower 2 Brochure"

//                 > 

//                 <div className="flex flex-col items-center justify-center h-full gap-4 text-white bg-[#0a1118]">
//                     <p className="text-sm text-gray-400">
//                         Your browser cannot display this PDF inline.
//                     </p>

//                     <a href={BROCHURE_URL}
//                         download
//                         className="px-5 py-2.5 rounded-full bg-[rgba(255,206,117,1)] text-[#483E2D] font-medium text-sm hover:scale-105 transition-transform"
//                     >
//                         Download Brochure
//                     </a>
//                 </div>
//             </iframe>
//         </div>

//             {/* BACK BUTTON */ }
//             <button
//                 onClick={() => navigate('/home')}
//                 className="absolute bottom-8 left-8 md:bottom-10 md:left-16 w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer"
//                 aria-label="Go back"
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="14"
//                     height="24"
//                     viewBox="0 0 17 28"
//                     fill="none"
//                     aria-hidden="true"
//                 >
//                     <path
//                         d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1"
//                         stroke="#483E2D"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                     />
//                 </svg>
//             </button>
//         </div >
//     );
// };

// export default Broucher;

import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import WithBackButton from "../Navbar/WithBackButton";
import { Document, Page, pdfjs } from "react-pdf";
import {motion} from 'framer-motion'
// Bundle the pdf.js worker locally so PDFs load offline (no CDN dependency)
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const Brochure: React.FC = () => {
  // const navigate = useNavigate();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(900);

  // Note the spelling from your code: "/brouchures.pdf"
  const pdfFile = "./pdf/brouchures.pdf";  

  // Handle fully responsive scaling for mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageWidth(window.innerWidth - 32); // Mobile padding match
      } else {
        setPageWidth(900); // Standard desktop display width
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="relative w-screen h-screen bg-[#071d33] flex flex-col overflow-hidden">

      {/* Header Bar */}
      <div className="w-full bg-[#08223d] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10 shrink-0">
        <h1 className="text-white text-base md:text-xl font-semibold tracking-wide">
          Cignus Brochure
        </h1>
        <span className="text-white/60 text-xs md:text-sm">
          {numPages > 0 ? `${numPages} Pages` : "Loading..."}
        </span>
      </div>

      {/* PDF Content Area */}
      <div className="flex-1 w-full overflow-y-auto min-h-0">
        <div className="flex flex-col items-center py-5 px-20 lg:px-4">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center pt-20 gap-3">
                <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-white/80 text-sm animate-pulse">Loading Brochure...</p>
              </div>
            }
            error={
              <div className="text-center pt-20">
                <p className="text-red-400 font-medium">Failed to load the brochure.</p>
                <p className="text-white/40 text-xs mt-1">Verify that the file exists in your public folder.</p>
              </div>
            }
          >
            {Array.from({ length: numPages }, (_, index) => (
              <div 
                key={index} 
                className="mb-6 last:mb-0 shadow-2xl rounded-lg overflow-hidden border border-white/5"
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>

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

      {/* BACK BUTTON */}
      {/* <button
        onClick={() => navigate("/home")}
        className="absolute bottom-[10%] right-4 md:bottom-[14%]
         lg:bottom-[7%] md:right-8 lg:left-16 w-12 h-12 bg-[rgba(255,206,117,1)]
          rounded-full flex items-center justify-center 
          transition-transform duration-300 hover:scale-110 active:scale-95
           z-[100] shadow-xl cursor-pointer"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="24"
          viewBox="0 0 17 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1"
            stroke="#483E2D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button> */}

    </div>
  );
};

export default Brochure;


// import React from 'react';
// import WithBackButton from "../Navbar/WithBackButton";
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom';

// // Import your brochure file here!
// import brochureFile from '../../assets/Broucher/Cignus Tower 2 1.pdf';

// const Broucher: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-screen px-20 md:px-0 md:w-screen h-screen
//          overflow-hidden bg-[#0a1118] text-white font-sans ">

//       {/* --- TOP HEADER --- */}
//       <div className="absolute top-0 w-full h-24 
//             bg-gradient-to-b from-black/90 -ml-14 md:-ml-0 to-transparent z-10 flex 
//             items-center justify-center pointer-events-none">
//         <h1 className="text-xl md:text-3xl font-light 
//                 tracking-widest uppercase drop-shadow-md mt-0">
//           Project Brochure
//         </h1>
//       </div>

//       {/* --- BROCHURE VIEWER CONTAINER --- */}
//       {/* We add padding to account for the header and back button so the PDF doesn't overlap them */}
//       <div className="relative w-full h-full pt-20 pb-0 md:px-40 z-0">

//         {/* If your brochure is a PDF: 
//           The iframe will automatically handle scrolling natively.
//           Adding "#toolbar=0" to the end of the src hides the ugly default browser PDF controls for a cleaner look!
//         */}
//         <iframe
//           src={`${brochureFile}#toolbar=0`}
//           className="w-full h-full shadow-[0_-10px_40px_rgba(0,0,0,0.5)] bg-white"
//           title="Cignus Brochure"
//         />

//         {/* If your brochure is a series of IMAGES instead of a PDF, 
//           delete the iframe above and uncomment this block:
//         */}
//         {/* <div className="w-full h-full overflow-y-auto rounded-t-[32px] pb-32">
//           <img src={page1} alt="Page 1" className="w-full h-auto mb-4" />
//           <img src={page2} alt="Page 2" className="w-full h-auto mb-4" />
//         </div> 
//         */}

//       </div>
//       {/* Left Navbar */}
//       <motion.div
//         className="absolute left-4 md:left-6 top-1/2 z-[100]"
//         initial={{ y: "100vh", opacity: 0 }}
//         animate={{ y: "-50%", opacity: 1 }} // Settles at standard vertical center
//         transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
//       >
//         {/* <LeftNavbar /> */}
//         <WithBackButton />     </motion.div>

//     </div>
//   );
// };

// export default Broucher;