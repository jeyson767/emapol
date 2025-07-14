import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { NavigationLoader } from "@/components/navigation-loader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationLoader />
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
