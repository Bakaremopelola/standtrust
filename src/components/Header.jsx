import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex h-16 w-full bg-black text-white">
            <div className="flex justify-between items-center w-full px-4 md:px-16">
                {/* Logo */}
                <div className="text-lg font-bold">Logo</div>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-4">
                    <a href="/" className="hover:text-blue-400">Home</a>
                    <a href="/about" className="hover:text-blue-400">About Us</a>
                    <a href="/contact" className="hover:text-blue-400">Contact</a>
                    <a href="/solar-initiative" className="hover:text-blue-400">Solar Initiative</a>
                    <a href="/our-services" className="hover:text-blue-400">Our Services</a>
                    <a href="/community" className="hover:text-blue-400">Community</a>
                    <a href="/aesthetics" className="hover:text-blue-400">Aesthetics</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed top-16 left-0 w-full bg-black text-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <nav className="flex flex-col items-center gap-4 py-8">
                    <a href="/" className="hover:text-blue-400" onClick={toggleMenu}>
                        Home
                    </a>
                    <a href="/about" className="hover:text-blue-400" onClick={toggleMenu}>
                        About Us
                    </a>
                    <a href="/contact" className="hover:text-blue-400" onClick={toggleMenu}>
                        Contact
                    </a>
                    <a href="/solar-initiative" className="hover:text-blue-400" onClick={toggleMenu}>
                        Solar Initiative
                    </a>
                    <a href="/our-services" className="hover:text-blue-400" onClick={toggleMenu}>
                        Our Services
                    </a>
                    <a href="/community" className="hover:text-blue-400" onClick={toggleMenu}>
                        Community
                    </a>
                    <a href="/aesthetics" className="hover:text-blue-400" onClick={toggleMenu}>
                        Aesthetics
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
