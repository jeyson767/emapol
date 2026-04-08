"use client"
import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const ImpactData = [
  {
    id: 1,
    icon: Users,
    title: "Satisfacción Total",
    desc: "Rigor industrial y compromiso inquebrantable en cada proyecto.",
    imageUrl: "/images/fabricacion.jpeEg",
    tag: "Calidad"
  },
  {
    id: 2,
    icon: Award,
    title: "Innovación Técnica",
    desc: "Desarrollo de polímeros de última generación para minería extrema.",
    imageUrl: "/images/fabricacion2.jpEg",
    tag: "I+D+i"
  },
  {
    id: 3,
    icon: Target,
    title: "Crecimiento Estratégico",
    desc: "Soluciones críticas para la industria pesada y minera nacional.",
    imageUrl: "/images/fabricacion3.jpEg",
    tag: "Foco"
  },
  {
    id: 4,
    icon: Zap,
    title: "Talento Técnico",
    desc: "Equipo altamente capacitado y motivado para retos complejos.",
    imageUrl: "/images/fabricacion4.jpE",
    tag: "Equipo"
  },
  {
    id: 5,
    icon: Zap,
    title: "Eficiencia Operativa",
    desc: "Procesos optimizados para garantizar tiempos de entrega récord.",
    imageUrl: "/images/fabricacion4.jpEg",
    tag: "Procesos"
  }
];

export function AboutSection() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = ImpactData.length;
  const anglePerSlide = 360 / totalSlides;

  const rotate = (direction: 'next' | 'prev') => {
    const newRotation = direction === 'next' ? rotation - anglePerSlide : rotation + anglePerSlide;
    setRotation(newRotation);

    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    } else {
      setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden selection:bg-red-100 font-sans">

      {/* --- MOSAICO DE FONDO ULTRA-DENSIFICADO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] md:opacity-[0.06]" aria-hidden="true">
        {/* Fila Superior */}
        <img src="/images/logo.png" className="absolute top-[2%] left-[5%] w-40 md:w-64 rotate-12 blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[8%] left-[45%] w-24 md:w-32 rotate-[-15deg] blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[5%] right-[8%] w-44 md:w-72 -rotate-12 blur-[1px]" alt="" />

        {/* Fila Media-Superior */}
        <img src="/images/logo.png" className="absolute top-[25%] left-[15%] w-28 md:w-40 rotate-[30deg]" alt="" />
        <img src="/images/logo.png" className="absolute top-[20%] right-[25%] w-32 md:w-48 -rotate-6 blur-[3px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[35%] left-[50%] -translate-x-1/2 w-20 md:w-28 rotate-12" alt="" />

        {/* Bloque Central (Detrás de la Rueda) */}
        <img src="/images/logo.png" className="absolute top-[50%] left-[-5%] w-60 md:w-96 -rotate-12 blur-[4px] opacity-60" alt="" />
        <img src="/images/logo.png" className="absolute top-[45%] right-[-10%] w-64 md:w-[450px] rotate-[25deg] blur-[5px] opacity-50" alt="" />
        <img src="/images/logo.png" className="absolute top-[55%] right-[35%] w-24 md:w-36 rotate-[-45deg] blur-[1px]" alt="" />

        {/* Fila Media-Inferior */}
        <img src="/images/logo.png" className="absolute bottom-[35%] left-[30%] w-28 md:w-44 rotate-[15deg] blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[40%] right-[15%] w-36 md:w-56 -rotate-12" alt="" />

        {/* Fila Inferior (Cerca de Misión/Visión) */}
        <img src="/images/logo.png" className="absolute bottom-[15%] left-[5%] w-48 md:w-80 rotate-[-20deg] blur-[3px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[20%] right-[40%] w-20 md:w-28 rotate-45" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[5%] right-[2%] w-56 md:w-80 rotate-12 blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[2%] left-[45%] w-32 md:w-48 rotate-[-10deg] blur-[2px]" alt="" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* --- SECCIÓN 1: HÉROE EDITORIAL --- */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center mb-20 md:mb-24">
          <div className="lg:col-span-7 z-20">
            <Badge className="mb-6 px-5 py-1.5 border-red-200 text-red-600 bg-red-50 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-sm shadow-sm">
              Nuestra Esencia
            </Badge>
            <h2 className="text-6xl md:text-8xl xl:text-9xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-10 uppercase">
              <span className="block">INGENIERÍA.</span>
              <span className="block text-red-600 italic transform -skew-x-6">POLÍMERO.</span>
              <span className="block">CAUCHO.</span>
            </h2>
            <div className="max-w-xl border-l-4 border-red-600 pl-6 md:pl-8 space-y-4">
              <p className="text-xl md:text-2xl text-slate-700 leading-snug font-medium uppercase italic">
                6 años redefiniendo la <span className="text-red-600 font-black">velocidad de respuesta</span> en polímeros técnicos.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-10 lg:mt-0 group">
            <div className="absolute -top-10 -right-10 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-[80px] md:blur-[100px] opacity-60 z-0" />
            <div className="relative h-[350px] md:h-[550px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 rotate-2 lg:rotate-3 group-hover:rotate-0 transition-all duration-700 border border-slate-100">
              <Image src="/images/unnamed.jpg" alt="Planta EMAPOL" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* --- SECCIÓN 2: LA RUEDA 3D AJUSTADA --- */}
        <div className="mt-32 md:mt-48 mb-24 md:mb-32 relative w-full flex flex-col items-center">
          {/* --- SECCIÓN 2: TÍTULO DISEÑO SERVICIOS (TAMAÑO 600 - CONTROLADO) --- */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-18 w-full">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic text-slate-950">
              NUESTRO
              <span className="text-red-600 not-italic"> EQUIPO</span>
            </h3>
          </div>

          {/* ESCENA 3D: Altura reducida para mejor encuadre */}
          <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center" style={{ perspective: '2500px' }}>

            {/* EJE ROTATORIO: Tamaño reducido (500px ancho desktop) */}
            <div
              className="relative w-[280px] h-[380px] md:w-[500px] md:h-[450px] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`
              }}
            >
              {ImpactData.map((obj, i) => {
                const Icon = obj.icon;
                const slideAngle = i * anglePerSlide;
                const isCurrent = activeIndex === i;

                return (
                  <div
                    key={obj.id}
                    className={`absolute inset-0 w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-slate-100 bg-slate-900 shadow-2xl transition-all duration-1000 ${!isCurrent ? "blur-[2px] opacity-20 scale-[0.8] brightness-50" : "blur-0 opacity-100 scale-100 shadow-red-600/10"
                      }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      // translateZ reducido para que la rueda no se salga de los bordes
                      transform: `rotateY(${slideAngle}deg) translateZ(calc(180px + 15vw))`,
                    }}
                  >
                    <Image src={obj.imageUrl} alt={obj.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />

                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12">
                      <div className="self-start px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-black text-white uppercase tracking-[0.2em]">
                        {obj.tag}
                      </div>

                      <div className="text-left text-white space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="p-3.5 bg-red-600 rounded-xl text-white shadow-xl w-fit">
                            <Icon size={24} strokeWidth={2.5} className="md:w-8 md:h-8" />
                          </div>
                          <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight">
                            {obj.title}
                          </h4>
                        </div>
                        <p className="text-slate-200 text-xs md:text-base font-medium uppercase leading-tight max-w-[90%] opacity-90">
                          {obj.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BOTONES DE NAVEGACIÓN */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-10 lg:px-20 z-50 pointer-events-none">
              <button
                onClick={() => rotate('prev')}
                className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-90 border border-slate-100 group"
              >
                <ChevronLeft size={28} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => rotate('next')}
                className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-90 border border-slate-100 group"
              >
                <ChevronRight size={28} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN 3: PILARES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-lg relative overflow-hidden">
          <div className="space-y-4 relative z-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="p-4 bg-red-600 rounded-2xl text-white">
                <Target size={28} />
              </div>
              <h4 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter">Misión</h4>
            </div>
            <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
              Convertirnos en la mejor opción de solución para nuestros clientes, entregando calidad inigualable en cada pieza técnica de polímero.
            </p>
          </div>
          <div className="space-y-4 relative z-10 text-center md:text-left border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="p-4 bg-slate-950 rounded-2xl text-white">
                <Users size={28} />
              </div>
              <h4 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter">Visión</h4>
            </div>
            <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
              Ser la empresa líder internacional en el diseño y fabricación de piezas técnicas de polímeros para la minería e industria general.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}