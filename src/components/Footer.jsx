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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos obcaecati architecto earum recusandae officia sunt voluptate aut in quidem dolore expedita sed voluptas nemo facilis at molestiae soluta dolor rem, voluptates, quasi labore? Soluta iusto similique assumenda quae sit molestias deleniti, accusantium expedita enim sunt commodi earum. Veritatis, quidem dolore.
                </p>
            </div>

            {/* Links and Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 border-y border-gray-500 w-[90vw] mx-auto">
                {/* Logo and Description */}
                <div>
                    <em className="h-16 w-16 flex rounded-full border items-center justify-center mb-4">Logo</em>
                    <div className="text-sm lg:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit impedit, pariatur deleniti perspiciatis delectus nesciunt minus voluptatem magni autem.
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h4 className="mb-4 font-bold">Quick Links</h4>
                    <a href="/" className="hover:text-blue-500">Home</a>
                    <a href="/" className="hover:text-blue-500">About us</a>
                    <a href="/" className="hover:text-blue-500">Solar initiatives</a>
                    <a href="/" className="hover:text-blue-500">Our services</a>
                    <a href="/" className="hover:text-blue-500">Community</a>
                    <a href="/" className="hover:text-blue-500">Aesthetics</a>
                </div>

                {/* Services */}
                <div className="flex flex-col">
                    <h4 className="mb-4 font-bold">Services</h4>
                    <a href="/" className="hover:text-blue-500">Solar Solution</a>
                    <a href="/" className="hover:text-blue-500">Cable Services</a>
                    <a href="/" className="hover:text-blue-500">Deals and Promotion</a>
                    <a href="/" className="hover:text-blue-500">Consultation and Support</a>
                </div>

                {/* Contact */}
                <div className="flex flex-col">
                    <h4 className="mb-4 font-bold">Contact</h4>
                    <a className="flex gap-2 items-center text-sm hover:text-blue-500" href="/"><BiPhone /> 012345567889</a>
                    <a className="flex gap-2 items-center text-sm hover:text-blue-500" href="/"><MdMail /> companyname@gmail.com</a>
                    <div className="flex gap-4 mt-4">
                        <a href="/" className="hover:text-blue-500"><FaFacebook /></a>
                        <a href="/" className="hover:text-blue-500"><BsTwitter /></a>
                        <a href="/" className="hover:text-blue-500"><BsInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex items-center justify-center h-16 text-sm lg:text-base text-gray-400">
                &copy; {new Date().getFullYear()} Company Name - Developed by Roots Digital Marketing
            </div>
        </div>
    );
}

export default Footer;
