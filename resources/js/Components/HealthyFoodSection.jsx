import React from 'react';

const HealthyFoodSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-around px-28 py-14">
                {/* Image Container */}
                <div className="relative mb-8 md:mb-0">
                    <img
                        src = "/images/nsplsh_35304b666658626a494f67~mv2_d_3910_2772_s_4_2.avif"
                        alt="Food"
                        className="rounded-lg w-[600px] h-[400px] object-cover"
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
                <div className="max-w-md">
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
                        className="inline-block px-5 py-2 bg-[#fdd981] text-[#1c1f52] rounded-md font-bold hover:underline"
                    >
                        More About Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HealthyFoodSection;
