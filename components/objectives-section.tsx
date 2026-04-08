"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ObjectivesSection() {
  // 1. Tipar el useState
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 2. Tipar el parámetro de la función
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const objectives = [
    {
      title: "MAYOR EFICIENCIA",
      desc: "Con modernos aparatos e instrumentos de medición y detección, se lleva a cabo rigurosas comprobaciones",
      layout: "lg:col-start-1 lg:row-start-1 lg:text-right lg:items-end lg:pr-16",
      line: "lg:right-[-10px] lg:top-1/2 lg:w-16 lg:h-[1px]"
    },
    {
      title: "PERSONAL CALIFICADO",
      desc: "Nuestro personal cuenta con la experiencia en fabricar todo tipo de repuesto en Polímeros y Caucho",
      layout: "lg:col-start-1 lg:row-start-2 lg:text-right lg:items-end lg:pr-16 lg:-mt-12",
      line: "lg:right-[-10px] lg:top-1/2 lg:w-16 lg:h-[1px]"
    },
    {
      title: "MAYOR RENDIMIENTO",
      desc: "Contamos con modernos equipos de fabricación y producción",
      layout: "lg:col-start-1 lg:row-start-3 lg:text-right lg:items-end lg:pr-16",
      line: "lg:right-[-10px] lg:top-[-10px] lg:w-16 lg:h-12 lg:border-t lg:border-r lg:rounded-tr-2xl"
    },
    {
      title: "MAYOR DURABILIDAD",
      desc: "Manejamos distintos tipos de dureza de acuerdo al trabajo y exigencias que requiere cada repuesto en mina.",
      layout: "lg:col-start-3 lg:row-start-1 lg:text-left lg:items-start lg:pl-16",
      line: "lg:left-[-10px] lg:top-1/2 lg:w-16 lg:h-[1px]"
    },
    {
      title: "MEJORES INSUMOS",
      desc: "Nuestros insumos son importados de EE.UU calificación Nro. 1 Ranking - Certificados",
      layout: "lg:col-start-3 lg:row-start-2 lg:text-left lg:items-start lg:pl-16 lg:-mt-12",
      line: "lg:left-[-10px] lg:top-1/2 lg:w-16 lg:h-[1px]"
    },
    {
      title: "SIN IMPERFECCIONES",
      desc: "Nuestros productos fabricados pasan por un exhaustivo control de calidad",
      layout: "lg:col-start-3 lg:row-start-3 lg:text-left lg:items-start lg:pl-16",
      line: "lg:left-[-10px] lg:top-[-10px] lg:w-16 lg:h-12 lg:border-t lg:border-l lg:rounded-tl-2xl"
    }
  ]

  const precioCompetitivo = {
    title: "PRECIOS COMPETITIVOS",
    desc: "Somos fabricantes directos, contamos con centros mecanizados -CNC de la linea ROMI, los cuales fabricamos nuestros propios moldes y eso hace que nuestros precios sean los mejores del mercado.",
    layout: "lg:col-start-2 lg:row-start-3 lg:text-center lg:items-center lg:max-w-md lg:mx-auto lg:pt-16",
    line: "lg:top-[-10px] lg:left-1/2 lg:w-[1px] lg:h-20 lg:-translate-x-1/2"
  }

  return (
    <section className="relative -mt-11 md:-mt-17 pt-12 md:pt-5 pb-12 bg-white text-slate-900 overflow-hidden font-sans">

      {/* --- FONDO LOGOS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <img src="/images/logo.png" className="absolute top-[-2%] left-[10%] w-48 rotate-[-12deg] blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[15%] right-[-5%] w-72 rotate-[25deg] blur-[2px]" alt="" />
        <img src="/images/logo.png" className="absolute top-[40%] left-[-10%] w-96 rotate-[15deg] opacity-40" alt="" />
        <img src="/images/logo.png" className="absolute top-[50%] right-[15%] w-32 rotate-[-45deg]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[5%] left-[5%] w-64 rotate-[10deg] blur-[1px]" alt="" />
        <img src="/images/logo.png" className="absolute bottom-[-2%] right-[20%] w-40 rotate-[-12deg]" alt="" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-9 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-red-600 block">
              Expertos en Polímeros y caucho
            </span>
            <div className="h-[1px] w-8 bg-red-600"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase italic text-slate-950">
            HABLEMOS DE <br /><span className="text-red-600 not-italic">VENTAJAS.</span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-center gap-6 lg:gap-x-12 lg:gap-y-12">

            {/* Bloque Izquierdo + Derecho (Unificados en el mapeo para el ejemplo) */}
            <div className="flex flex-col gap-4 lg:contents order-2 lg:order-none">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  className={`group relative flex flex-col p-4 lg:p-0 bg-slate-50 lg:bg-transparent rounded-2xl border border-slate-100 lg:border-none shadow-sm lg:shadow-none transition-all duration-300 ${obj.layout}`}
                >
                  {/* Título: En móvil actúa como botón de acordeón */}
                  <div
                    onClick={() => toggleAccordion(i)}
                    className="flex items-center justify-between cursor-pointer lg:cursor-default lg:block w-full"
                  >
                    <h3 className="text-lg lg:text-2xl font-black text-slate-950 tracking-tighter leading-none uppercase group-hover:text-red-600 transition-colors italic">
                      {obj.title}
                    </h3>
                    {/* Icono solo visible en móvil */}
                    <ChevronDown className={`h-5 w-5 text-red-600 transition-transform duration-300 lg:hidden ${openIndex === i ? "rotate-180" : ""}`} />
                  </div>

                  {/* Contenido Desglosable */}
                  <div className={`grid transition-all duration-300 ease-in-out lg:block ${openIndex === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 lg:opacity-100"}`}>
                    <div className="overflow-hidden">
                      <p className="text-slate-500 text-sm lg:text-[13px] leading-relaxed font-medium">
                        {obj.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden lg:block absolute bg-slate-100 group-hover:bg-red-500 transition-all duration-500 ${obj.line}`} />
                </div>
              ))}
            </div>

            {/* PIEZA CENTRAL */}
            <div className="relative group lg:col-start-2 lg:row-span-2 lg:self-center z-10 p-4 lg:p-0 order-1 lg:order-none">
              <div className="absolute inset-4 md:inset-10 bg-red-500/10 rounded-full blur-[60px] md:blur-[100px] group-hover:bg-red-500/20 transition-all duration-1000" />
              <div className="relative w-full aspect-square max-w-[280px] md:max-w-[460px] mx-auto bg-white rounded-[3rem] md:rounded-[5rem] shadow-2xl flex items-center justify-center rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 border border-slate-100 overflow-hidden">
                <img src="/images/Dowell1.jpg" alt="Emapol" className="w-full h-full object-contain p-6 md:p-12" />
              </div>
            </div>

            {/* --- PRECIOS COMPETITIVOS (Especial Abajo) --- */}
            <div className={`group relative flex flex-col p-8 bg-red-50 lg:bg-transparent rounded-3xl border border-red-100 lg:border-none order-4 ${precioCompetitivo.layout} mb-8 lg:mb-0`}>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-950 tracking-tighter leading-none uppercase italic group-hover:text-red-600 transition-colors">
                  {precioCompetitivo.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm lg:text-[13px] leading-relaxed font-medium">
                {precioCompetitivo.desc}
              </p>
              <div className={`hidden lg:block absolute bg-slate-100 group-hover:bg-red-500 transition-all duration-500 ${precioCompetitivo.line}`} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}