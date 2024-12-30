import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faGlassMartiniAlt, faIceCream } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut", delay: i * 0.1 },
    }),
};

const BrowseMenu = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-serif mb-12 text-center">Browse Our Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1: Breakfast */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0} // Index for delay
                        className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <FontAwesomeIcon icon={faCoffee} size="2x" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Breakfast</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Enjoy a delightful breakfast with options like pancakes,
                            eggs, and healthy smoothies that will energize your morning.
                        </p>
                        <a href="#" className="text-red-700 font-medium hover:underline">Explore Menu</a>
                    </motion.div>

                    {/* Card 2: Main Dishes */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <FontAwesomeIcon icon={faUtensils} size="2x" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Main Dishes</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Savor our main dishes, featuring gourmet pasta, fresh seafood,
                            and hearty vegetarian options, all made with high-quality ingredients.
                        </p>
                        <a href="#" className="text-red-700 font-medium hover:underline">Explore Menu</a>
                    </motion.div>

                    {/* Card 3: Drinks */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <FontAwesomeIcon icon={faGlassMartiniAlt} size="2x" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Drinks</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Refresh yourself with our selection of drinks, from
                            handcrafted cocktails to fresh juices and specialty coffees.
                        </p>
                        <a href="#" className="text-red-700 font-medium hover:underline">Explore Menu</a>
                    </motion.div>

                    {/* Card 4: Desserts */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                            <FontAwesomeIcon icon={faIceCream} size="2x" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Desserts</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Indulge in our tempting desserts, including rich cakes,
                            creamy cheesecakes, and refreshing sorbets for a sweet finish.
                        </p>
                        <a href="#" className="text-red-700 font-medium hover:underline">Explore Menu</a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BrowseMenu;
