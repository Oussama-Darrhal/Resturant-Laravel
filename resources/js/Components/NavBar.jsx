import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const currentPath = window.location.pathname;

    return (
        <div className="bg-white shadow-md relative">
            {/* Top bar */}
            <div className="bg-gray-800 text-white py-2 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 text-sm">
                        <div className="flex items-center gap-4">
                            <span>(414) 857 - 0107</span>
                            <span>yummy@bistrobliss</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-gray-300">Twitter</a>
                            <a href="#" className="hover:text-gray-300">Facebook</a>
                            <a href="#" className="hover:text-gray-300">Instagram</a>
                            <a href="#" className="hover:text-gray-300">Github</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white py-4 px-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="text-red-600 text-2xl">🍜</div>
                            <h1 className="text-2xl font-serif">Bistro Bliss</h1>
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 focus:outline-none"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="/"
                                className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/' ? 'bg-red-700 text-white hover:text-white' : ''}`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/about' ? 'bg-red-700 text-white hover:text-white' : ''}`}
                            >
                                About
                            </Link>
                            <Link
                                href="/menu"
                                className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/menu' ? 'bg-red-700 text-white hover:text-white' : ''}`}
                            >
                                Menu
                            </Link>
                            <Link
                                href="/pages"
                                className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/pages' ? 'bg-red-700 text-white hover:text-white' : ''}`}
                            >
                                Pages
                            </Link>
                            <Link
                                href="/contact"
                                className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/contact' ? 'bg-red-700 text-white hover:text-white' : ''}`}
                            >
                                Contact
                            </Link>
                            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                <Link href="/login">Login</Link>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg z-50">
                            <div className="flex flex-col p-4 space-y-3">
                                <Link
                                    href="/"
                                    className={`w-full text-center hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/' ? 'bg-red-700 text-white' : ''}`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className={`w-full text-center hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/about' ? 'bg-red-700 text-white' : ''}`}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/menu"
                                    className={`w-full text-center hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/menu' ? 'bg-red-700 text-white' : ''}`}
                                >
                                    Menu
                                </Link>
                                <Link
                                    href="/pages"
                                    className={`w-full text-center hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/pages' ? 'bg-red-700 text-white' : ''}`}
                                >
                                    Pages
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`w-full text-center hover:text-gray-600 px-3 py-2 rounded transition-colors ${currentPath === '/contact' ? 'bg-red-700 text-white' : ''}`}
                                >
                                    Contact
                                </Link>
                                <button className="w-full px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <Link href="/login">Login</Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
