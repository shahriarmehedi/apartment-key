import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WhyChoose } from '@/components/WhyChoose'
import { HowItWorks } from '@/components/HowItWorks'
import { Neighborhoods } from '@/components/Neighborhoods'
import { Reviews } from '@/components/Reviews'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { FreeService } from '@/components/FreeService'
import { NeighborhoodsNew } from '@/components/NeighborhoodsNew'
import { TrustIndicators } from '@/components/TrustIndicators'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="relative z-10">
                <Header />
                <Hero />
                <Reviews />
                <HowItWorks />
                <FreeService />
                <NeighborhoodsNew />
                <CTA />
                <TrustIndicators />
                <Footer />
            </div>
        </main>
    )
}
