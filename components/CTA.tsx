'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { KeyRound, ArrowRight } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

export const CTA: React.FC = () => {
    return (
        <section id="cta" className="py-32 bg-white relative overflow-hidden">
            {/* Minimal accent line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-coral to-brand-cyan rounded-b-full" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center mb-8"
                >
                    <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100">
                        <KeyRound className="w-12 h-12 text-brand-coral" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Ready to Find Your{' '}
                        <span className="bg-gradient-to-r from-brand-coral to-brand-cyan bg-clip-text text-transparent">
                            New Apartment?
                        </span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto space-y-3"
                >
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg sm:text-xl text-gray-600"
                    >
                        Stop scrolling endless listings.
                    </TextAnimate>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg sm:text-xl text-gray-600"
                    >
                        Start working with people who know Houston and care about finding your place.
                    </TextAnimate>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <Link href="/get-started">
                        <Button
                            className="bg-gradient-to-r from-brand-coral to-brand-cyan hover:from-brand-coral/90 hover:to-brand-cyan/90 text-white px-10 py-6 group text-lg font-semibold shadow-2xl shadow-brand-coral/20 rounded-2xl"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <p className="text-gray-500 text-sm">
                        Get matched with top apartments today
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
