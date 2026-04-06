import { Target, TrendingUp, ShieldCheck, Globe } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      icon: Target,
      title: "Liderazgo Regional",
      desc: "Consolidarnos como el principal proveedor de piezas de caucho en el sur del país.",
      badge: "Meta 2026"
    },
    {
      icon: TrendingUp,
      title: "Innovación 4.0",
      desc: "Digitalizar el 100% de nuestros procesos de moldeado para precisión absoluta.",
      badge: "Tecnología"
    },
    {
      icon: ShieldCheck,
      title: "Residuo Cero",
      desc: "Implementar políticas de reciclaje de polímeros para una industria sostenible.",
      badge: "Ecológico"
    },
    {
      icon: Globe,
      title: "Expansión Global",
      desc: "Exportar ingeniería peruana de polímeros a mercados mineros internacionales.",
      badge: "Global"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-white selection:bg-blue-100">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER ESTILO APPLE --- */}
        <div className="max-w-4xl mb-20 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase italic mb-8">
            Nuestros <span className="text-blue-600 not-italic">Objetivos.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-tight">
            Construimos el estándar de resistencia para la industria del mañana, con precisión molecular y visión global.
          </p>
        </div>

        {/* --- GRID TIPO BENTO / APPLE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <div 
              key={i} 
              className="group relative bg-[#f5f5f7] p-10 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-slate-200 transition-all duration-500 ease-out flex flex-col justify-between min-h-[320px] overflow-hidden"
            >
              {/* Elemento decorativo sutil (Vidrio) */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div>
                <div className="mb-8 inline-flex p-3 rounded-2xl bg-white shadow-sm text-slate-900 group-hover:text-blue-600 transition-colors duration-500">
                  <obj.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {obj.badge}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">
                    {obj.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed font-light">
                    {obj.desc}
                  </p>
                </div>
              </div>

              {/* Indicador de progreso sutil al final */}
              <div className="mt-8 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-blue-600 transition-all duration-1000 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}