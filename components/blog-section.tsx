"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Zap } from "lucide-react"

export function BlogSection() {
  const events = [
    {
      id: 1,
      title: "PREMIACIÓN IBEROAMERICANO 2025",
      image: "/images/premio.jpg",
      date: "Mar 2025",
      description: "Orgullosos de ser reconocidos como una de las mejores empresas. ¡Gracias a todos!",
    },
  ]

  return (
    // He aumentado pt-52 para que baje más y no choque con el header
    <section id="blog" className="pt-52 pb-20 bg-white relative overflow-hidden min-h-screen flex flex-col justify-start">

      {/* --- MOSAICO DE MARCA ULTRA-DENSIFICADO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] md:opacity-[0.06]" aria-hidden="true">
        {/* Bloque Superior */}
        <img src="/images/logo.png" className="absolute top-[5%] left-[5%] w-32 md:w-64 rotate-12 blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[2%] right-[15%] w-24 md:w-40 -rotate-12 blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[15%] left-[45%] w-20 md:w-32 rotate-45 blur-[3px]" alt="" />

        {/* Bloque Medio (Detrás de las Cards) */}
        <img src="/images/logo.png" className="absolute top-[40%] left-[-5%] w-48 md:w-80 -rotate-12 blur-[4px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[35%] right-[-8%] w-56 md:w-96 rotate-[25deg] blur-[5px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[50%] left-[50%] -translate-x-1/2 w-24 md:w-36 rotate-12 blur-[1px]" alt="" />

        {/* Bloque Inferior */}
        <img src="/images/logo.png" className="absolute bottom-[25%] left-[10%] w-40 md:w-60 rotate-[-20deg] blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[30%] right-[20%] w-32 md:w-48 rotate-[35deg] blur-[3px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[5%] left-[40%] w-28 md:w-44 -rotate-12 blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[2%] right-[5%] w-44 md:w-72 rotate-12 blur-[2px]" alt="" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* --- HEADER ALINEADO AL MEDIO --- */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic text-slate-950 mb-8">
            EMAPOL <br />
            <span className="text-red-600 not-italic">NOTICIAS.</span>
          </h2>
          <div className="w-24 h-2 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* --- GRID DE CARDS RECUESTADO A LA IZQUIERDA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="group relative border-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* ALTURA DE IMAGEN AJUSTADA A H-64 PARA QUE EL CARD SEA MÁS GRANDE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <div className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </div>
                </div>
              </div>

              <CardHeader className="pt-6 pb-2 px-6">
                <div className="text-red-600 font-black text-[9px] uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                  <Zap className="h-3 w-3 fill-red-600" /> EVENTO {index + 1}
                </div>
                <CardTitle className="text-xl font-black text-slate-950 uppercase italic leading-tight group-hover:text-red-600 transition-colors duration-300">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-8">
                <p className="text-slate-600 font-medium text-xs leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-1.5 h-0 bg-red-600 transition-all duration-500 group-hover:h-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}