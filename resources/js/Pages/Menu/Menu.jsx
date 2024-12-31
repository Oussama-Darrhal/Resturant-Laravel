import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const Menu = ({ items }) => {
    const queryParams = new URLSearchParams(window.location.search);
    const currentFilter = queryParams.get('filter') || 'all';

    const handleFilterClick = (filter) => {
        window.location.search = `?filter=${filter}`;
    };

    const handleAddToCart = (item) => {
        // Add cart functionality here
        console.log(`Added ${item.title} to cart`);
    };

    return (
        <div className="py-16 bg-[#f9f8f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-bold text-center mb-6 text-[#1c1f52]"
                >
                    Our Menu
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center text-gray-600 mb-10 text-xl leading-relaxed"
                >
                    Explore our diverse menu designed to satisfy every palate!
                </motion.p>
                <div className="flex justify-center mb-8">
                    {['all', 'breakfast', 'main', 'drinks', 'desserts'].map((filter) => (
                        <motion.button
                            key={filter}
                            className={`px-4 py-2 ${
                                currentFilter === filter ? 'bg-red-700' : 'bg-gray-200'
                            } text-white rounded-full mx-2 hover:bg-red-800 transition-colors`}
                            onClick={() => handleFilterClick(filter)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </motion.button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-110 h-[32rem] flex flex-col"
                        >
                            <img
                                src={`/images/${item.image}`}
                                alt={item.title}
                                className="w-full h-56 object-cover flex-shrink-0"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <p className="text-xl font-semibold">{item.title}</p>
                                    <p className="text-red-500 font-bold text-lg mb-2">{item.price}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{item.description}</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors mt-4"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    <ShoppingCart size={20} />
                                    <span>Add to Cart</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
