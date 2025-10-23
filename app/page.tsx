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

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Reviews />
            <HowItWorks />
            <FreeService />
            <NeighborhoodsNew />
            <CTA />
            <Footer />
        </main>
    )
}
