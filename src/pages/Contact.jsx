import { useState, useEffect } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend or email)
        alert("Message sent!");
    };

    return (
        <div className="font-sans text-gray-800 flex flex-col w-full items-center justify-start px-4 py-8">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                Contact Us
            </h2>

            {/* Contact Options */}
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4"
                data-aos="fade-up"
            >
                {/* Phone Contact */}
                <div className="flex flex-col gap-4 items-center text-center" data-aos="zoom-in">
                    <FaPhoneAlt className="text-5xl text-green-500" />
                    <h3 className="text-2xl font-semibold">Call Us</h3>
                    <p>If you have any questions, feel free to reach out by phone.</p>
                    <p className="text-xl font-semibold">0123456789</p>
                </div>

                {/* Email Contact */}
                <div className="flex flex-col gap-4 items-center text-center" data-aos="zoom-in" data-aos-delay="200">
                    <MdEmail className="text-5xl text-blue-500" />
                    <h3 className="text-2xl font-semibold">Email Us</h3>
                    <p>You can email us for inquiries, feedback, or support.</p>
                    <p className="text-xl font-semibold">companyname@example.com</p>
                </div>

                {/* Office Location */}
                <div className="flex flex-col gap-4 items-center text-center" data-aos="zoom-in" data-aos-delay="400">
                    <MdLocationOn className="text-5xl text-red-500" />
                    <h3 className="text-2xl font-semibold">Visit Us</h3>
                    <p>Come to our office for a face-to-face consultation.</p>
                    <p className="text-xl font-semibold">123 Main Street, City, Country</p>
                </div>
            </div>

            {/* Form Section */}
            <form
                onSubmit={handleSubmit}
                className="mt-8 w-full max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="600"
            >
                <h3 className="text-2xl font-bold text-center mb-4">Send Us a Message</h3>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="p-4 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="p-4 border border-gray-300 rounded-md"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        className="p-4 border border-gray-300 rounded-md"
                        rows="4"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            {/* Google Map */}
            <div className="w-full mt-12" data-aos="fade-up" data-aos-delay="800">
                <h3 className="text-2xl font-bold text-center mb-4">Find Us Here</h3>
                <div className="w-full h-96 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4217286018797!2d144.96487361532264!3d-37.81720917975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b1236f6f%3A0x1234567890abcdef!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Company Location"
                    ></iframe>
                </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 flex justify-center gap-4" data-aos="fade-up" data-aos-delay="1000">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                >
                    <FaFacebookF className="text-2xl" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition"
                >
                    <FaTwitter className="text-2xl" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition"
                >
                    <FaLinkedinIn className="text-2xl" />
                </a>
            </div>
        </div>
    );
}

export default Contact;
