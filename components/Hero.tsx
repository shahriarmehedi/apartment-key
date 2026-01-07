'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalCards = cityNames.length // Use all cities

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalCards)
        }, 2000) // Slide every 2 seconds

        return () => clearInterval(interval)
    }, [totalCards])

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

            <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 xl:gap-32 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-5 lg:pr-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-orange/15 to-brand-cyan/20 border border-brand-deep-blue/30 rounded-full px-4 py-1.5 text-sm text-gray-700 font-medium shadow-sm shadow-brand-deep-blue/10"
                        >
                            <span>✨</span>
                            <span>Houston&apos;s Most Trusted Apartment Locators</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-bold leading-tight tracking-tight flex flex-col items-center lg:items-start"
                        >
                            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                                Unlock
                            </span>
                            <span className="text-brand-deep-blue text-2xl sm:text-3xl lg:text-4xl my-1">
                                your perfect place with...
                            </span>
                            <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-brand-orange via-orange-400 to-brand-orange bg-clip-text text-transparent">
                                APARTMENT KEY
                            </span>
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
                                className="group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-orange/90 hover:to-brand-orange/90 text-white px-6 py-4 shadow-lg shadow-brand-orange/25 text-base sm:text-lg"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - Modern Apartment Search Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center items-center w-full"
                    >
                        <div className="relative w-full max-w-[420px] h-[420px] perspective-1000">
                            {/* Ambient Background Glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-brand-orange/30 via-brand-pink/30 to-brand-cyan/30 blur-3xl rounded-full"
                            />

                            {/* Stacked Apartment Cards with 3D Effect */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Card Stack - All cities */}
                                {cityNames.map((city, index) => {
                                    const totalCards = cityNames.length;
                                    const centerIndex = Math.floor(totalCards / 2);

                                    // Calculate position relative to current active card
                                    let offset = index - currentIndex;

                                    // Wrap around for circular carousel
                                    if (offset > centerIndex) offset -= totalCards;
                                    if (offset < -centerIndex) offset += totalCards;

                                    // 3D transform calculations
                                    const rotateY = offset * 12; // Rotate each card
                                    const translateZ = -Math.abs(offset) * 50; // Push side cards back
                                    const translateX = offset * 85; // Spread horizontally
                                    const scale = 1 - Math.abs(offset) * 0.12; // Scale down side cards
                                    const opacity = 1 - Math.abs(offset) * 0.2; // Fade side cards

                                    return (
                                        <motion.div
                                            key={city}
                                            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
                                            animate={{
                                                opacity: opacity,
                                                scale: scale,
                                                rotateY: rotateY,
                                                translateX: translateX,
                                                translateZ: translateZ,
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                opacity: { duration: 0.5 },
                                                scale: { duration: 0.5 },
                                                rotateY: { duration: 0.5 },
                                                translateX: { duration: 0.5 },
                                                translateZ: { duration: 0.5 },
                                                y: {
                                                    duration: 3 + index * 0.3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.2
                                                }
                                            }}
                                            whileHover={{
                                                scale: scale * 1.05,
                                                translateZ: translateZ + 30,
                                                transition: { duration: 0.3 }
                                            }}
                                            className="absolute cursor-pointer"
                                            style={{
                                                transformStyle: 'preserve-3d',
                                                zIndex: totalCards - Math.abs(offset)
                                            }}
                                        >
                                            {/* Glassmorphic Card */}
                                            <div className="relative w-[220px] h-[290px] rounded-2xl overflow-hidden group border-[3px] border-brand-deep-blue shadow-xl shadow-brand-deep-blue/20">
                                                {/* Glass effect background */}
                                                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-2xl" />

                                                {/* Gradient overlay on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-brand-pink/10 to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Card Content */}
                                                <div className="relative h-full flex flex-col p-5">
                                                    {/* Image placeholder with gradient */}
                                                    <div className="relative w-full h-28 rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-brand-orange via-brand-pink to-brand-cyan">
                                                        {/* Animated map pin icon */}
                                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                                            <motion.svg
                                                                animate={{
                                                                    y: [0, -8, 0],
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="w-16 h-16 text-white"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                                <circle cx="12" cy="9" r="1.5" fill="white" opacity="0.9" />
                                                            </motion.svg>
                                                        </div>

                                                        {/* Shimmer effect */}
                                                        <motion.div
                                                            animate={{
                                                                x: ['-100%', '200%'],
                                                            }}
                                                            transition={{
                                                                duration: 3,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                repeatDelay: 1
                                                            }}
                                                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                                        />
                                                    </div>

                                                    {/* City Name */}
                                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:via-brand-pink group-hover:to-brand-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                                        {city}
                                                    </h3>

                                                    {/* Stats */}
                                                    <div className="flex items-center space-x-2 mb-3">
                                                        <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm text-gray-600">Houston Area</span>
                                                    </div>

                                                    {/* Features */}
                                                    <div className="space-y-2 mt-auto">
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="text-gray-600">Available Units</span>
                                                            <span className="font-semibold text-gray-800">
                                                                {city === 'Houston' ? '300+' : `${Math.floor(Math.random() * 100 + 20)}+`}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="text-gray-600">Avg. Price</span>
                                                            <span className="font-semibold text-gray-800">
                                                                ${city === 'Houston' ? '1488' :
                                                                    city === 'Cypress' ? '1148' :
                                                                        city === 'Sugarland' ? '1292' :
                                                                            city === 'Conroe' ? '981' :
                                                                                city === 'Montgomery' ? '954' :
                                                                                    city === 'Med Center' ? '1579' :
                                                                                        city === 'Downtown' ? '1501' :
                                                                                            Math.floor(Math.random() * 500 + 800)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Corner accent - deep blue */}
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-deep-blue/25 to-transparent rounded-bl-3xl" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Navigation Dots */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-50">
                                {cityNames.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.02 }}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                                            ? 'bg-gradient-to-r from-brand-orange to-brand-deep-blue w-6 h-2 shadow-sm shadow-brand-deep-blue/30'
                                            : 'bg-gray-400 w-2 h-2 hover:bg-brand-deep-blue/60'
                                            }`}
                                    />
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
