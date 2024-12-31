import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonialData = [
    {
        title: "Highly Detailed Courses",
        quote: "The courses were detailed and easy to follow, helping me understand complex topics step by step.",
        author: "David Wilson",
        location: "New York, NY",
        image: "/images/pfp-2.jpg",
    },
    {
        title: "Fantastic Learning Platform",
        quote: "Instructly provides a fantastic platform for delivering engaging and effective lessons to students.",
        author: "Sarah Chen",
        location: "San Francisco, CA",
        image: "/images/pfp-1.jpg",
    },
    {
        title: "Confidence to Succeed",
        quote: "I gained the confidence to apply for tech roles after completing the beginner-friendly courses.",
        author: "David Kim",
        location: "Austin, TX",
        image: "/images/pfp-3.jpg",
    },
    {
        title: "Amazing Teaching Experience",
        quote: "Teaching on Instructly has been an amazing experience, thanks to their supportive team and intuitive tools.",
        author: "Michael Torres",
        location: "Chicago, IL",
        image: "/images/pfp-4.jpg",
    },
    {
        title: "Enjoyable Learning",
        quote: "The practical exercises and real-world examples made learning enjoyable and effective.",
        author: "Linda Ahmed",
        location: "Los Angeles, CA",
        image: "/images/pfp-5.jpg",
    },
    {
        title: "Fantastic Learning Platform",
        quote: "Instructly provides a fantastic platform for delivering engaging and effective lessons to students.",
        author: "Sarah Chen",
        location: "San Francisco, CA",
        image: "/images/pfp-1.jpg",
    },
];

const Testimonials = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const testimonialsPerPage = 3;

    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    const currentTestimonials = testimonialData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(testimonialData.length / testimonialsPerPage);

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === 'prev' && currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-serif mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            className="border border-gray-200 rounded-lg p-8 bg-[#f9f8f6] shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-red-700 mb-4">"{testimonial.title}"</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div className="text-left">
                                    <p className="font-medium text-lg">{testimonial.author}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={() => handlePageChange('prev')}
                        disabled={currentPage === 0}
                        className={`px-6 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
                            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                        }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange('next')}
                        disabled={currentPage >= totalPages - 1}
                        className={`px-6 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
                            currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
