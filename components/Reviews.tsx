'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Marquee } from './ui/marquee'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { TextAnimate } from './ui/text-animate'

const reviews = [
    {
        text: "Brandon was excellent! He was able to get me a great move-in special. Will use again!",
        name: 'Tammy N.',
        username: '@tammyn',
        img: 'https://avatar.vercel.sh/tammyn',
    },
    {
        text: "Found me a home walking distance from my Job. Great work!",
        name: 'Henry H.',
        username: '@henryh',
        img: 'https://avatar.vercel.sh/henryh',
    },
    {
        text: "Thank you to the awesome staff. This is my first apartment and I'm new to the city; I was referred by a friend and loved the easy and process.",
        name: 'Sophie K.',
        username: '@sophiek',
        img: 'https://avatar.vercel.sh/sophiek',
    },
    {
        text: "6 weeks Free, 22nd floor! Loving my new place!",
        name: 'Caleb A.',
        username: '@caleba',
        img: 'https://avatar.vercel.sh/caleba',
    },
    {
        text: "Shout out to Brandon, received a 2 month look and lease special, in a brand new unit!",
        name: 'Tyrous W.',
        username: '@tyrousw',
        img: 'https://avatar.vercel.sh/tyrousw',
    },
    {
        text: "Apartment Key made my move so easy. I told them my budget and two days later I was signing a lease!",
        name: 'Sarah M.',
        username: '@sarahm',
        img: 'https://avatar.vercel.sh/sarahm',
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    text,
    name,
    username,
    img,
}: {
    text: string
    name: string
    username: string
    img: string
}) => {
    // Replace "Apartment Key" with styled version
    const formattedText = text.split('Apartment Key').map((part, index, array) => {
        if (index < array.length - 1) {
            return (
                <React.Fragment key={index}>
                    {part}
                    <span className="font-bold text-brand-coral">Apartment Key</span>
                </React.Fragment>
            )
        }
        return part
    })

    return (
        <figure
            className={cn(
                "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all"
            )}
        >
            <div className="flex flex-row items-center gap-3 mb-3">
                <Image className="rounded-full" width={40} height={40} alt="" src={img} unoptimized />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs text-gray-400">{username}</p>
                </div>
            </div>
            <blockquote className="text-sm text-gray-300 leading-relaxed">
                {formattedText}
            </blockquote>
        </figure>
    )
}

export const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="pt-14 relative overflow-hidden bg-white">
            <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Dark background container with rounded corners and whitespace */}
                <div className="bg-[#0B143E] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                    {/* Decorative background elements inside dark container */}
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-brand-cyan/20 to-transparent rounded-full blur-3xl" />

                    <div className="relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent pb-2">
                                What Our Renters Are Saying
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg">
                                Real Reviews from Happy Apartment Shoppers
                            </p>
                        </motion.div>

                        {/* Reviews Marquee */}
                        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-12">
                            <Marquee pauseOnHover className="[--duration:30s]">
                                {firstRow.map((review, index) => (
                                    <ReviewCard key={index} {...review} />
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:30s]">
                                {secondRow.map((review, index) => (
                                    <ReviewCard key={index} {...review} />
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0B143E] to-transparent"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0B143E] to-transparent"></div>
                        </div>

                        {/* Closing Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                        >
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                Join the growing community of happy Houstonians who found their home through <span className="font-bold pl-1 text-brand-orange"> Apartment Key</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
