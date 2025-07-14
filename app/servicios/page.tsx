import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
