import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col h-[85vh]">
            {/* Hero Section */}
            <div className="flex-grow flex items-center justify-center relative px-4 py-20">
                <div className="container mx-auto flex flex-col items-center text-center z-10 relative">
                    <h1 className="text-6xl font-serif mb-6">
                        Best food for<br />your taste
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 max-w-xl">
                        Discover delectable cuisine and unforgettable moments
                        in our welcoming, culinary haven.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors">
                            Book A Table
                        </button>
                        <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                            Explore Menu
                        </button>
                    </div>
                </div>

                {/* Background food image */}
                <div className="absolute inset-0 -z-10 ">
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
