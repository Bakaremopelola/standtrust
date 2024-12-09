import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Button from "../Button";
import img2 from "../../assets/commit.webp"
import img3 from "../../assets/connect.webp"

const WhoWeAre = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="py-8 px-4 md:px-16 bg-gray-50 lg:h-[150vh] my-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1
                    data-aos="fade-up"
                    className="text-4xl font-bold text-gray-800 mb-4"
                >
                    Let Us Handle All Your Needs
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto"
                >
                    Let&apos;s connect with you by giving us the chance to handle all your needs in Electrical, 
                    Electronic, Earthing, Lighting Attack Supply, and Installation. We are your trusted partners 
                    in making your projects successful. Your happiness and satisfaction are our pride.
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex justify-center gap-4 mb-8"
                >
                    <Button text="Learn More" />
                    <Button text="Contact Us" />
                </div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8">
                <div
                    data-aos="fade-right"
                    className="flex flex-col justify-center items-center text-center"
                >
                    <img
                        src={img2}
                        alt="Electrical Services"
                        className="w-[30vw] rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Comprehensive Electrical Services
                    </h2>
                    <p className="text-gray-600">
                        House Wiring, Surface and Conduit wiring to British Standard 5567, 
                        supply and installation of electrical and electronic materials of various types and sizes.
                    </p>
                </div>

                <div
                    data-aos="fade-left"
                    className="flex flex-col justify-center items-center text-center"
                >
                    <img
                        src={img3}
                        alt="Renovation and Property Services"
                        className="w-[30vw] rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Renovation & Property Solutions
                    </h2>
                    <p className="text-gray-600">
                        Renovation and building contracting, competent and reliable house agents, 
                        and assistance with landed properties anywhere in Nigeria. Count on us to deliver!
                    </p>
                </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center mt-12">
                <h3
                    data-aos="fade-up"
                    className="text-xl font-semibold text-gray-800 mb-4"
                >
                    We Are the Solution to Your Needs
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-gray-600"
                >
                    Your happiness toward your needs is our pride.
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
