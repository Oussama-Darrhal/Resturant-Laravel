import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Reset error and simulate successful password reset
        setError('');
        setMessage('Your password has been successfully reset. You can now log in.');

        // Here you would typically send a request to your backend to handle the password reset logic
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f9f8f6] py-12">
            <motion.div
                className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold text-center text-[#1c1f52] mb-6">Reset Password</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {message && <p className="text-green-500 mb-4">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirm your new password"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-red-700 text-white font-bold py-2 px-4 rounded-full hover:bg-red-800 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Reset Password
                    </motion.button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Remembered your password? <Link href="/login" className="text-red-700 hover:underline">Login</Link></p>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPassword;
