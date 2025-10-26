'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, Home } from 'lucide-react'
import Image from 'next/image'

export const FreeService: React.FC = () => {
    return (
        <section id="free-service" className="py-24 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white" />

            {/* Decorative gradient orbs */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange/15 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-brand-cyan/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <Image
                                src="/Orange Pillow Sofa.jpeg"
                                alt="Happy renters in their new apartment"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
                            >
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl sm:text-2xl">💰</span>
                                    <span className="font-bold text-gray-900 text-sm sm:text-base">$0 Cost to Renters</span>
                                </div>
                            </motion.div>

                            {/* Bottom Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-brand-orange rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl"
                            >
                                <span className="font-bold text-white text-base sm:text-lg">Always Free!</span>
                            </motion.div>

                            {/* Decorative Dots */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 grid grid-cols-6 gap-2 opacity-20">
                                {[...Array(36)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-brand-coral"></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 lg:pl-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Save Time.{' '}
                                <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                                    Save Money.
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-4 text-gray-600"
                        >
                            <p className="text-base sm:text-lg leading-relaxed">
                                <span className="font-semibold text-gray-700">Why pay for apartment hunting when you can get expert help for <span className='text-brand-orange'>FREE?</span></span>
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Property managers pay us when you lease through Apartment Key... meaning our professional Real Estate service costs you nothing.
                            </p>
                        </motion.div>

                        <div className="space-y-4 pt-4">
                            {/* Item 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start space-x-3 cursor-pointer"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange/15 via-brand-pink/10 to-brand-cyan/15 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-brand-orange" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p className="text-gray-900 font-medium flex-1 leading-relaxed">
                                    Get your <span className='text-brand-orange'>FREE</span> customized apartment list
                                </p>
                            </motion.div>

                            {/* Item 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.45 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start space-x-3 cursor-pointer"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange/15 via-brand-pink/10 to-brand-cyan/15 flex items-center justify-center">
                                        <Home className="w-5 h-5 text-brand-orange" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p className="text-gray-900 font-medium flex-1 leading-relaxed">
                                    Property owners fill their vacancies with your approved application
                                </p>
                            </motion.div>

                            {/* Item 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start space-x-3 cursor-pointer"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange/15 via-brand-pink/10 to-brand-cyan/15 flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-brand-orange" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p className="text-gray-900 font-medium flex-1 leading-relaxed">
                                    We receive commission from properties for successful apartment rentals!
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
