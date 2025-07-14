import { Header } from "@/components/header"
import { ShopSection } from "@/components/shop-section"
import { Footer } from "@/components/footer"
import { NavigationLoader } from "@/components/navigation-loader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationLoader />
      <Header />
      <main>
        <ShopSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
