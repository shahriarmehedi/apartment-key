/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { KeyRound, ArrowRight } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

export const CTA: React.FC = () => {
    return (
        <section id="cta" className="py-32 relative overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-brand-cyan/8 to-brand-pink/8" />

            {/* Animated Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-orange/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-brand-cyan/30 to-transparent rounded-full blur-3xl"
            />

            {/* Minimal accent line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan rounded-b-full" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center mb-8"
                >
                    {/* <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100">
                        <KeyRound className="w-12 h-12 text-brand-coral" strokeWidth={1.5} />
                    </div> */}
                    <img src="/logo2.png" alt="Key Icon" className=" h-16" />
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
                        <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                            <br /> New Apartment?
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
                        Still scrolling endless listings???
                    </TextAnimate>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg sm:text-xl text-gray-600"
                    >
                        Start working with Local Experts!
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
                    {/* Use a styled Link (anchor) instead of nesting a <button> inside an <a> */}
                    <Link
                        href="/get-started"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-orange/90 hover:to-brand-orange/90 text-white px-10 py-6 group text-lg font-semibold shadow-2xl shadow-brand-orange/20 rounded-2xl"
                    >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <p className="text-gray-500 text-sm">
                        Get your list of apartment specials today!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
