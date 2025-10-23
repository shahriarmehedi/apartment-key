'use client'

import React from 'react'
import { KeyRound, MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react'

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="bg-gray-900 p-2 rounded-lg">
                                <KeyRound className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold text-gray-900">Apartment Key</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            Houston&apos;s Trusted Apartment Locators
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Us</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">Serving Greater Houston</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                                <a href="mailto:admin@apartmetnkey.com" className="text-gray-600 hover:text-brand-coral transition-colors">
                                    admin@apartmetnkey.com
                                </a>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                                <a href="tel:8324238383" className="text-gray-600 hover:text-brand-coral transition-colors">
                                    832.423.8383
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h3>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="bg-gradient-to-br from-brand-coral to-brand-cyan hover:from-brand-coral/90 hover:to-brand-cyan/90 p-2 rounded-lg transition-all shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-gradient-to-br from-brand-coral to-brand-cyan hover:from-brand-coral/90 hover:to-brand-cyan/90 p-2 rounded-lg transition-all shadow-sm"
                                aria-label="TikTok"
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="bg-gradient-to-br from-brand-coral to-brand-cyan hover:from-brand-coral/90 hover:to-brand-cyan/90 p-2 rounded-lg transition-all shadow-sm"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-6 text-center">
                    <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Apartment Key. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
