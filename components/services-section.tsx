"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "INGENIERÍA Y DISEÑO",
      description: "Desarrollo de repuestos técnicos en Polímeros y Caucho bajo especificaciones exactas.",
      image: "/images/fabricacion.jpeg",
    },
    {
      id: "02",
      title: "REVESTIMIENTO",
      description: "Aplicaciones de elastómeros garantizando resistencia extrema en condiciones críticas.",
      image: "/images/fabricacion3.jpg",
    },
    {
      id: "03",
      title: "MECANIZADO - CNC",
      description: "Centros CNC de alta precisión (Línea ROMI) para acabados técnicos de calidad industrial.",
      image: "/images/fabricacion4.jpg",
    },
    {
      id: "04",
      title: "FABRICACIÓN",
      description: "Producción de alta rotación para Jumbos de perforación minera e industria general.",
      image: "/images/fabricacion2.jpg",
    },
  ]

  return (
    // AJUSTE: pt-12 (reducido) y pb-12 (reducido) para minimizar el espacio en blanco con la sección de abajo
    <section id="services" className="pt-12 pb-12 md:pt-16 md:pb-20 bg-white relative overflow-hidden selection:bg-red-100">

      {/* --- FONDO MODERNO DISPERSO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" aria-hidden="true">
        {/* Usamos top negativo para conectar con lo que esté arriba */}
        <img src="/images/logo.png" className="absolute top-[-5%] left-[10%] w-48 rotate-[-12deg] blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[15%] right-[-5%] w-72 rotate-[25deg] blur-[2px]" alt="" />

        <img src="/images/logo.png" className="absolute top-[40%] left-[-10%] w-96 rotate-[15deg] opacity-40" alt="" />
        <img src="/images/logo.png" className="absolute top-[50%] right-[15%] w-32 rotate-[-45deg]" alt="" />

        {/* Usamos bottom negativo para que el logo se desvanezca hacia la sección de Ventajas */}
        <img src="/images/logo.png" className="absolute bottom-[5%] left-[5%] w-64 rotate-[10deg] blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[-5%] right-[20%] w-40 rotate-[-12deg]" alt="" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* --- HEADER CENTRADO --- */}
        {/* --- HEADER CENTRADO (IGUAL A VENTAJAS) --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 w-full">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic text-slate-950">
            NUESTROS <br />
            <span className="text-red-600 not-italic">
              SERVICIOS.
            </span>
          </h2>
        </div>

        {/* --- GRID DE SERVICIOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white/90 backdrop-blur-sm p-3 rounded-3xl border border-slate-200 hover:border-red-500 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(230,46,46,0.12)] hover:-translate-y-2"
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 shadow-inner">
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-red-600/10 transition-colors duration-500 z-10" />
                <span className="absolute top-5 left-5 text-white font-black text-4xl z-20 group-hover:scale-110 transition-transform duration-500 opacity-60">
                  {service.id}
                </span>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="px-4 pb-6 flex-grow flex flex-col">
                <h3 className="text-xl font-black text-slate-950 tracking-tighter leading-none uppercase mb-3 group-hover:text-red-600 transition-colors italic">
                  {service.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-6 flex-grow font-medium text-left">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 group/btn">
                  <span className="text-slate-900 font-black text-[10px] tracking-widest uppercase group-hover/btn:text-red-600 transition-colors">
                    SOLICITAR FICHA
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-slate-50 group-hover:bg-red-600 flex items-center justify-center transition-all duration-500 group-hover:rotate-12">
                    <ArrowUpRight className="h-5 w-5 text-slate-950 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}