"use client"

import { useState, useEffect } from "react"
import { Shield, Wrench, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { 
      image: "/images/Slider2.png", 
      title: "MANTENIMIENTO", 
      subtitle: "SERVICIO TÉCNICO 24/7", 
      description: "Soporte especializado para evitar paradas críticas." 
    },
    { 
      image: "/images/Slider1.jpg", 
      title: "INGENIERÍA", 
      subtitle: "DISEÑO DE PIEZAS", 
      description: "Fabricación de repuestos con polímeros de alta resistencia." 
    },
    { 
      image: "/images/Slider3.png", 
      title: "CALIDAD", 
      subtitle: "STOCK ORIGINAL", 
      description: "Repuestos certificados con durabilidad extrema." 
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    // SECCIÓN FULL SCREEN: Ocupa todo el ancho y alto disponible
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-slate-950">
      
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
          }`}
        >
          {/* IMAGEN DE FONDO COMPLETA */}
          <Image 
            src={slide.image} 
            alt={slide.title} 
            fill 
            className="object-cover object-center" 
            priority={index === 0} 
          />

          {/* OVERLAY: Gradiente para proteger el texto sin tapar mucho la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/40 md:to-transparent"></div>

          {/* CONTENIDO DEL TEXTO */}
          <div className="absolute inset-0 flex items-center pt-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className={`max-w-4xl transition-all duration-1000 delay-300 ${
                index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}>           
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase drop-shadow-2xl">
                  {slide.title}
                  <span className="text-[#E62E2E] block text-xl sm:text-3xl lg:text-5xl mt-2 drop-shadow-none">{slide.subtitle}</span>
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-slate-200 mt-4 mb-8 max-w-lg font-medium leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-4 sm:gap-8 pt-6 border-t border-white/20">
                  <FeatureItem icon={Shield} title="CALIDAD" />
                  <FeatureItem icon={Wrench} title="TÉCNICOS" />
                  <FeatureItem icon={Clock} title="24/7" className="hidden sm:flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* DOTS DE NAVEGACIÓN (Ubicados abajo al centro) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-10 bg-[#E62E2E]" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* FLECHAS LATERALES (Solo Desktop) */}
      <div className="hidden lg:block">
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[#E62E2E] text-white transition-all backdrop-blur-md border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[#E62E2E] text-white transition-all backdrop-blur-md border border-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, title, className = "" }: { icon: any, title: string, className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="bg-[#E62E2E]/20 p-2 rounded-lg border border-[#E62E2E]/30 backdrop-blur-sm">
        <Icon className="h-4 w-4 text-[#E62E2E]" />
      </div>
      <span className="text-white font-black text-[10px] sm:text-xs tracking-widest uppercase">{title}</span>
    </div>
  )
}