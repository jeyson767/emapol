"use client"

import Image from "next/image"
import Link from "next/link" // Importamos Link de Next.js
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" }, 
    { name: "Blog", href: "/blog" },
    { name: "Repuestos", href: "/tienda" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 mb-16">

          {/* Branding */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="relative w-40 h-10 sm:w-48 sm:h-12">
              <Image src="/images/logo-emapolsac.png" alt="EMAPOL S.A.C" fill className="object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium uppercase tracking-tight">
              SOMOS FABRICANTES DIRECTOS 
              <br /><br />
              Una empresa peruana, con 6 años en el mercado, dedicada al diseño, desarrollo y fabricación de todo tipo de piezas en Polímeros y Caucho. Atendemos a la Minería, Agro Industria e Industria en General.
            </p>
          </div>

          {/* Navegación - USANDO LINK DE NEXT.JS */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Navegación</h3>
            <nav className="flex flex-col space-y-3 md:space-y-4">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm font-bold text-slate-300 hover:text-[#E62E2E] transition-colors uppercase tracking-widest inline-block"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto Técnico */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Contacto Técnico</h3>
            <div className="space-y-4">
              <ContactItem icon={Phone} text="+51 952 474 660" href="tel:+51952474660" isExternal />
              <ContactItem icon={Phone} text="+51 986 363 135" href="tel:+51986363135" isExternal />
              <ContactItem icon={Mail} text="ventas@emapolsac.com" href="mailto:ventas@emapolsac.com" isExternal />
              <ContactItem icon={MapPin} text="Av. La Paz 102, Huachipa - Lurigancho" href="/#contacto" isExternal={false} />
            </div>
          </div>
        </div>

        {/* Barra Final */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] text-center sm:text-left">
            © {currentYear} EMAPOL S.A.C — TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="hidden md:block h-[1px] w-20 bg-[#E62E2E]"></div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] text-center sm:text-right">
            EMPRESA PERUANA POLIMEROS Y CAUCHO
          </p>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({ icon: Icon, text, href, isExternal }: { icon: any, text: string, href: string, isExternal: boolean }) {
  // Si es externo (tel, mail) usamos <a>, si es interno usamos <Link>
  const className = "flex items-center space-x-4 group cursor-pointer"
  const content = (
    <>
      <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl group-hover:bg-[#E62E2E]/10 transition-colors shrink-0">
        <Icon size={18} className="text-[#E62E2E]" />
      </div>
      <span className="text-sm font-bold text-slate-200 truncate group-hover:text-white transition-colors">
        {text}
      </span>
    </>
  )

  if (isExternal) {
    return <a href={href} className={className}>{content}</a>
  }

  return <Link href={href} className={className}>{content}</Link>
}