'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        title: '100% Free for Renters',
        description: 'No hidden fees. Ever.',
    },
    {
        title: "We're Ready to Help!",
        description: "Schedule a call or Text us",
    },
    {
        title: 'Real-time accurate availability',
        description: 'Current Pricing & Specials',
    },
    {
        title: 'Faster Results',
        description: 'Curated list that matches your lifestyle & budget.',
    }
]

export const NeighborhoodsNew: React.FC = () => {
    return (
        <section id="neighborhoods" className="py-24 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-50 via-white to-gray-50" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-brand-cyan/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-brand-orange/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 lg:pr-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Why Choose{' '}
                                <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent block mt-2">
                                    Apartment Key
                                </span>
                            </h2>
                        </motion.div>

                        <div className="space-y-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange via-brand-pink to-brand-cyan flex items-center justify-center shadow-md">
                                            <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:pl-8 mt-12 lg:mt-0"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                            <Image
                                src="/Apartment and Keys.jpeg"
                                alt="Houston neighborhoods"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
                            >
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-brand-coral" />
                                    <span className="font-bold text-gray-900 text-sm sm:text-base whitespace-nowrap">All Greater Houston Areas</span>
                                </div>
                            </motion.div>

                            {/* Bottom Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-black/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl "
                            >
                                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-center">
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent">11+</div>
                                        <div className="text-[10px] sm:text-xs text-gray-200 mt-0.5">Years Exp</div>
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent">100%</div>
                                        <div className="text-[10px] sm:text-xs text-gray-200 mt-0.5">Free</div>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
