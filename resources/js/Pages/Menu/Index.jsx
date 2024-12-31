import Navbar from "@/Components/NavBar";
import { Head } from "@inertiajs/react";
import React from "react";
import Menu from "./Menu";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";
// import { Head } from "@inertiajs/react";
// import NavBar from "../Components/NavBar";
// import Hero from "@/Components/Hero";
// import Testimonials from "@/Components/Testimonials";
// import BlogArticles from "@/Components/BlogArticles";
// import BrowseMenu from "@/Components/BrowseMenu";
// import HealthyFoodSection from "@/Components/HealthyFoodSection";
// import Footer from "@/Components/Footer";

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

const MenuIndex = ( { menu } ) => (
    <div className="min-h-screen mx-auto max-w-[150rem] selection:bg-red-700 selection:text-white">
        <Head title="Menu" />

        <Navbar />

        <Menu items={menu} />

        {/* Footer Section */}
        <motion.div
            variants={getRandomSlideVariant()} // Randomly choose slide direction
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#474747] w-full max-w-[150rem] px-4 sm:px-6 lg:px-6"
        >
            <Footer />
        </motion.div>

    </div>
);

export default MenuIndex;
