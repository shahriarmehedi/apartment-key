'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { AuroraText } from './ui/aurora-text'
import { IconCloud } from './ui/icon-cloud'

const apartmentImages: string[] = []

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

                    {/* Right Content - IconCloud */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center items-center w-full"
                    >
                        <div className="relative w-full flex justify-center max-w-[650px] lg:max-w-[700px]">
                            {/* Glowing Background Container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Main glow circle */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.35, 0.5, 0.35],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-orange/20 via-brand-pink/20 to-brand-cyan/20 blur-3xl"
                                />

                                {/* Secondary pulsing glow */}
                                <motion.div
                                    animate={{
                                        scale: [1.05, 1, 1.05],
                                        opacity: [0.2, 0.35, 0.2],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-brand-cyan/25 via-brand-pink/20 to-brand-orange/25 blur-2xl"
                                />

                                {/* Outer ring glow */}
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.02, 1],
                                    }}
                                    transition={{
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute w-[550px] h-[550px] rounded-full"
                                    style={{
                                        background: 'conic-gradient(from 0deg, rgba(255,140,66,0.2), rgba(255,182,217,0.2), rgba(0,212,255,0.2), rgba(255,140,66,0.2))',
                                        filter: 'blur(40px)'
                                    }}
                                />
                            </div>

                            {/* Floating Decorative Orbs */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange/60 to-brand-pink/60 blur-lg"
                            />

                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    x: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute bottom-12 left-12 w-20 h-20 rounded-full bg-gradient-to-br from-brand-cyan/60 to-brand-pink/60 blur-lg"
                            />

                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    x: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                                className="absolute top-1/3 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink/60 to-brand-cyan/60 blur-md"
                            />

                            {/* Decorative Corner Accents */}
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-0 right-0 w-32 h-32"
                            >
                                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-brand-cyan/60 to-transparent rounded-full" />
                                <div className="absolute top-0 right-0 w-1 h-24 bg-gradient-to-b from-brand-cyan/60 to-transparent rounded-full" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                                className="absolute bottom-0 left-0 w-32 h-32"
                            >
                                <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-brand-orange/60 to-transparent rounded-full" />
                                <div className="absolute bottom-0 left-0 w-1 h-24 bg-gradient-to-t from-brand-orange/60 to-transparent rounded-full" />
                            </motion.div>

                            {/* Subtle Grid Pattern Overlay */}
                            <div className="absolute inset-0 rounded-full" style={{
                                background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.05) 41%, transparent 41%), radial-gradient(circle, transparent 60%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.05) 61%, transparent 61%)',
                                backgroundSize: '100% 100%'
                            }} />

                            {/* IconCloud with enhanced container */}
                            <div className="relative z-10">
                                <IconCloud images={apartmentImages} textItems={cityNames} />
                            </div>

                            {/* Sparkle Effects */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute w-2 h-2 bg-white rounded-full"
                                    style={{
                                        top: `${15 + Math.sin(i * Math.PI / 4) * 35 + 35}%`,
                                        left: `${15 + Math.cos(i * Math.PI / 4) * 35 + 35}%`,
                                        boxShadow: '0 0 10px rgba(255,255,255,0.8)'
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
