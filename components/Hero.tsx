'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { AuroraText } from './ui/aurora-text'

const cityNames = [
    'Houston',
    'Cypress',
    'Spring',
    'Richmond',
    'Pearland',
    'Woodlands',
    'Katy',
    'Sugarland',
    'Conroe',
    'Med Center',
    'Downtown',
    'Stafford',
    'Montgomery',
    'Tomball',
    'Galveston',
]

export const Hero: React.FC = () => {
    const scrollToCTA = () => {
        const element = document.getElementById('cta')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 pb-12">
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
                    className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-brand-orange/40 via-brand-orange/25 to-transparent rounded-full blur-3xl"
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
                    className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-brand-cyan/40 via-brand-cyan/25 to-transparent rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-brand-pink/30 via-brand-pink/20 to-transparent rounded-full blur-3xl"
                />

                {/* Additional smaller orbs for depth */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-brand-orange/35 to-transparent rounded-full blur-2xl"
                />

                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                    className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-brand-cyan/35 to-transparent rounded-full blur-2xl"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Radial gradient overlay for vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-5">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-orange/15 to-brand-cyan/15 border border-brand-cyan/30 rounded-full px-4 py-1.5 text-sm text-gray-700 font-medium"
                        >
                            <span>✨</span>
                            <span>Houston&apos;s Most Trusted Apartment Locators</span>
                        </motion.div>

                        {/* Main Headline with Aurora Text */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl text-gray-700 font-bold leading-tight tracking-tight"
                        >
                            Unlock Your Perfect Place with{' '}
                            <AuroraText
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                                colors={["#00D4FF", "#FFB6D9", "#00D4FF"]}
                            >
                                APARTMENT KEY
                            </AuroraText>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-base sm:text-lg text-gray-600 leading-relaxed"
                        >
                            A fast and stress free way to find your next apartment.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-2"
                        >
                            <Link
                                href="/get-started"
                                className="group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-brand-coral to-brand-coral hover:from-brand-coral/90 hover:to-brand-coral/90 text-white px-6 py-4 shadow-lg shadow-brand-coral/25 text-base sm:text-lg"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - Floating City Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center items-center w-full"
                    >
                        <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px]">
                            {/* Background glow effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-brand-orange/20 via-brand-pink/20 to-brand-cyan/20 blur-3xl rounded-full"
                            />

                            {/* Central Houston Icon - Clean & Modern */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 150 }}
                                    className="relative group cursor-pointer"
                                >
                                    {/* Animated glow rings */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.3, 0.5, 0.3],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan blur-2xl rounded-full"
                                    />

                                    <motion.div
                                        animate={{
                                            scale: [1.1, 1.4, 1.1],
                                            opacity: [0.2, 0.4, 0.2],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-pink to-brand-orange blur-3xl rounded-full"
                                    />

                                    {/* Main circle container */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden"
                                    >
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 via-brand-pink/0 to-brand-cyan/0 group-hover:from-brand-orange/10 group-hover:via-brand-pink/10 group-hover:to-brand-cyan/10 transition-all duration-500" />

                                        {/* Map pin icon with pulse */}
                                        <motion.div
                                            animate={{
                                                y: [0, -3, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="relative"
                                        >
                                            <svg
                                                className="w-16 h-16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <defs>
                                                    <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#FF8C42" />
                                                        <stop offset="50%" stopColor="#FFB6D9" />
                                                        <stop offset="100%" stopColor="#00D4FF" />
                                                    </linearGradient>
                                                </defs>

                                                <path
                                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                                    fill="url(#pinGradient)"
                                                />
                                                <circle cx="12" cy="9" r="2" fill="white" />
                                            </svg>
                                        </motion.div>

                                        {/* Rotating ring decoration */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="absolute inset-0"
                                        >
                                            <div className="absolute top-2 left-1/2 w-2 h-2 bg-brand-orange rounded-full -translate-x-1/2" />
                                            <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-brand-cyan rounded-full -translate-x-1/2" />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Floating City Cards - Circular Natural Layout */}
                            {cityNames.map((city, index) => {
                                // Perfect circular arrangement with varied distances for natural look
                                // Center is at 275, 275 (50% of 550px container)
                                const desktopPositions = [
                                    { x: 110, y: 85 },      // Houston - top-left, closer
                                    { x: 430, y: 155 },     // Cypress - right, further out
                                    { x: 420, y: 290 },     // Spring - right-middle
                                    { x: 380, y: 410 },     // Richmond - bottom-right
                                    { x: 275, y: 455 },     // Pearland - bottom-center, far
                                    { x: 150, y: 440 },     // Woodlands - bottom-left, far
                                    { x: 65, y: 360 },      // Katy - left-bottom
                                    { x: 50, y: 240 },      // Sugarland - left-middle, further
                                    { x: 80, y: 140 },      // Conroe - left-top
                                    { x: 190, y: 70 },      // Med Center - top, closer
                                    { x: 275, y: 50 },      // Downtown - top-center, closest
                                    { x: 360, y: 75 },      // Stafford - top-right, closer
                                    { x: 465, y: 200 },     // Montgomery - far right-top
                                    { x: 450, y: 330 },     // Tomball - far right-bottom
                                    { x: 330, y: 460 },     // Galveston - bottom-right, far
                                ];

                                // Scale positions for smaller screens (proportional to container size)
                                // Desktop: 550px, Tablet: 450px (0.818x), Mobile: 350px (0.636x)
                                const positions = desktopPositions;

                                const pos = positions[index] || { x: 275, y: 275 };

                                // Subtle floating animation
                                const delay = index * 0.05;
                                const duration = 3 + (index % 4) * 0.5;
                                const floatX = (index % 3 - 1) * 6;
                                const floatY = (Math.floor(index / 3) % 3 - 1) * 6;

                                return (
                                    <motion.div
                                        key={city}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            x: [0, floatX, 0],
                                            y: [0, floatY, 0],
                                        }}
                                        transition={{
                                            opacity: { duration: 0.5, delay },
                                            scale: { duration: 0.5, delay },
                                            x: { duration, repeat: Infinity, ease: "easeInOut", delay },
                                            y: { duration, repeat: Infinity, ease: "easeInOut", delay }
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            zIndex: 50,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="absolute cursor-pointer"
                                        style={{
                                            left: `${(pos.x / 550) * 100}%`,
                                            top: `${(pos.y / 550) * 100}%`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <div className="relative group">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-full" />

                                            {/* City Card */}
                                            <div className="relative bg-gradient-to-br from-white via-white to-gray-50 px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-full shadow-lg border-2 border-gray-200 group-hover:border-brand-cyan group-hover:shadow-2xl transition-all duration-300">
                                                <div className="flex items-center space-x-1 md:space-x-1.5">
                                                    {/* Location pin icon */}
                                                    <svg
                                                        className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-brand-orange group-hover:text-brand-cyan transition-colors flex-shrink-0"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>

                                                    {/* City name with gradient on hover */}
                                                    <span className="text-[10px] md:text-xs font-semibold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:via-brand-pink group-hover:to-brand-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all whitespace-nowrap">
                                                        {city}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
