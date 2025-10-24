'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Marquee } from './ui/marquee'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { TextAnimate } from './ui/text-animate'

const reviews = [
    {
        text: "Apartment Key made my move so easy. I told them my budget and two days later I was signing a lease!",
        name: 'Sarah M.',
        username: '@sarahm',
        img: 'https://avatar.vercel.sh/sarahm',
    },
    {
        text: "They actually listened to what I wanted — no pushy sales tactics, just helpful people.",
        name: 'Michael R.',
        username: '@michaelr',
        img: 'https://avatar.vercel.sh/michaelr',
    },
    {
        text: "Fast, free, and friendly. I recommend Apartment Key to anyone moving to Houston.",
        name: 'Jessica L.',
        username: '@jessical',
        img: 'https://avatar.vercel.sh/jessical',
    },
    {
        text: "Found my dream apartment in Midtown within a week. The team was professional and efficient!",
        name: 'David T.',
        username: '@davidt',
        img: 'https://avatar.vercel.sh/davidt',
    },
    {
        text: "Best apartment locating service in Houston. They saved me so much time and stress!",
        name: 'Emily R.',
        username: '@emilyr',
        img: 'https://avatar.vercel.sh/emilyr',
    },
    {
        text: "Highly recommend! They knew exactly what I was looking for and delivered beyond expectations.",
        name: 'James K.',
        username: '@jamesk',
        img: 'https://avatar.vercel.sh/jamesk',
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
                "border-gray-200 bg-white hover:bg-gray-50/50 transition-colors"
            )}
        >
            <div className="flex flex-row items-center gap-3 mb-3">
                <Image className="rounded-full" width={40} height={40} alt="" src={img} unoptimized />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-gray-900">
                        {name}
                    </figcaption>
                    <p className="text-xs text-gray-500">{username}</p>
                </div>
            </div>
            <blockquote className="text-sm text-gray-600 leading-relaxed">
                {formattedText}
            </blockquote>
        </figure>
    )
}

export const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-24 relative overflow-hidden">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-brand-orange/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-brand-cyan/15 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-cyan bg-clip-text text-transparent pb-2">
                        What Renters Are Saying
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
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
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 to-transparent"></div>
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join the growing community of happy Houston residents who found their home through <span className="font-bold pl-1 text-brand-coral"> Apartment Key</span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
