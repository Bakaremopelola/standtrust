import { FaTools, FaHome } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { RiBuildingFill } from "react-icons/ri";

function About() {
    return (
        <div className="font-sans text-gray-800 flex flex-col w-full items-center justify-start px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                About Us
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4" data-aos="fade-up">
                {/* Section 1: Introduction */}
                <div className="flex flex-col gap-4">
                    <p>
                        We are a reliable and professional company specializing in delivering high-quality electrical, 
                        renovation, and property management solutions. With expertise and a commitment to excellence, 
                        we prioritize your satisfaction while adhering to global standards.
                    </p>
                    <p>
                        Our mission is to simplify your property and electrical needs by offering innovative, efficient, 
                        and cost-effective solutions tailored to your requirements.
                    </p>
                </div>

                {/* Section 2: Services */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Service 1 */}
                        <div className="flex gap-4 items-start">
                            <GiElectric className="text-4xl text-blue-500" />
                            <div>
                                <h4 className="font-semibold text-lg">Electrical Installations</h4>
                                <p className="text-sm">
                                    Comprehensive electrical installations, including supply and installation of materials
                                    of various types and sizes.
                                </p>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="flex gap-4 items-start">
                            <FaTools className="text-4xl text-green-500" />
                            <div>
                                <h4 className="font-semibold text-lg">House Wiring</h4>
                                <p className="text-sm">
                                    Professional surface and conduit wiring services that comply with British Standard 5567.
                                </p>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="flex gap-4 items-start">
                            <RiBuildingFill className="text-4xl text-purple-500" />
                            <div>
                                <h4 className="font-semibold text-lg">Building Renovations</h4>
                                <p className="text-sm">
                                    Expert renovation and building contracting services to transform and upgrade properties.
                                </p>
                            </div>
                        </div>
                        {/* Service 4 */}
                        <div className="flex gap-4 items-start">
                            <FaHome className="text-4xl text-yellow-500" />
                            <div>
                                <h4 className="font-semibold text-lg">Property Management</h4>
                                <p className="text-sm">
                                    Reliable property management and house agent services for seamless property transactions across Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
