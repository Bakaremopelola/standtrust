import { FaRegLightbulb } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

function About() {
    return (
        <div className="font-sans text-gray-800 flex flex-col w-full items-center justify-start px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                About Us
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4" data-aos="fade-up">
                {/* Section 1 */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <FaRegLightbulb className="text-5xl text-green-500" />
                        <h3 className="text-2xl font-semibold">Our Mission</h3>
                    </div>
                    <p>
                        In Almighty Jehovah God through our Lord Jesus Christ, we trust and stand. Our mission is to provide
                        solutions that meet all your electrical, electronic, and property needs with professionalism,
                        excellence, and reliability.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <IoIosPeople className="text-5xl text-blue-500" />
                        <h3 className="text-2xl font-semibold">What We Offer</h3>
                    </div>
                    <p>
                        We specialize in electrical and electronic services, including earthing, lighting attack supply,
                        and installation. Our expertise also extends to:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>House wiring, surface, and conduit installations per British Standard 5567.</li>
                        <li>Supply and installation of electrical and electronic materials of various types and sizes.</li>
                        <li>Renovation and building contracting.</li>
                        <li>Reliable house agency services for landed properties across Nigeria.</li>
                    </ul>
                    <p>Your happiness and satisfaction with our solutions are our ultimate pride.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
