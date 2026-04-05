'use client'

import { motion } from 'framer-motion'

const text = "Software Engineer"

export default function Loading() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white">

            <motion.h1
                className="text-3xl font-semibold tracking-widest flex"
                initial="hidden"
                animate="visible"
            >
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: i * 0.05 }
                            }
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            <motion.div
                className="mt-4 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            />
        </div>
    )
}