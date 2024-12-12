import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import elec from '../assets/ele.jpeg';
import sup from '../assets/sup.jpg';
import build from '../assets/bui.jpeg';
import earth from '../assets/earth.jpg';
import land from '../assets/landed.png';
import main from '../assets/main.webp';

const services = [
    {
        title: 'Electrical Wiring & Installation',
        description: 'We specialize in house wiring, surface, and conduit installation according to British Standard 5567.',
        image: elec,
    },
    {
        title: 'Supply of Electrical Materials',
        description: 'We provide a wide range of electrical and electronic materials of various types and sizes.',
        image: sup,
    },
    {
        title: 'Building Renovation & Contracting',
        description: 'Expert renovation and building contracting services tailored to meet your needs.',
        image: build,
    },
    {
        title: 'Earthing & Lightning Protection',
        description: 'Reliable earthing and lightning protection systems for homes and businesses.',
        image: earth,
    },
    {
        title: 'Landed Property Solutions',
        description: 'We are competent and reliable house agents. Need landed property anywhere in Nigeria? Count on us.',
        image: land,
    },
    {
        title: 'Maintenance & Repairs',
        description: 'Ensure optimal performance of your electrical systems with our maintenance and repair services.',
        image: main,
    },
];


const OurServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
    }, []);

    return (
        <div className="font-sans text-gray-800 px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                Our Services
            </h2>
            <p className="text-lg text-center w-3xl lg:w-[75vw] mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
                In Almighty Jehovah God through our Lord Jesus Christ we Trust and Stand.
                <br />
                Let’s connect with you by giving us the chance to handle all your needs in times of Electrical, Electronic, Earthing, Lighting, Attack Supply, and Installation.
                <br />
                We specialize in House Wiring, Surface, and Conduit installation to the British Standard 5567.
                <br />
                We also provide the Supply and Installation of various types and sizes of Electrical and Electronic Materials.
                <br />
                Our services extend to Renovation and Building Contracting, and we are competent and reliable house agents. If you need landed property anywhere in Nigeria, count on us.
                <br />
                We are the solution to every one of your needs, and your happiness toward those needs is our pride.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
