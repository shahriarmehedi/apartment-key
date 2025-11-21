/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { KeyRound, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <img src="/Final-07.png" alt="Apartment Key" className="h-16" />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">

                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className="text-gray-600 hover:text-brand-cyan transition-colors text-sm font-medium"
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollToSection('neighborhoods')}
                            className="text-gray-600 hover:text-brand-cyan transition-colors text-sm font-medium"
                        >
                            Neighborhoods
                        </button>
                        <button
                            onClick={() => scrollToSection('reviews')}
                            className="text-gray-600 hover:text-brand-cyan transition-colors text-sm font-medium"
                        >
                            Reviews
                        </button>
                        <Link
                            href="/get-started"
                            className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-orange/90 hover:to-brand-orange/90 text-white text-sm px-5 py-2 shadow-md shadow-brand-orange/20"
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden pb-4 border-t border-gray-200 pt-4"
                    >
                        <nav className="flex flex-col space-y-3">

                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-gray-600 hover:text-brand-cyan transition-colors text-sm font-medium text-left"
                            >
                                How It Works
                            </button>
                            <button
                                onClick={() => scrollToSection('neighborhoods')}
                                className="text-gray-600 hover:text-brand-cyan transition-colors text-sm font-medium text-left"
                            >
                                Neighborhoods
                            </button>
                            <button
                                onClick={() => scrollToSection('reviews')}
                                className="text-gray-600 hover:text-brand-cyan transition-colors text-sm font-medium text-left"
                            >
                                Reviews
                            </button>
                            <Link
                                href="/get-started"
                                className="w-full inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-orange/90 hover:to-brand-orange/90 text-white text-sm px-5 py-2 shadow-md shadow-brand-orange/20"
                            >
                                Get Started
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}
