import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { NavigationLoader } from "@/components/navigation-loader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationLoader />
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
