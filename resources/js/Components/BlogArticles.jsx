import React from 'react';
import { Link } from '@inertiajs/react';

const BlogArticles = () => {
    const articles = [
        {
            id: 1,
            title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
            excerpt: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitllimim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
            image: "/api/placeholder/600/400",
            date: "January 3, 2023",
            slug: "perfect-burger-pizza-tips"
        },
        {
            id: 2,
            title: "How to prepare the perfect french fries in an air fryer",
            image: "/api/placeholder/400/300",
            date: "January 3, 2023",
            slug: "air-fryer-french-fries"
        },
        {
            id: 3,
            title: "How to prepare delicious chicken tenders",
            image: "/api/placeholder/400/300",
            date: "January 3, 2023",
            slug: "delicious-chicken-tenders"
        },
        {
            id: 4,
            title: "7 delicious cheesecake recipes you can prepare",
            image: "/api/placeholder/400/300",
            date: "January 3, 2023",
            slug: "cheesecake-recipes"
        },
        {
            id: 5,
            title: "5 great pizza restaurants you should visit this city",
            image: "/api/placeholder/400/300",
            date: "January 3, 2023",
            slug: "best-pizza-restaurants"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-serif">Our Blog & Articles</h2>
                <Link
                    href="/articles"
                    className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition"
                >
                    Read All Articles
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap from gap-8 to gap-4 */}
                {/* Featured Article */}
                <div className="md:col-span-1 flex">
                    <Link href={`/articles/${articles[0].slug}`} className="group w-full">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                            <div className="relative h-[400px] md:h-[300px]">
                                <img
                                    src={articles[0].image}
                                    alt={articles[0].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex-grow">
                                <span className="text-gray-500 text-sm">{articles[0].date}</span>
                                <h3 className="text-xl font-semibold mt-2 group-hover:text-red-700 transition">
                                    {articles[0].title}
                                </h3>
                                <p className="text-gray-600 mt-2">{articles[0].excerpt}</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Regular Articles */}
                <div className="md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Reduced gap from gap-8 to gap-4 */}
                    {articles.slice(1).map((article) => (
                        <Link
                            key={article.id}
                            href={`/articles/${article.slug}`}
                            className="group"
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                                <div className="relative h-48 md:h-40">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow">
                                    <span className="text-gray-500 text-sm">{article.date}</span>
                                    <h3 className="text-lg font-semibold mt-2 group-hover:text-red-700 transition">
                                        {article.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogArticles;
