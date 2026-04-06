import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Zap, ChevronRight, Factory, ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

// Definimos un tipo para los colores permitidos
type ColorKey = 'blue' | 'emerald' | 'orange' | 'purple';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden selection:bg-blue-100">
      <div className="container mx-auto px-4">
        
        {/* --- SECCIÓN 1: EL HÉROE EDITORIAL --- */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 items-center mb-20 md:mb-32">
          <div className="lg:col-span-7 z-20 pt-10 lg:pt-0 lg:pr-20 motion-safe:animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-5 py-1.5 border-blue-100 text-blue-800 bg-blue-50/50 text-sm font-medium tracking-wide uppercase">
              Nuestra Esencia
            </Badge>
            
            <h2 className="text-6xl md:text-8xl xl:text-9xl font-extrabold text-slate-950 tracking-tighter leading-[0.85] mb-10">
              <span className="block">INGENIERÍA.</span>
              <span className="block text-blue-600 italic">POLÍMERO.</span>
              <span className="block">CAUCHO.</span>
            </h2>

            <div className="max-w-xl border-l-4 border-blue-600 pl-8 space-y-4">
              <p className="text-2xl text-slate-700 leading-snug font-medium">
                6 años redefiniendo la <span className="text-blue-700 font-semibold">velocidad de respuesta</span> en polímeros y cauchos técnicos.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Donde otros ven límites en los plazos, nosotros vemos una oportunidad para innovar. EMAPOL es sinónimo de eficiencia y compromiso inquebrantable.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-16 lg:mt-0 motion-safe:animate-fade-in">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full opacity-60 z-0" />
            
            <div className="relative h-[500px] md:h-[650px] rounded-l-3xl lg:rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] z-10 group">
              <Image 
                src="/images/unnamed.jpg" 
                alt="Planta de producción EMAPOL estilo Pixar"
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-w-7xl) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent lg:from-transparent z-15" />


            </div>
          </div>
        </div>

        {/* --- SECCIÓN 2: GRID DE VALORES --- */}
        <div className="mb-24 md:mb-36">
          <div className="flex items-center justify-between mb-16 border-b border-slate-100 pb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight">Nuestro ADN Competitivo</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12">
            <ImpactValueCard icon={Users} title="Satisfacción Total" desc="Superamos expectativas con rigor industrial." color="blue" />
            <ImpactValueCard icon={Award} title="Innovación Constante" desc="Tecnología de polímeros sostenibles." color="emerald" />
            <ImpactValueCard icon={Target} title="Crecimiento Estratégico" desc="Foco en minería e industria pesada." color="orange" />
            <ImpactValueCard icon={Zap} title="Talento Técnico" desc="Equipo altamente capacitado y motivado." color="purple" />
          </div>
        </div>

        {/* --- SECCIÓN 3: PILARES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 bg-slate-50 p-10 md:p-16 rounded-3xl border border-slate-100">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100/50 rounded-xl">
                <Target className="h-7 w-7 text-blue-700" />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 tracking-tight">Nuestra Misión</h4>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              Convertirnos en la mejor opción de solución para nuestros clientes, entregando un servicio excepcional, calidad inigualable y valor tangible en cada pieza.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100/50 rounded-xl">
                <ChevronRight className="h-7 w-7 text-blue-700" />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 tracking-tight">Nuestra Visión</h4>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              Ser la empresa líder, tanto a nivel nacional como internacional, en el diseño y fabricación de piezas técnicas de polímeros para los sectores de minería e industria general.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// COMPONENTE MEJORADO: Recibe el icono como componente (Icon) no como elemento (<Icon />)
interface ImpactValueProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: ColorKey;
}

function ImpactValueCard({ icon: Icon, title, desc, color }: ImpactValueProps) {
  const colorMap: Record<ColorKey, string> = {
    blue: "text-blue-600 bg-blue-50",
    emerald: "text-emerald-600 bg-emerald-50",
    orange: "text-orange-600 bg-orange-50",
    purple: "text-purple-600 bg-purple-50"
  }

  return (
    <div className="group space-y-6">
      <div className={`inline-flex p-5 rounded-2xl ${colorMap[color]} transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg`}>
        {/* Renderizamos el icono directamente con sus props */}
        <Icon className="h-8 w-8" strokeWidth={2.5} />
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-bold text-slate-950 tracking-tight">{title}</h4>
        <p className="text-slate-600 leading-relaxed text-base">
          {desc}
        </p>
      </div>
    </div>
  )
}