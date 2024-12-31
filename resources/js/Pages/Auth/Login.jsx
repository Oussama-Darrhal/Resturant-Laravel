import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/NavBar';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example validation (you can replace this with your actual logic)
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Reset error (if any) and proceed with login logic
        setError('');
        // Add your login logic here (e.g., calling an API)
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-[85vh] bg-[#f9f8f6] py-12">
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-semibold text-center text-[#1c1f52] mb-6">Login</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
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
                        >
                            Login
                        </motion.button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">Don't have an account? <Link href="/register" className="text-red-700 hover:underline">Sign Up</Link></p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default LoginForm;
