"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
    const [show, setShow] = useState(true);

    // Hide after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                Pradip
            </motion.h1>
        </div>
    );
}