"use client"

import { useState, useEffect } from "react"
import { Shield, Wrench, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { 
      image: "/images/Imagen1.jpg", 
      title: "DISEÑO Y FABRICACION", 
      subtitle: "POLÍMEROS Y CAUCHO", 
      description: "Para la minería subterránea e industria en general." 
    },
    { 
      image: "/images/Imagen2.png", 
      title: "INGENIERÍA", 
      subtitle: "DISEÑO DE PIEZAS", 
      description: "Fabricación de repuestos con polímeros y caucho de alta resistencia a medida." 
    },
    { 
      image: "/images/Imagen3.png", 
      title: "CALIDAD", 
      subtitle: "STOCK INMEDIATO", 
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
    /* CAMBIO 1: En móvil usamos h-auto (el contenido dicta el alto) 
       y en desktop volvemos a h-screen. 
    */
    <section id="home" className="relative w-full h-auto md:h-screen min-h-[600px] overflow-hidden bg-[#000B29] pt-20 md:pt-0 pb-12 md:pb-0">
      
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 scale-100 relative md:absolute md:inset-0 z-10" 
              : "opacity-0 scale-105 absolute inset-0 z-0 pointer-events-none"
          }`}
        >
          {/* Contenedor principal */}
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
            
            {/* 1. FONDO PARA DESKTOP (Full Screen) */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                fill 
                className="object-cover object-center" 
                priority={index === 0} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000B29] via-[#000B29]/40 to-transparent"></div>
            </div>

            {/* 2. CONTENEDOR PARA MÓVIL (Compacto) */}
            <div className="md:hidden container mx-auto px-4 mt-4">
              <div className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  className="object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000B29] via-transparent to-transparent"></div>
              </div>
            </div>

            {/* 3. CONTENIDO TEXTUAL */}
            <div className="relative md:absolute md:inset-0 flex items-start md:items-center pt-8 md:pt-0">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className={`max-w-4xl transition-all duration-1000 delay-300 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>           
                  {/* Títulos más pequeños en móvil para que no ocupen toda la pantalla */}
                  <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase drop-shadow-2xl">
                    {slide.title}
                    <span className="text-[#E62E2E] block text-lg sm:text-3xl lg:text-5xl mt-2">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xs sm:text-lg lg:text-xl text-slate-200 mt-3 md:mt-4 mb-6 md:mb-8 max-w-lg font-medium leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 sm:gap-8 pt-4 md:pt-6 border-t border-white/20">
                    <FeatureItem icon={Shield} title="CALIDAD" />
                    <FeatureItem icon={Wrench} title="TÉCNICOS" />
                    <FeatureItem icon={Clock} title="INMEDIATO" className="hidden sm:flex" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* Navegación (Dots) - Ajustados para que no floten en el aire en móvil */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 md:w-10 bg-[#E62E2E]" : "w-1.5 md:w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, title, className = "" }: { icon: any, title: string, className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="bg-[#E62E2E]/20 p-1.5 md:p-2 rounded-lg border border-[#E62E2E]/30 backdrop-blur-sm">
        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#E62E2E]" />
      </div>
      <span className="text-white font-black text-[9px] md:text-xs tracking-widest uppercase">{title}</span>
    </div>
  )
}