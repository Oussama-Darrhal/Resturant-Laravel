import React from "react";
import { motion } from "framer-motion";
import { Head } from "@inertiajs/react";
import NavBar from "../Components/NavBar";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/Testimonials";
import BlogArticles from "@/Components/BlogArticles";
import BrowseMenu from "@/Components/BrowseMenu";
import HealthyFoodSection from "@/Components/HealthyFoodSection";
import Footer from "@/Components/Footer";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.7, ease: "easeInOut" } },
};

const slideFromLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.7, ease: "easeInOut" } },
};

const slideFromRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.7, ease: "easeInOut" } },
};

// Function to randomly select an animation variant
const getRandomSlideVariant = () => {
    return Math.random() > 0.5 ? slideFromLeftVariants : slideFromRightVariants;
};

const LandingPage = () => (
    <div className="min-h-screen mx-auto max-w-[150rem] selection:bg-red-700 selection:text-white">
        <Head title="Welcome" />
        <NavBar />

        <Hero />

        {/* Browse Menu Section */}
        <motion.div
            variants={getRandomSlideVariant()} // Randomly choose slide direction
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[150rem] px-4 sm:px-6 lg:px-6"
        >
            <BrowseMenu />
        </motion.div>

        {/* Healthy Food Section */}
        <motion.div
            variants={getRandomSlideVariant()} // Randomly choose slide direction
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[150rem] px-4 sm:px-6 lg:px-6 bg-[#f9f8f6]"
        >
            <HealthyFoodSection />
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[150rem] px-4 sm:px-6 lg:px-6"
        >
            <Testimonials />
        </motion.div>

        {/* Blog Articles Section */}
        <motion.div
            variants={getRandomSlideVariant()} // Randomly choose slide direction
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[150rem] px-4 sm:px-6 lg:px-6 bg-[#f9f8f6]"
        >
            <BlogArticles />
        </motion.div>

        {/* Footer Section */}
        <motion.div
            variants={getRandomSlideVariant()} // Randomly choose slide direction
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1d1f53] w-full max-w-[150rem] px-4 sm:px-6 lg:px-6"
        >
            <Footer />
        </motion.div>
    </div>
);

export default LandingPage;
