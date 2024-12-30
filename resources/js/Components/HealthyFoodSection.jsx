import React from 'react';

const HealthyFoodSection = () => {
    return (
        <section className="py-12 bg-[#f9f8f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-14">
                {/* Image Container */}
                <div className="relative mb-8 md:mb-0 w-full md:w-1/2">
                    <img
                        src="/images/healthyfood.jpg"
                        alt="Food"
                        className="rounded-lg w-full h-auto object-cover"
                    />
                    <div className="bg-[#333] text-white p-5 rounded-lg absolute bottom-[-20px] right-5 w-72 shadow-lg">
                        <h3 className="mb-2">Come and visit us</h3>
                        <p>📞 (414) 857 - 0107</p>
                        <p>✉️ happytummy@restaurant.com</p>
                        <p>
                            📍 837 W. Marshall Lane
                            <br />
                            Marshalltown, IA 50158, Los Angeles
                        </p>
                    </div>
                </div>

                {/* Text Container */}
                <div className="max-w-md md:w-1/2">
                    <h1 className="text-3xl text-[#1c1f52] mb-4">We provide healthy food for your family.</h1>
                    <p className="text-gray-800 mb-4 leading-relaxed">
                        Our story began with a vision to create a unique dining experience that merges fine dining,
                        exceptional service, and a vibrant ambiance rooted in the city's rich culinary culture.
                    </p>
                    <p className="text-gray-800 mb-4 leading-relaxed">
                        At our place, we believe that dining is not just about food, but also about the overall experience.
                        Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    >
                        More About Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HealthyFoodSection;
