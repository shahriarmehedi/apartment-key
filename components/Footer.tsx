/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { KeyRound, MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react'

export const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gray-800 py-12 overflow-hidden text-white">
            {/* Subtle decorative elements */}
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-brand-orange/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-brand-cyan/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <img src="/logo.png" alt="Apartment Key Logo" className="h-14" />
                        </div>
                        <p className="text-sm text-gray-400">
                            Houston&apos;s Trusted Apartment Locators
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400">Serving Greater Houston</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                                <a href="mailto:admin@apartmentkey.com" className="text-gray-400 hover:text-brand-orange transition-colors">
                                    admin@apartmentkey.com
                                </a>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                                <a href="tel:8324238383" className="text-gray-400 hover:text-brand-orange transition-colors">
                                    832.423.8383
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="bg-brand-orange p-2 rounded-lg transition-all shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-brand-orange p-2 rounded-lg transition-all shadow-sm"
                                aria-label="TikTok"
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="bg-brand-orange p-2 rounded-lg transition-all shadow-sm"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 pt-6 text-center">
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Apartment Key. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
