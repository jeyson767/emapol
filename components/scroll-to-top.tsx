"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Usamos scrollY que es más moderno
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      // Cambiamos right-6 por right-2 para pegarlo al borde
      // Cambiamos bottom-20 por bottom-8 para dejarle el aire a la cotización arriba
      className="fixed bottom-8 right-2 z-40 bg-slate-950/10 hover:bg-slate-950 text-slate-400 hover:text-white border border-slate-200/50 backdrop-blur-md rounded-xl h-10 w-10 shadow-sm hover:shadow-2xl transition-all duration-500 group"
      size="icon"
    >
      <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
      
      {/* Detalle visual sutil: una barrita roja abajo del icono al hacer hover */}
      <span className="absolute bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all duration-300 rounded-full" />
    </Button>
  )
}