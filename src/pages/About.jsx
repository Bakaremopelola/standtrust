import { FaRegLightbulb } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

function About() {
    return (
        <div className="font-sans text-gray-800 flex flex-col w-full items-center justify-start px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                About Us
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4" data-aos="fade-up">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <FaRegLightbulb className="text-5xl text-green-500" />
                        <h3 className="text-2xl font-semibold">Innovative Solutions</h3>
                    </div>
                    <p>
                        We are committed to providing eco-friendly solar energy solutions to reduce carbon footprints and build a sustainable future. Our innovative technologies and customer-centric services ensure that you get the best value.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <IoIosPeople className="text-5xl text-blue-500" />
                        <h3 className="text-2xl font-semibold">Our Team</h3>
                    </div>
                    <p>
                        Our team consists of experts in the solar energy field, customer service, and technology. We are driven by a passion for clean energy and sustainability, dedicated to helping businesses and individuals make the switch to solar energy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
