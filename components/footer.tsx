"use client"

import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 mb-16">
          
          {/* Branding - Ocupa más espacio en desktop */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="relative w-40 h-10 sm:w-48 sm:h-12">
              <Image src="/images/logo-emapolsac.png" alt="EMAPOL S.A.C" fill className="object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium uppercase tracking-tight">
              Ingeniería de precisión y fabricación industrial. Soluciones de alto rendimiento diseñadas para el sector minero.
            </p>
          </div>

          {/* Navegación - Ocupa menos espacio */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Navegación</h3>
            <nav className="flex flex-col space-y-3 md:space-y-4">
              {["Inicio", "Nosotros", "Blog", "Tienda", "Contacto"].map((item) => (
                <a key={item} href="#" className="text-sm font-bold text-slate-300 hover:text-[#E62E2E] transition-colors uppercase tracking-widest inline-block">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto - Ocupa el resto */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Contacto Técnico</h3>
            <div className="space-y-4">
              <ContactItem icon={Phone} text="+51 (01) 123 4567" />
              <ContactItem icon={Mail} text="ventas@emapol.com.pe" />
              <ContactItem icon={MapPin} text="Ate, Lima, Perú" />
            </div>
          </div>
        </div>

        {/* Barra Final Responsiva */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] text-center sm:text-left">
            © {currentYear} EMAPOL S.A.C — TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="hidden md:block h-[1px] w-20 bg-[#E62E2E]"></div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] text-center sm:text-right">
            INGENIERÍA PERUANA DE PRECISIÓN
          </p>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl group-hover:bg-[#E62E2E]/10 transition-colors shrink-0">
        <Icon size={18} className="text-[#E62E2E]" />
      </div>
      <span className="text-sm font-bold text-slate-200 truncate">{text}</span>
    </div>
  )
}