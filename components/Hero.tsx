'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'
import { AuroraText } from './ui/aurora-text'
import { IconCloud } from './ui/icon-cloud'

const apartmentImages = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=200&h=200&fit=crop',
]

export const Hero: React.FC = () => {
    const scrollToCTA = () => {
        const element = document.getElementById('cta')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-coral/10 to-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-8 text-sm text-gray-700 font-medium"
                        >
                            <span>✨</span>
                            <span>Houston&apos;s Most Trusted Apartment Locators</span>
                        </motion.div>

                        {/* Main Headline with Aurora Text */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl sm:text-6xl text-gray-700 lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
                        >
                            Find Your Perfect{' '}
                            <AuroraText
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                                colors={["#FF9E6D", "#22D3EE", "#FF9E6D", "#22D3EE"]}
                            >
                                Houston Apartment
                            </AuroraText>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed"
                        >
                            Fast, free, and stress-free apartment search. We handle everything from finding listings to scheduling tours.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12"
                        >
                            <Button
                                size="lg"
                                onClick={scrollToCTA}
                                className="group bg-gradient-to-r from-brand-coral to-brand-coral hover:from-brand-coral/90 hover:to-brand-coral/90 text-white shadow-lg shadow-brand-coral/25"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Content - IconCloud */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <IconCloud images={apartmentImages} />
                    </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-coral to-brand-cyan bg-clip-text text-transparent">11+</span>
                        <span className="text-gray-600">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-coral to-brand-cyan bg-clip-text text-transparent">100%</span>
                        <span className="text-gray-600">Free Service</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-coral to-brand-cyan bg-clip-text text-transparent">1000+</span>
                        <span className="text-gray-600">Happy Renters</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
