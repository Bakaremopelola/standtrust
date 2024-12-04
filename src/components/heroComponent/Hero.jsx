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

    // Assuming imagePath is passed down as a prop or set dynamically somewhere else in your app
    const imagePath = ''; // If no image path is available, this can be an empty string or null.

    return (
        <div
            className={`h-screen flex flex-col justify-center items-center md:items-start text-black px-4 md:px-16 ${imagePath ? `bg-[url('${imagePath}')] bg-right bg-cover` : ''}`}
            data-aos="fade-down"
        >
            <div className="text-center md:text-left space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    SOLAR
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-red-600">SOLUTIONS</span> FOR
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    A SUSTAINABLE
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    TOMORROW <span className="text-red-600">.</span>
                </h1>
            </div>
        </div>
    );
}

export default Hero;
