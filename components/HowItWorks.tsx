'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { Search, ThumbsUp, Key, ArrowRight } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Tell Us What Youre Looking For',
        description: 'Fill out a quick form with your price range, move-in date, and preferred Greater Houston area.',
    },
    {
        number: '02',
        icon: ThumbsUp,
        title: 'We Do the Searching for You',
        description: 'Our licensed locators hand-pick the best apartments that fit your style.',
    },
    {
        number: '03',
        icon: Key,
        title: 'You Tour, Choose and Unlock!',
        description: 'We schedule tours and connect you with your top apartment matches.',
    },
]

export const HowItWorks: React.FC = () => {
    const scrollToCTA = () => {
        const element = document.getElementById('cta')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-gradient-to-l from-brand-cyan/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-gradient-to-r from-brand-orange/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-coral mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600">
                        Three simple steps to your next ... <span className="text-brand-orange">Apartment Key</span>
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative bg-gradient-to-br from-brand-orange/5 via-brand-pink/5 to-brand-cyan/5 rounded-3xl p-6 sm:p-8 h-full hover:shadow-2xl transition-all group overflow-hidden border-2 border-gray-200 hover:border-brand-orange"
                        >
                            <div className="relative flex flex-col items-center text-center space-y-4">
                                {/* Step Number & Icon */}
                                <div className="flex flex-col items-center space-y-3">
                                    <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                                        STEP {step.number}
                                    </span>
                                    <div className="relative p-5 rounded-2xl bg-gradient-to-br from-brand-orange/15 via-brand-pink/10 to-brand-cyan/15 group-hover:from-brand-orange group-hover:via-brand-pink group-hover:to-brand-cyan transition-all duration-300">
                                        <step.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" strokeWidth={2} />
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        href="/get-started"
                        className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-orange/90 hover:to-brand-orange/90 text-white px-8 py-4 group shadow-lg shadow-brand-orange/25"
                    >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
