'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Building2, Crown, GraduationCap, Sparkles } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

const neighborhoods = [
    {
        icon: TrendingUp,
        name: 'Midtown',
        description: 'Modern, walkable, nightlife vibes',
    },
    {
        icon: Sparkles,
        name: 'The Heights',
        description: 'Historic charm with trendy eats',
    },
    {
        icon: Building2,
        name: 'Downtown',
        description: 'High-rise energy and skyline views',
    },
    {
        icon: Crown,
        name: 'Galleria',
        description: 'Luxury meets convenience',
    },
    {
        icon: GraduationCap,
        name: 'Medical Center',
        description: 'Perfect for students & professionals',
    },
    {
        icon: Crown,
        name: 'River Oaks',
        description: 'Timeless luxury and elegance',
    },
]

export const Neighborhoods: React.FC = () => {
    return (
        <section id="neighborhoods" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Explore Houston&apos;s Top Neighborhoods
                    </TextAnimate>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Houston is full of incredible places to live — and we know them all
                    </TextAnimate>
                </motion.div>                {/* Neighborhoods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {neighborhoods.map((neighborhood, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
                        >
                            <div className="flex items-start space-x-3">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-orange via-brand-pink to-brand-cyan shadow-lg shadow-brand-orange/20 flex-shrink-0">
                                    <neighborhood.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                                        {neighborhood.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {neighborhood.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We&apos;ll help you find the perfect neighborhood that fits your lifestyle and budget
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
