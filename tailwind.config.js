/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FF8C42',     // Bold orange from logo
                    cyan: '#00D4FF',       // Bright cyan/blue from logo
                    pink: '#FFB6D9',       // Soft pink accent from logo
                    coral: '#FF8C42',      // Alias for orange
                },
                primary: {
                    '50': '#f0f9ff',
                    '100': '#e0f2fe',
                    '200': '#bae6fd',
                    '300': '#7dd3fc',
                    '400': '#38bdf8',
                    '500': '#0ea5e9',
                    '600': '#0284c7',
                    '700': '#0369a1',
                    '800': '#075985',
                    '900': '#0c4a6e',
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                accent: {
                    '50': '#fdf4ff',
                    '100': '#fae8ff',
                    '200': '#f5d0fe',
                    '300': '#f0abfc',
                    '400': '#e879f9',
                    '500': '#d946ef',
                    '600': '#c026d3',
                    '700': '#a21caf',
                    '800': '#86198f',
                    '900': '#701a75',
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                shimmer: 'shimmer 2s linear infinite',
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
                aurora: 'aurora 8s ease-in-out infinite alternate',
                shine: 'shine var(--duration) infinite linear'
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    }
                },
                slideUp: {
                    '0%': {
                        transform: 'translateY(20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    }
                },
                slideDown: {
                    '0%': {
                        transform: 'translateY(-20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    }
                },
                scaleIn: {
                    '0%': {
                        transform: 'scale(0.9)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                },
                shimmer: {
                    '0%': {
                        backgroundPosition: '-1000px 0'
                    },
                    '100%': {
                        backgroundPosition: '1000px 0'
                    }
                },
                marquee: {
                    from: {
                        transform: 'translateX(0)'
                    },
                    to: {
                        transform: 'translateX(calc(-100% - var(--gap)))'
                    }
                },
                'marquee-vertical': {
                    from: {
                        transform: 'translateY(0)'
                    },
                    to: {
                        transform: 'translateY(calc(-100% - var(--gap)))'
                    }
                },
                aurora: {
                    '0%': {
                        backgroundPosition: '0% 50%',
                        transform: 'rotate(-5deg) scale(0.9)'
                    },
                    '25%': {
                        backgroundPosition: '50% 100%',
                        transform: 'rotate(5deg) scale(1.1)'
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                        transform: 'rotate(-3deg) scale(0.95)'
                    },
                    '75%': {
                        backgroundPosition: '50% 0%',
                        transform: 'rotate(3deg) scale(1.05)'
                    },
                    '100%': {
                        backgroundPosition: '0% 50%',
                        transform: 'rotate(-5deg) scale(0.9)'
                    }
                },
                shine: {
                    '0%': {
                        backgroundPosition: '0% 0%'
                    },
                    '50%': {
                        backgroundPosition: '100% 100%'
                    },
                    to: {
                        backgroundPosition: '0% 0%'
                    }
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}
