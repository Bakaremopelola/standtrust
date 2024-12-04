import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SampleCard from "../cards/SampleCard";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-8 px-4 lg:px-16 bg-gray-100">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Expertise and Experience
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Discover our wide range of eco-friendly and innovative solutions designed for a sustainable future.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 place-items-center">
        <SampleCard
          title="Eco-Friendly Solutions"
          description="Join the green revolution with our eco-friendly energy plans."
          bgImage="url-to-your-image-1.jpg"
          bgColor="bg-green-500"
          textColor="text-gray-900"
        />
        <SampleCard
          title="Innovative Technologies"
          description="Experience the best of innovation with our advanced solutions."
          bgImage="url-to-your-image-2.jpg"
          bgColor="bg-blue-500"
          textColor="text-gray-900"
        />
        <SampleCard
          title="Reliable Services"
          description="Count on us for dependable services tailored to your needs."
          bgImage="url-to-your-image-3.jpg"
          bgColor="bg-yellow-500"
          textColor="text-gray-900"
        />
        <SampleCard
          title="Affordable Plans"
          description="Get the best value for money with our budget-friendly options."
          bgImage="url-to-your-image-4.jpg"
          bgColor="bg-red-500"
          textColor="text-gray-900"
        />
      </div>
    </section>
  );
};

export default Services;
