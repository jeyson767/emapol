"use client"

import { Badge } from "@/components/ui/badge"
import { ChevronRight, ArrowUpRight } from "lucide-react"
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
    <section id="services" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER INDUSTRIAL --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 md:mb-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 px-4 py-1.5 border-red-200 text-red-600 bg-red-50 text-xs font-black uppercase tracking-[0.2em] rounded-sm">
              CAPACIDAD TÉCNICA
            </Badge>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] uppercase mb-8">
              NUESTROS <br />
              <span className="text-red-600 italic inline-block transform -skew-x-6">SERVICIOS.</span>
            </h2>
          </div>

          <div className="max-w-md pb-4">
            <p className="text-xl text-slate-600 leading-tight font-medium border-l-4 border-red-600 pl-6 uppercase">
              Seis años redefiniendo la <span className="text-slate-900 font-bold">resistencia industrial</span> en polímeros y caucho.
            </p>
          </div>
        </div>

        {/* --- GRID DE SERVICIOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative flex flex-col bg-white p-2 rounded-2xl border border-slate-200 hover:border-red-500 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(230,46,46,0.15)]">
              
              {/* Contenedor de Imagen */}
              <div className="relative h-72 w-full rounded-xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-red-900/40 transition-colors duration-500 z-10" />
                
                {/* Número de Servicio (Impacto Visual) */}
                <span className="absolute top-4 right-4 text-white/40 font-black text-4xl z-20 group-hover:text-white transition-colors">
                  {service.id}
                </span>

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Contenido de Texto */}
              <div className="px-4 pb-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-none uppercase mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                {/* Botón Call to Action */}
                <div className="flex items-center justify-between group/btn cursor-pointer">
                  <span className="text-slate-950 font-black text-xs tracking-widest uppercase group-hover/btn:text-red-600 transition-colors">
                    VER DETALLES
                  </span>
                  <div className="h-10 w-10 rounded-full bg-slate-100 group-hover:bg-red-600 flex items-center justify-center transition-colors">
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