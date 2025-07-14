"use client"

import { useState, useEffect } from "react"
import { Shield, Wrench, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/slider1.jpg",
      title: "Repuestos Mineros e industriales",
      subtitle: "Diseño y fabricacion de piezas en polimero y caucho",
      description: "Soluciones integrales para la industria peruana",
    },
    {
      image: "/images/slider2.jpg",
      title: "Mantenimiento Especializado",
      subtitle: "Servicios Técnicos Profesionales",
      description: "Mantenimiento preventivo y correctivo 24/7",
    },
    {
      image: "/images/slider3.png",
      title: "Repuestos Originales",
      subtitle: "Stock Completo Disponible",
      description: "Repuestos certificados con garantía",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Slider Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg?height=800&width=1200"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4">
                <div className="mb-12">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Líderes en Soluciones Industriales
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                    <span className="text-blue-400 block">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">{slide.description}</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Calidad Garantizada</h3>
                      <p className="text-gray-300 text-sm">Repuestos certificados</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Servicios de calidad</h3>
                      <p className="text-gray-300 text-sm">Colaboradores especializados</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Respuesta Rápida</h3>
                      <p className="text-gray-300 text-sm">Atención 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-blue-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
