import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        title: 'Solar Panel Installation',
        description: 'We provide expert solar panel installations for homes and businesses to maximize energy efficiency.',
        image: '/images/solar-panel.jpg',
    },
    {
        title: 'Energy Storage Solutions',
        description: 'Store surplus energy with our state-of-the-art energy storage systems, ensuring power availability 24/7.',
        image: '/images/energy-storage.jpg',
    },
    {
        title: 'Solar Consultation',
        description: 'Get professional guidance to understand your solar energy needs and create tailored solutions.',
        image: '/images/solar-consultation.jpg',
    },
    {
        title: 'Solar Farm Development',
        description: 'We design and develop large-scale solar farms to harness the power of renewable energy.',
        image: '/images/solar-farm.jpg',
    },
    {
        title: 'Maintenance & Repair Services',
        description: 'Ensure optimal performance of your solar systems with our reliable maintenance and repair services.',
        image: '/images/maintenance.jpg',
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
            <p className="text-lg text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
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
