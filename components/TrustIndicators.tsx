'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const TrustIndicators: React.FC = () => {
    return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Subtle decorative elements */}
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-brand-orange/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-brand-cyan/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 lg:gap-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent mb-2">
                            11+
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base font-medium">Years Experience</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent mb-2">
                            100%
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base font-medium">Free Service</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent mb-2">
                            1000+
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base font-medium">Happy Renters</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
