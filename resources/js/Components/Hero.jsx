import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    // Define animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 0.6 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut", delay: 1 } },
    };

    return (
        <div className="flex flex-col h-[85vh]">
            {/* Hero Section */}
            <div className="flex-grow flex items-center justify-center relative px-4 py-20">
                <div className="container mx-auto flex flex-col items-center text-center z-10 relative">
                    <motion.h1
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-6xl font-serif mb-6"
                    >
                        Best food for<br />your taste
                    </motion.h1>
                    <motion.p
                        variants={paragraphVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-gray-600 text-lg mb-8 max-w-xl"
                    >
                        Discover delectable cuisine and unforgettable moments
                        in our welcoming, culinary haven.
                    </motion.p>
                    <div className="flex gap-4">
                        <motion.button
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors"
                        >
                            Book A Table
                        </motion.button>
                        <motion.button
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                        >
                            Explore Menu
                        </motion.button>
                    </div>
                </div>

                {/* Background food image */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/images/c_img2.jpeg"
                        alt="Delicious food"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
