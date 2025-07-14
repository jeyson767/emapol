import { Header } from "@/components/header"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { NavigationLoader } from "@/components/navigation-loader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationLoader />
      <Header />
      <main>
        <BlogSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
