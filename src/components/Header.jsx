import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
            <div className="flex justify-between items-center h-16 px-4 md:px-16">
                {/* Logo */}
                <div className="text-lg font-bold">Trusted Solutions</div>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-6">
                    <a href="/" className="hover:text-blue-400">Home</a>
                    <a href="/about" className="hover:text-blue-400">About Us</a>
                    <a href="/services" className="hover:text-blue-400">Services</a>
                    <a href="/projects" className="hover:text-blue-400">Projects</a>
                    <a href="/contact" className="hover:text-blue-400">Contact</a>
                </nav>

                {/* Mobile Menu */}
                <button
                    className="block md:hidden text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="bg-black text-white md:hidden">
                    <nav className="flex flex-col items-center py-4 gap-4">
                        <a href="/" className="hover:text-blue-400" onClick={toggleMenu}>Home</a>
                        <a href="/about" className="hover:text-blue-400" onClick={toggleMenu}>About Us</a>
                        <a href="/services" className="hover:text-blue-400" onClick={toggleMenu}>Services</a>
                        <a href="/projects" className="hover:text-blue-400" onClick={toggleMenu}>Projects</a>
                        <a href="/contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
