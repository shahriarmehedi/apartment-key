'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BorderBeam } from './border-beam'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    withBeam?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', size = 'md', className, withBeam = true, ...props }, ref) => {
        const baseStyles = "rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"

        const variants = {
            primary: "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl",
            secondary: "bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 shadow-lg hover:shadow-xl",
            outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
        }

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg"
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
                {withBeam && <BorderBeam size={250} duration={12} delay={9} />}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'
