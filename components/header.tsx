"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/blog", label: "Blog" },
    { href: "/tienda", label: "Tienda" },
    { href: "/contacto", label: "Contacto" },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsMenuOpen(false)
  }

  // LÓGICA DE RESPONSIVIDAD Y COLOR
  // Si no es la página de inicio, o si el usuario bajó el scroll, usamos fondo oscuro sólido.
  const isHomePage = pathname === "/"
  const forceSolidBg = !isHomePage || scrolled

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-3 md:py-6">
      <div className="container mx-auto px-4 lg:px-12">
        <div className={`flex items-center justify-between px-5 md:px-8 py-2 md:py-3 rounded-full transition-all duration-500 border ${
          forceSolidBg 
            ? "bg-slate-950/95 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-black/20 backdrop-blur-md border-white/10"
        }`}>
          
          <button onClick={() => handleNavigation("/")} className="relative w-28 h-8 sm:w-36 sm:h-10 lg:w-44 lg:h-12 transition-transform active:scale-95">
            <Image src="/images/logo-emapolsac.png" alt="EMAPOL" fill className="object-contain" priority />
          </button>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 lg:px-5 py-2 rounded-full text-[12px] lg:text-[13px] font-bold uppercase tracking-widest transition-all ${
                  pathname === item.href 
                    ? "text-white bg-[#E62E2E] shadow-lg shadow-red-600/40" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón Móvil */}
          <button className="md:hidden p-2 text-white bg-white/10 rounded-full" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* --- RESPONSIVE DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[110] transition-opacity md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsMenuOpen(false)} 
      />
      
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-slate-900 z-[120] transition-transform duration-500 md:hidden border-l border-white/10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center mb-10">
            <div className="relative w-28 h-8">
              <Image src="/images/logo-emapolsac.png" alt="Logo" fill className="object-contain" />
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-white bg-white/5 p-2 rounded-full">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button 
                key={item.href} 
                onClick={() => handleNavigation(item.href)} 
                className={`text-left text-lg font-bold uppercase py-3 border-b border-white/5 transition-colors ${
                  pathname === item.href ? "text-[#E62E2E]" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-10 text-center">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Ingeniería de Precisión
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}