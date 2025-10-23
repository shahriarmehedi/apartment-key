'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ShineBorder } from './shine-border'

interface AnimatedCardProps {
    children: React.ReactNode
    className?: string
    delay?: number
    withShine?: boolean
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    className,
    delay = 0,
    withShine = false
}) => {
    if (withShine) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative"
            >
                <div className={cn("rounded-2xl bg-white p-6 shadow-lg relative overflow-hidden", className)}>
                    <ShineBorder
                        borderWidth={2}
                        duration={14}
                        shineColor={["#0ea5e9", "#d946ef", "#0ea5e9"]}
                    />
                    {children}
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={cn(
                "rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow",
                className
            )}
        >
            {children}
        </motion.div>
    )
}

export const GradientCard: React.FC<AnimatedCardProps> = ({
    children,
    className,
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "rounded-2xl bg-gradient-to-br from-primary-50 via-white to-accent-50 p-8 shadow-lg backdrop-blur-sm border border-gray-100",
                className
            )}
        >
            {children}
        </motion.div>
    )
}
