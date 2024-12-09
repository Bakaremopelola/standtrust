import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
    {
        title: "Electrical Installations",
        description:
            "Comprehensive electrical installations including house wiring, surface, and conduit wiring designed to meet British Standards.",
        img: "your-image-url-1", // Replace with the actual image URL
    },
    {
        title: "Renovation & Building Contracting",
        description:
            "High-quality renovation and building contracting services tailored to meet client needs with precision and efficiency.",
        img: "your-image-url-2", // Replace with the actual image URL
    },
    {
        title: "Property Management",
        description:
            "Reliable property management and house agent services to help you find and manage properties anywhere in Nigeria.",
        img: "your-image-url-3", // Replace with the actual image URL
    },
    {
        title: "Lightning Protection Systems",
        description:
            "Installation of reliable lightning protection systems to safeguard your property and ensure safety during storms.",
        img: "your-image-url-4", // Replace with the actual image URL
    },
];

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="py-12 px-4 md:px-16 bg-gray-50 w-full">
            <div className="text-center mb-12">
                <h5 className="text-gray-600 text-xl">Our Projects</h5>
                <h3 className="text-3xl font-bold text-gray-800">Explore Our Work</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                        data-aos="fade-up"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                                {project.title}
                            </h4>
                            <p className="text-gray-600 text-justify">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
