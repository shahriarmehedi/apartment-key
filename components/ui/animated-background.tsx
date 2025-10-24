'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main gradient orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-brand-orange/30 via-brand-orange/20 to-transparent rounded-full blur-3xl"
                />

                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-brand-cyan/30 via-brand-cyan/20 to-transparent rounded-full blur-3xl"
                />

                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                    className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-purple-300/20 via-pink-300/20 to-transparent rounded-full blur-3xl"
                />

                {/* Additional smaller orbs for depth */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-orange-300/25 to-transparent rounded-full blur-2xl"
                />

                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                    className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-blue-300/25 to-transparent rounded-full blur-2xl"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Radial gradient overlay for vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-40" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
