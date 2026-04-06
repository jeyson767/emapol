import Image from "next/image"

export function ClientsSection() {
  const clients = [
    { name: "Fresomac", logo: "/images/logo-fresomac-1.png" },
    { name: "Bullrock", logo: "/images/logo-bullrock.png" },
    { name: "Asega", logo: "/images/logo-asega-slogan.webp" },
    { name: "LM Logotipo", logo: "/images/cropped-LM_Logotipo.png" },
    { name: "Intech", logo: "/images/LOGO-INTECH_2022.png" },
    { name: "Drilling Corp", logo: "/images/Drilling.jpg" },
  ]

  return (
    <section className="py-12 md:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* Contenedor principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Título: Ajustado y más robusto */}
          <div className="w-full lg:max-w-[220px] text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none mb-4">
              NUESTROS <br className="hidden lg:block" /> CLIENTES
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto lg:mx-0"></div>
          </div>

          {/* Grid de Logos: Aumentado el tamaño de los contenedores */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
             {clients.map((client, i) => (
               <div key={i} className="flex justify-center items-center w-full group">
                 {/* Ajustes de Crecimiento:
                    - h-16 en móvil, h-24 en desktop (antes era h-10)
                    - max-w-[150px] en móvil, max-w-[200px] en desktop (antes era 140px)
                 */}
                 <div className="relative h-16 md:h-24 w-full max-w-[150px] md:max-w-[200px] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out">
                   <Image 
                     src={client.logo} 
                     alt={client.name}
                     fill
                     className="object-contain" // Clave para que no se deformen al crecer
                     sizes="(max-w-768px) 50vw, 20vw"
                   />
                 </div>
               </div>
             ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}