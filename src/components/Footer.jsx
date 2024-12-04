import { BiPhone } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Footer() {
    return (
        <div className="flex flex-col w-full bg-black text-gray-300">
            {/* About Section */}
            <div className="flex flex-col p-8 my-4 lg:flex-row lg:justify-between lg:items-center">
                <p className="text-sm lg:text-base leading-relaxed">
                    In Almighty Jehovah God through our Lord Jesus Christ, we trust and stand.
                    We specialize in Electrical Electronic Earthing, Lightning Protection, House Wiring
                    (British Standard 5567), Renovations, and more. Your satisfaction is our pride.
                </p>
            </div>

            {/* Links and Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 border-y border-gray-500 w-[90vw] mx-auto">
                {/* Logo and Description */}
                <div>
                    <em className="h-16 w-16 flex rounded-full border items-center justify-center mb-4">Logo</em>
                    <div className="text-sm lg:text-base leading-relaxed">
                        We provide solutions for all your electrical and building needs. Reliable and competent,
                        we deliver happiness with professionalism.
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h4 className="mb-4 font-bold">Quick Links</h4>
                    <a href="/" className="hover:text-blue-500">Home</a>
                    <a href="/about" className="hover:text-blue-500">About Us</a>
                    <a href="/services" className="hover:text-blue-500">Our Services</a>
                    <a href="/projects" className="hover:text-blue-500">Projects</a>
                    <a href="/contact" className="hover:text-blue-500">Contact</a>
                </div>

                {/* Services */}
                <div className="flex flex-col">
                    <h4 className="mb-4 font-bold">Services</h4>
                    <a href="/" className="hover:text-blue-500">Electrical Installations</a>
                    <a href="/" className="hover:text-blue-500">House Wiring</a>
                    <a href="/" className="hover:text-blue-500">Building Renovations</a>
                    <a href="/" className="hover:text-blue-500">Property Management</a>
                </div>

                {/* Contact */}
                <div className="flex flex-col">
                    <h4 className="mb-4 font-bold">Contact</h4>
                    <a className="flex gap-2 items-center text-sm hover:text-blue-500" href="/"><BiPhone /> +234 123 456 7890</a>
                    <a className="flex gap-2 items-center text-sm hover:text-blue-500" href="/"><MdMail /> support@company.com</a>
                    <div className="flex gap-4 mt-4">
                        <a href="/" className="hover:text-blue-500"><FaFacebook /></a>
                        <a href="/" className="hover:text-blue-500"><BsTwitter /></a>
                        <a href="/" className="hover:text-blue-500"><BsInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex items-center justify-center h-16 text-sm lg:text-base text-gray-400">
                &copy; {new Date().getFullYear()} Trusted Solutions - All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
