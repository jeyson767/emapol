import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ObjectivesSection } from "@/components/objectives-section" // Crea este archivo
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/loader"
import { NavigationLoader } from "@/components/navigation-loader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageLoader />
      <NavigationLoader />
      <Header />
      
      <main>
        {/* 1. IMPACTO VISUAL */}
        <HeroSection />

        {/* 4. SOLUCIONES TÉCNICAS */}
        <ServicesSection />

        {/* 5. PROYECCIÓN Y METAS */}
        <ObjectivesSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}