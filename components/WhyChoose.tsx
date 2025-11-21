'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, Shield, Zap, Users } from 'lucide-react'
import { TextAnimate } from './ui/text-animate'

const features = [
    {
        icon: Check,
        title: '100% Free for Renters',
        description: 'No hidden fees. Ever.',
    },
    {
        icon: Heart,
        title: 'Real People, Real Help',
        description: "You'll talk to a human who listens.",
    },
    {
        icon: Shield,
        title: 'Verified Listings Only',
        description: 'No fake ads or old posts.',
    },
    {
        icon: Zap,
        title: 'Faster Results',
        description: 'Curated list that matches your lifestyle & budget.',
    },
    {
        icon: Users,
        title: 'Trusted Locators',
        description: '11+ Years Experience — Houston born and raised.',
    },
]

export const WhyChoose: React.FC = () => {
    return (
        <section id="why-choose" className="py-24 bg-white">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
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
                        Why Choose Apartment Key
                    </TextAnimate>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We&apos;re your personal Houston housing experts
                    </TextAnimate>
                </motion.div>                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-orange/50 transition-all hover:shadow-lg"
                        >
                            <div className="flex flex-col items-start space-y-3">
                                <div className="bg-gradient-to-br from-brand-orange/15 via-brand-pink/10 to-brand-cyan/15 p-2.5 rounded-lg">
                                    <feature.icon className="w-5 h-5 text-brand-orange" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your dream apartment is waiting — we&apos;ll help you find it before someone else does.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
