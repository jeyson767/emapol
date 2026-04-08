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
    { href: "/tienda", label: "Repuestos" },
    { href: "/contacto", label: "Contacto" },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsMenuOpen(false)
  }

  const isHomePage = pathname === "/"
  const forceSolidBg = !isHomePage || scrolled

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-3 md:py-6">
      
      {/* AJUSTE DE ANCHO: 
          Cambiamos max-w-[75%] a max-w-[96%] para que sea más largo.
          En móvil usamos px-4 para que no toque los bordes del celular.
      */}
      <div className="max-w-[96%] mx-auto px-2 md:px-0">
        
        <div className={`flex items-center justify-between px-5 md:px-12 py-3 md:py-4 rounded-full transition-all duration-500 border w-full ${
          forceSolidBg 
            ? "bg-slate-950/95 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-black/20 backdrop-blur-md border-white/10"
        }`}>
          
          {/* LOGO: Ajustado para que en móvil no sea gigante pero en PC destaque */}
          <button onClick={() => handleNavigation("/")} className="relative w-32 h-8 sm:w-40 sm:h-10 lg:w-52 lg:h-14 transition-transform active:scale-95">
            <Image 
              src="/images/logo-emapolsac.png" 
              alt="EMAPOL" 
              fill 
              className="object-contain object-left" 
              priority 
            />
          </button>

          {/* NAV DESKTOP: Aumentamos space-x a 6 para llenar el nuevo largo de la barra */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 lg:px-6 py-2.5 rounded-full text-[12px] lg:text-[14px] font-black uppercase tracking-[0.15em] transition-all ${
                  pathname === item.href 
                    ? "text-white bg-[#E62E2E] shadow-xl shadow-red-600/40 scale-105" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* BOTÓN MÓVIL: Un poco más grande para facilitar el toque */}
          <button className="md:hidden p-2.5 text-white bg-white/10 rounded-full active:bg-white/20 transition-colors" onClick={() => setIsMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* --- RESPONSIVE DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[110] transition-opacity md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsMenuOpen(false)} 
      />
      
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-slate-950 z-[120] transition-transform duration-500 md:hidden border-l border-white/10 shadow-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center mb-10">
            <div className="relative w-32 h-9">
              <Image src="/images/logo-emapolsac.png" alt="Logo" fill className="object-contain" />
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-white bg-white/10 p-2 rounded-full">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <button 
                key={item.href} 
                onClick={() => handleNavigation(item.href)} 
                className={`text-left text-xl font-black uppercase py-3 border-b border-white/5 transition-colors ${
                  pathname === item.href ? "text-[#E62E2E]" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto text-center pb-4">
            <span className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase">Emapol S.A.C.</span>
          </div>
        </div>
      </div>
    </header>
  )
}