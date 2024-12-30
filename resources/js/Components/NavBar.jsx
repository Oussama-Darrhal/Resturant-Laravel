import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = ({ auth }) => {
    return (
        <div className="">
            {/* Top bar */}
            <div className="bg-gray-800 text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center text-sm">
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
            </div>

            {/* Main Navigation */}
            <nav className="bg-white py-4 px-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-red-600 text-2xl">🍜</div>
                        <h1 className="text-2xl font-serif">Bistro Bliss</h1>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="bg-gray-100 px-4 py-2 rounded-full">Home</a>
                        <a href="#" className="hover:text-gray-600">About</a>
                        <a href="#" className="hover:text-gray-600">Menu</a>
                        <a href="#" className="hover:text-gray-600">Pages</a>
                        <a href="#" className="hover:text-gray-600">Contact</a>
                        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                            <a href="/login">Login</a>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
