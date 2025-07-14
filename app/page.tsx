import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
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
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
