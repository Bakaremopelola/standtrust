// import Button from "../Button"


// const WhoWeAre = () => {
//     return (
//         <div>
//             <div>
//                 <div>
//                     <h1>who we are</h1>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo ut sint asperiores? Eaque corrupti odit facere? Corrupti suscipit reiciendis reprehenderit, eveniet odit quaerat nobis porro eos, illo, optio tenetur accusantium officia ratione veritatis odio ducimus saepe placeat possimus. Dolorum pariatur ab dignissimos facere veniam magni quibusdam dolorem rem provident?</p>
//                     <div className="flex items-center justify-between">
//                         <Button />
//                         <Button />
//                     </div>
//                 </div>
//                 <div>
//                     <img src="" alt="" />
//                     <img src="" alt="" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default WhoWeAre



import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Button from "../Button";

const WhoWeAre = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: "ease-in-out", // Easing function
            once: true, // Animate only once
        });
    }, []);

    return (
        <div className="py-8 px-4 md:px-16">
            <div className="text-center mb-12">
                <h1
                    data-aos="fade-up"
                    className="text-4xl font-bold text-gray-800 mb-4"
                >
                    Who We Are
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo
                    ut sint asperiores? Eaque corrupti odit facere? Corrupti suscipit reiciendis
                    reprehenderit, eveniet odit quaerat nobis porro eos, illo, optio tenetur accusantium
                    officia ratione veritatis odio ducimus saepe placeat possimus. Dolorum pariatur ab
                    dignissimos facere veniam magni quibusdam dolorem rem provident?
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex justify-center gap-4 mb-8"
                >
                    <Button label="Learn More" />
                    <Button label="Contact Us" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8">
                <div
                    data-aos="fade-right"
                    className="flex justify-center items-center"
                >
                    <img
                        src="your-image-url-1"
                        alt="Image 1"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                <div
                    data-aos="fade-left"
                    className="flex justify-center items-center"
                >
                    <img
                        src="your-image-url-2"
                        alt="Image 2"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
