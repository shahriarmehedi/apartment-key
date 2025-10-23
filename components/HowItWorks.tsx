'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Search, ThumbsUp, Key, ArrowRight } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Tell Us What Youre Looking For',
        description: 'Fill out a quick form with your price range, move-in date, and preferred Houston area.',
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
        title: 'You Tour, Choose & Move In',
        description: 'We schedule tours, connect you with leasing agents, and make it effortless.',
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
        <section id="how-it-works" className="py-24 bg-gray-50">
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
                        How It Works
                    </TextAnimate>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg text-gray-600"
                    >
                        Three simple steps to your perfect apartment
                    </TextAnimate>
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
                            className="relative bg-white rounded-3xl p-6 sm:p-8 h-full hover:shadow-2xl transition-all group overflow-hidden"
                        >
                            {/* Decorative border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-brand-coral to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>

                            <div className="relative flex flex-col items-center text-center space-y-4">
                                {/* Step Number & Icon */}
                                <div className="flex flex-col items-center space-y-3">
                                    <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-brand-coral to-brand-cyan bg-clip-text text-transparent">
                                        STEP {step.number}
                                    </span>
                                    <div className="relative p-5 rounded-2xl bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-brand-coral group-hover:to-brand-cyan transition-all duration-300">
                                        <step.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" strokeWidth={2} />
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
                    <Button onClick={scrollToCTA} className="bg-gradient-to-r from-brand-coral to-brand-coral hover:from-brand-coral/90 hover:to-brand-coral/90 text-white px-8 py-3 group shadow-lg shadow-brand-coral/25">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
