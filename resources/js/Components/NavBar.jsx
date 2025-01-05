import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "@inertiajs/react"; // Use Inertia's Link component
import { motion } from "framer-motion";

const Navbar = ({ isAuthenticated }) => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
    const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart sidebar visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Get the current pathname
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
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-red-600 text-2xl">🍜</div>
                        <h1 className="text-2xl font-serif">Bistro Bliss</h1>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className={`flex items-center gap-8 md:flex md:items-center ${isOpen ? 'flex flex-col absolute left-0 top-full w-full bg-white shadow-md z-50' : 'hidden md:flex'}`}>
                        <Link
                            href="/"
                            className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/' ? 'bg-red-700 text-white' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/about' ? 'bg-red-700 text-white' : ''}`}
                        >
                            About
                        </Link>
                        <Link
                            href="/menu"
                            className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/menu' ? 'bg-red-700 text-white' : ''}`}
                        >
                            Menu
                        </Link>
                        <Link
                            href="/pages"
                            className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/pages' ? 'bg-red-700 text-white' : ''}`}
                        >
                            Pages
                        </Link>
                        <Link
                            href="/contact"
                            className={`hover:text-gray-600 px-3 py-2 rounded-full transition-colors ${currentPath === '/contact' ? 'bg-red-700 text-white' : ''}`}
                        >
                            Contact
                        </Link>
                        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                            <Link href="/login">Login</Link>
                        </button>
                        {isAuthenticated && (
                            <button onClick={toggleCart} className="flex items-center text-gray-700 hover:text-gray-600">
                                <ShoppingCart className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </nav>

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

            {/* Cart Sidebar */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={toggleCart}></div> // Overlay
            )}
            <div className={`fixed right-0 top-0 h-full bg-white shadow-lg transition-transform transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                {/* Cart content goes here */}
                <div className="p-4">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    {/* Example cart items */}
                    <p className="text-gray-600">No items in your cart.</p>
                    <button onClick={toggleCart} className="mt-4 py-2 px-4 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
