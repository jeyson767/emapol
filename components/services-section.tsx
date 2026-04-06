import { Badge } from "@/components/ui/badge"
import Image from "next/image" // Vital para calidad y rendimiento

export function ServicesSection() {
  const services = [
    {
      title: "INGENIERÍA Y DISEÑO",
      description:
        "Especialistas en desarrollo de repuestos técnicos en Polímeros y Caucho, bajo especificaciones exactas del cliente.",
      image: "/images/fabricacion.jpeg", // Tus fotos Pixar quedarían increíbles aquí
    },
    {
      title: "REVESTIMIENTO",
      description:
        "Aplicaciones de elastómeros a cualquier espesor y forma, garantizando resistencia extrema en condiciones críticas.",
      image: "/images/fabricacion3.jpg",
    },
    {
      title: "MECANIZADO - CNC",
      description:
        "Centros CNC de alta precisión (Línea ROMI) y Maestranza para acabados técnicos de calidad industrial.",
      image: "/images/fabricacion4.jpg",
    },
    {
      title: "FABRICACIÓN",
      description:
        "Producción de repuestos de alta rotación para Jumbos de perforación minera e industria en general.",
      image: "/images/fabricacion2.jpg",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white overflow-hidden selection:bg-blue-100">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER ESTILO APPLE --- */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-100 text-blue-800 bg-blue-50/50 text-xs font-semibold uppercase tracking-widest rounded-full">
            CAPACIDAD TÉCNICA
          </Badge>
          
          {/* Título Monumental */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic mb-8">
            Soluciones <span className="text-blue-600 not-italic">de Ingeniería.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-700 leading-tight font-medium max-w-2xl mx-auto">
            Seis años redefiniendo la <span className="text-blue-700 font-semibold">resistencia</span> en polímeros y caucho para los desafíos más extremos.
          </p>
        </div>

        {/* --- GRID DE SERVICIOS PREMIUM --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* Contenedor de Imagen con Zoom Suave */}
              <div className="relative h-64 md:h-72 w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] mb-10 transition-transform duration-1000 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
              </div>

              {/* Contenido de Texto */}
              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-none uppercase">
                  {service.title}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Botón sutil 'Saber Más' (Conceptual) */}
                <div className="pt-4 flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:text-blue-600 cursor-pointer">
                  <span>Saber más</span>
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Icono necesario
import { ChevronRight } from "lucide-react"