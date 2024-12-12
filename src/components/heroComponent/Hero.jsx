import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const imagePath = ''; // Adjust this value if a background image is required

    return (
        <div
            className={`h-screen flex flex-col justify-center items-center md:items-start text-black px-4 md:px-16 ${imagePath ? `bg-[url('${imagePath}')] bg-right bg-cover` : ''}`}
            data-aos="fade-down"
        >
            <div className="text-center md:text-left space-y-4 lg:w-[60vw]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    SOLUTIONS FOR
                <span className="text-red-600">ALL YOUR</span> ELECTRICAL,
              BUILDING, AND PROPERTY NEEDS <span className="text-red-600">.</span>
                </h1>
                
            </div>
        </div>
    );
}

export default Hero;
