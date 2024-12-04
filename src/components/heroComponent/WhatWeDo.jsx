import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiCard7Clubs, GiSolarPower } from "react-icons/gi";
import { LuCable } from "react-icons/lu";
import { RiCustomerServiceFill } from "react-icons/ri";

const WhatWeDo = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set animation duration (adjust as needed)
            easing: "ease-in-out",
            once: true, // Make sure animations happen only once
        });
    }, []);

    return (
        <div className="py-8 px-4 md:px-16 h-auto">
            <div className="text-center mb-12">
                <h5 className="text-gray-600 text-xl">Our Services</h5>
                <h3 className="text-3xl font-bold text-gray-800">What We Do</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-8 text-justify">
                <div className="grid gap-8">
                    {/* Service 1 */}
                    <div
                        data-aos="fade-up"
                        className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-4"
                    >
                        <GiSolarPower className="text-4xl text-green-500" />
                        <p className="text-sm text-gray-600 text-center">
                            Supply and installation of electrical and electronic materials of various types and sizes, 
                            ensuring compliance with industry standards and customer satisfaction.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-4"
                    >
                        <LuCable className="text-4xl text-blue-500" />
                        <p className="text-sm text-gray-600 text-center">
                            House wiring, both surface and conduit, designed and executed to the British Standard 5567, 
                            tailored to meet the needs of modern homes and offices.
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex justify-center items-center"
                >
                    <img
                        src="your-image-url-here"
                        alt="Service Illustration"
                        className="w-[80%] md:w-[30vw] rounded-lg"
                    />
                </div>

                <div className="grid gap-8">
                    {/* Service 3 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-4"
                    >
                        <GiCard7Clubs className="text-4xl text-purple-500" />
                        <p className="text-sm text-gray-600 text-center">
                            Renovation and building contracting services with a commitment to quality and 
                            timely delivery, ensuring customer needs are fully met.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg space-y-4"
                    >
                        <RiCustomerServiceFill className="text-4xl text-yellow-500" />
                        <p className="text-sm text-gray-600 text-center">
                            Reliable house agent services, including assistance with finding landed property 
                            anywhere in Nigeria. We pride ourselves on being your trusted partner.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
