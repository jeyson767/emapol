"use client"

import { useState, useEffect } from "react"
import { Shield, Wrench, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/slider1.jpg",
      title: "Repuestos Mineros e Industriales",
      subtitle: "Diseño y fabricación de piezas en polímero y caucho",
      description: "Soluciones integrales para la industria peruana con estándares internacionales.",
    },
    {
      image: "/images/slider2.jpg",
      title: "Mantenimiento Especializado",
      subtitle: "Servicios Técnicos Profesionales",
      description: "Mantenimiento preventivo y correctivo 24/7 para evitar paradas innecesarias.",
    },
    {
      image: "/images/slider3.png",
      title: "Repuestos Originales",
      subtitle: "Stock Completo Disponible",
      description: "Repuestos certificados con garantía total y durabilidad extrema.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative bg-slate-900">
      {/* Slider Container Responsive: 
          - h-[50vh] en móviles (más corto para que no tape todo)
          - h-[70vh] en tablets en adelante
          - min-h-px dinámico para evitar colapsos
      */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] min-h-[450px] sm:min-h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg?height=800&width=1200"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay: En móvil es más oscuro (negro total abajo) para asegurar legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/20 md:bg-gradient-to-r md:from-slate-900/90 md:via-slate-900/60 md:to-transparent"></div>

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`max-w-3xl transition-all duration-1000 delay-300 transform ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                  <span className="hidden sm:inline-flex items-center bg-blue-600/20 text-blue-400 border border-blue-600/30 px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-4 sm:mb-6">
                    Líderes en Soluciones Industriales
                  </span>
                  
                  {/* Títulos Responsive: text-3xl en móvil, text-6xl en desktop */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight sm:leading-none tracking-tighter">
                    {slide.title}
                    <span className="text-blue-500 block mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl">{slide.subtitle}</span>
                  </h1>
                  
                  <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-10 max-w-xl font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {slide.description}
                  </p>

                  {/* Features: Se ocultan en móviles muy pequeños o se apilan */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
                    <FeatureItem icon={Shield} title="Calidad" sub="Certificada" />
                    <FeatureItem icon={Wrench} title="Servicio" sub="Especializado" />
                    {/* El tercer item se oculta en móviles pequeños para no amontonar */}
                    <div className="hidden sm:block">
                      <FeatureItem icon={Clock} title="Atención" sub="24/7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Flechas: Ocultas en móvil (donde se usa el dedo), visibles desde 'md' */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-blue-600 text-white p-4 rounded-full backdrop-blur-md transition-all z-30 border border-white/10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-blue-600 text-white p-4 rounded-full backdrop-blur-md transition-all z-30 border border-white/10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots: Más pequeños en móvil */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide ? "w-8 sm:w-10 bg-blue-500" : "w-1.5 sm:w-2 bg-white/30"
              } h-1 sm:h-1.5 rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon: Icon, title, sub }: { icon: any, title: string, sub: string }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="bg-blue-600/20 p-1.5 sm:p-2 rounded-lg border border-blue-600/20">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
      </div>
      <div>
        <h3 className="text-white font-bold text-xs sm:text-sm leading-none">{title}</h3>
        <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{sub}</p>
      </div>
    </div>
  )
}