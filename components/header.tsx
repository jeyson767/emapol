"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setIsNavigating(true)
      setTimeout(() => {
        router.push(href)
        setIsMenuOpen(false)
      }, 100)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg z-50">   

        {/* Main navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              {/* Logo EMAPOL más grande y responsive */}
              <div className="relative w-32 h-12 sm:w-40 sm:h-16 drop-shadow-lg">
                <Image src="/images/logo-emapolsac.png" alt="Logo EMAPOL S.A.C" fill className="object-contain" />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/blog", label: "Blog" },
                { href: "/tienda", label: "Tienda" },
                { href: "/contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`hover:text-blue-300 transition-all duration-300 font-medium px-2 py-2 lg:px-3 rounded-lg hover:bg-blue-800/30 ${
                    pathname === item.href ? "text-blue-300 bg-blue-800/40" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-800/30 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-gradient-to-br from-blue-900/80 to-slate-900/80 backdrop-blur-lg shadow-xl z-[100] animate-fade-in"
                 style={{ borderTopLeftRadius: "1.5rem", borderBottomLeftRadius: "1.5rem" }}>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-blue-800/40 hover:bg-blue-700/60 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-7 w-7 text-white" />
              </button>
              <nav className="flex flex-col space-y-2 mt-20 px-6">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/nosotros", label: "Nosotros" },
                  { href: "/blog", label: "Blog" },
                  { href: "/tienda", label: "Tienda" },
                  { href: "/contacto", label: "Contacto" },
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`text-left text-lg font-semibold hover:text-blue-300 transition-all duration-300 px-3 py-3 rounded-lg hover:bg-blue-800/30 ${
                      pathname === item.href ? "text-blue-300 bg-blue-800/40" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Navigation Loader - Solo Logo */}
      {isNavigating && (
        <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-white z-[9999] flex items-center justify-center">
          <div className="animate-pulse">
            <Image
              src="/images/logo-emapolsac.png"
              alt="EMAPOL S.A.C"
              width={160}
              height={60}
              className="mx-auto drop-shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  )
}
