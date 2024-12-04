import  { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send data to backend or email)
        alert('Message sent!');
    };

    return (
        <div className="font-sans text-gray-800 flex flex-col w-full items-center justify-start px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                Contact Us
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4" data-aos="fade-up">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-5xl text-green-500" />
                        <h3 className="text-2xl font-semibold">Call Us</h3>
                    </div>
                    <p>If you have any questions, feel free to reach out to us by phone.</p>
                    <p className="text-xl font-semibold">0123456789</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <MdEmail className="text-5xl text-blue-500" />
                        <h3 className="text-2xl font-semibold">Email Us</h3>
                    </div>
                    <p>You can also email us for inquiries, feedback, or support.</p>
                    <p className="text-xl font-semibold">companyname@example.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 w-full max-w-2xl mx-auto">
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
        </div>
    );
}

export default Contact;
