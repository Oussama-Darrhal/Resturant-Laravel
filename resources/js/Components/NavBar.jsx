import React from "react";
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { motion } from "framer-motion";

const Navbar = ({ auth }) => {
    // Define animation variants for each element
    const topBarVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut" } },
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeInOut", delay: 0.2 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeInOut", delay: 0.4 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeInOut", delay: 0.6} },
    };

    return (
        <div>
            {/* Top bar */}
            <motion.div
                variants={topBarVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-800 text-white py-2 px-4"
            >
                <div className="container mx-auto flex justify-between items-center text-sm ">
                    <div className="flex items-center gap-4">
                        <span>(414) 857 - 0107</span>
                        <span>yummy@bistrobliss</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Twitter className="w-4 h-4" />
                        <Facebook className="w-4 h-4" />
                        <Instagram className="w-4 h-4" />
                        <Github className="w-4 h-4" />
                    </div>
                </div>
            </motion.div>

            {/* Main Navigation */}
            <nav className="bg-white py-4 shadow-sm px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-2"
                    >
                        <div className="text-red-600 text-2xl">🍜</div>
                        <h1 className="text-2xl font-serif">Bistro Bliss</h1>
                    </motion.div>

                    <div className="flex items-center gap-8">
                        <motion.a
                            href="#"
                            className="bg-gray-100 px-4 py-2 rounded-full"
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-gray-600"
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            About
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-gray-600"
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Menu
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-gray-600"
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Pages
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-gray-600"
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Contact
                        </motion.a>
                        <motion.button
                            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <a href="/login">Login</a>
                        </motion.button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
