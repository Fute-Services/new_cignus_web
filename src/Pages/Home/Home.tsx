import left_logo from "../../assets/Home/cignus updated logo.png"
import right_logo from "../../assets/Home/K_Raheja_Corp 1.png"
import RightNavbar from '../../Components/Navbar/RightNavbar'
// import rightlogo from "../../assets/Home/K_Raheja_Corp 1.png"
// import { useNavigate } from 'react-router-dom'
// import LeftNavbar from '../../Components/Navbar/LeftNavbar'
// Background Image
import bg_image from "../../assets/Gallery/night-aerial-view1.jpeg"
import HomeLeftNavbar from "../../Components/Navbar/HomeLeftNavbar"
import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Background Image */}
            <div className="fixed inset-0 z-0 select-none pointer-events-none">
                <img
                    src={bg_image}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-contain lg:object-cover"
                />

                {/* Dark Overlay for contrast and readability */}
                <div className="relative inset-0 bg-black/15 pointer-events-none" />
            </div>
            {/* <div className="absolute top-1/2 -translate-y-1/2 flex items-center gap-5">
                <LeftNavbar />

                <div
                    onClick={() => navigate("/")}
                    className="
            w-9 h-9 lg:w-11 lg:h-11
            rounded-full bg-white
            flex items-center justify-center
            p-1.5 shadow-md z-50
            hover:scale-110 transition-transform cursor-pointer
        "
                >
                    <img
                        src={rightlogo}
                        alt="K Raheja Corp"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div> */}

            <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100]">
                <HomeLeftNavbar />
            </div>

            {/* Header Branding Logos */}
            <header className="fixed top-0 inset-x-0 z-20 flex justify-between items-center p-6 md:p-8 pointer-events-none">
                <div onClick={() => navigate("/")} className="relative pointer-events-auto transition-transform duration-300">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-black/80 rounded-full blur-2xl pointer-events-none z-0" />
                    <img src={left_logo} alt="Cignus Logo" className="relative z-10 h-14 md:h-[67px] w-auto object-contain" />
                </div>
                <div onClick={() => navigate("/")} className="pointer-events-auto mr-5  transition-transform duration-300">
                    <img src={right_logo} alt="K Raheja Corp Logo" className="h-20  md:h-20 w-auto object-contain" />
                </div>
            </header>


            {/* <div onClick={() => navigate('/')} className="absolute bottom-20 md:bottom-[14.3%]
             lg:bottom-10  right-14 lg:left-16 w-9 h-9 lg:w-11 lg:h-11 rounded-full
              bg-white flex items-center justify-center p-1.5 shadow-md z-90 hover:scale-[1.1] ">
                <img src={rightlogo} alt="K Raheja Corp" className="w-full h-full object-contain" />
            </div> */}

            {/* Right Navigation Bar - positioned on the right */}
            <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
                <RightNavbar />

            </div>
        </>
    )
}

export default Home