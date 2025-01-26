'use client';

import { useEffect, useState } from 'react';

export default function PreLoader() {
    const [show, setShow] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(0);
            setTimeout(() => setShow(false), 1000); // Remove from DOM after fade out
        }, 2500); // Show for 2.5 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-opacity duration-1000"
            style={{ opacity }}
        >
            <div className="text-center px-6">
                <div className="relative mb-8">
                    <div className="w-20 h-20 md:w-28 md:h-28 border-8 border-t-transparent border-white rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg md:text-2xl">
                        🚀
                    </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Hello, I'm a Passionate Problem Solver
                </h1>
                <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto leading-relaxed">
                    As an undergraduate software engineer, I love building intuitive, high-performance software solutions.
                    My passion lies in transforming complex challenges into impactful, user-friendly applications.
                </p>
                <p className="text-lg md:text-xl text-white mt-4 font-medium">
                    Let's create something extraordinary together!
                </p>
            </div>
        </div>
    );
}
