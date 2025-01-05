import React from 'react';
import { motion } from 'framer-motion';
import { Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import InputError from "@/Components/InputError";

const LoginForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login")); // Assuming you have a route named 'login'
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-[#f9f8f6] py-12">
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-semibold text-center text-[#1c1f52] mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">Forgot Password?</Link>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-red-700 text-white font-bold py-2 px-4 rounded-full hover:bg-red-800 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            disabled={processing} // Disable button when processing
                        >
                            {processing ? 'Logging in...' : 'Login'}
                        </motion.button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">Don't have an account? <Link href="/register" className="text-red-700 hover:underline">Sign Up</Link></p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default LoginForm;
