"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion"
import Stars from "./Stars";

const fadeInUpAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 1.5,
        },
    },
};

const WelcomeMessage = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const pathname = usePathname();
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");

        if (!hasVisited && pathname === "/") {
            setShowMessage(true);
            const hideTimeout = setTimeout(() => {
                setOpacity(0); // Fade out the whole layout
                setFadeOut(true); // Start fade-out animation
                setTimeout(() => {
                    setShowMessage(false); // Hide the message after fade-out
                    localStorage.setItem("hasVisited", "true"); // Set visit flag
                }, 1000); // Fade-out duration
            }, 6000); // Display message for 3 seconds

            return () => clearTimeout(hideTimeout);
        }
    }, [pathname]);

    if (!showMessage) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0a0e27] via-[#151a40] to-[#1a234d] duration-1000"
                style={{ opacity }}
            >

                {/* Vignette Effect */}
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                <Stars />
                <div className="text-center px-8 py-6 max-w-4xl mx-auto">
                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        className="text-[#8c95e4]  mb-8 font-bold">
                        Problem Solver {" "}  <span className="px-1">|</span> {" "} Innovator at Heart

                    </motion.p>

                    <motion.h1
                        initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        className={`text-4xl md:text-[3.75rem] font-semibold  bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text leading-[4.75rem] drop-shadow-xl transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
                    >
                        Passionate Undergraduate Software Engineer
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        className={`text-lg md:text-md text-[#8c95e4] mt-6 max-w-xl mx-auto leading-relaxed transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
                    >
                        As a passionate software engineer, I specialize in creating high-performance, user-centric web applications with React.
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        className={`text-md md:text-sm text-[#8c95e4]  mt-8 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
                    >
                        Let’s build something extraordinary together! 🚀
                    </motion.p>
                </div>
            </div>
        </>
    );
};

export default WelcomeMessage;
