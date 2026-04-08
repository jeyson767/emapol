"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Navigation, Send, Zap, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [sending, setSending] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendToGmail = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      alert("Por favor completa los campos obligatorios")
      return
    }
    setSending(true)
    const subject = encodeURIComponent("Solicitud de Información - EMAPOL S.A.C")
    const emailBody = `Nombre: ${formData.fullName}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@emapolsac.com&su=${subject}&body=${encodeURIComponent(emailBody)}`
    window.open(gmailUrl, "_blank")
    setSending(false)
  }

  return (
    <section className="relative bg-white pt-44 pb-32 mb-20 overflow-hidden">

      {/* --- MOSAICO DE FONDO --- */}
      {/* --- MOSAICO DE FONDO REFORZADO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] md:opacity-[0.05]" aria-hidden="true">
        {/* Esquina superior izquierda */}
        <img src="/images/logo.png" className="absolute top-[5%] left-[5%] w-32 md:w-64 rotate-12 blur-[1px]" alt="" />

        {/* Centro derecha */}
        <img src="/images/logo.png" className="absolute top-[35%] right-[8%] w-40 md:w-80 -rotate-12 blur-[2px]" alt="" />

        {/* Esquina inferior izquierda */}
        <img src="/images/logo.png" className="absolute bottom-[8%] left-[12%] w-36 md:w-72 rotate-[35deg] blur-[1px]" alt="" />

        {/* Centro izquierda (Nuevo) */}
        <img src="/images/logo.png" className="absolute top-[20%] left-[20%] w-24 md:w-48 -rotate-45 blur-[3px] opacity-50" alt="" />

        {/* Superior derecha (Nuevo) */}
        <img src="/images/logo.png" className="absolute top-[10%] right-[25%] w-28 md:w-56 rotate-[15deg] blur-[2px] opacity-40" alt="" />

        {/* Inferior derecha (Nuevo) */}
        <img src="/images/logo.png" className="absolute bottom-[15%] right-[20%] w-32 md:w-64 -rotate-[20deg] blur-[1.5px]" alt="" />

        {/* Centro abajo (Nuevo) */}
        <img src="/images/logo.png" className="absolute bottom-[5%] left-[45%] w-24 md:w-52 rotate-90 blur-[4px] opacity-30" alt="" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
            <Zap className="h-3 w-3 text-red-600 fill-red-600" />
            <span className="text-[9px] font-black uppercase tracking-widest text-red-600">Soporte Técnico</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">
            ¿LISTO PARA <span className="text-red-600">CONECTAR?</span>
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-3">Respuesta técnica inmediata para sus proyectos industriales.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LADO IZQUIERDO: Info de contacto */}
          <div className="lg:col-span-4 space-y-3">

            {/* 1. PLANTA */}
            <div className="flex items-center p-3 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm">
              <div className="bg-red-50 p-3 rounded-xl mr-4">
                <MapPin className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Planta</h4>
                <p className="text-slate-900 font-bold text-xs leading-tight">Av. La Paz Mz L Lote 30 Huachipa - La Capitana</p>
              </div>
            </div>

            {/* 2. LÍNEAS (CON BOTONES DE WHATSAPP) */}
            <div className="flex items-center p-3 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm">
              <div className="bg-green-50 p-3 rounded-xl mr-4">
                <MessageCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-2">Chatea con nosotros</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://wa.me/51952474660?text=Hola%20EMAPOL,%20solicito%20información.", "_blank")}
                    className="h-7 px-2.5 text-[10px] font-bold border-green-200 hover:bg-green-600 hover:text-white transition-all rounded-lg flex items-center gap-1.5"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    VENTAS 1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://wa.me/51932283242?text=Hola%20EMAPOL,%20solicito%20información.", "_blank")}
                    className="h-7 px-2.5 text-[10px] font-bold border-green-200 hover:bg-green-600 hover:text-white transition-all rounded-lg flex items-center gap-1.5"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    VENTAS 2
                  </Button>
                </div>
              </div>
            </div>

            {/* 3. EMAIL */}
            <div className="flex items-center p-3 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm">
              <div className="bg-red-50 p-3 rounded-xl mr-4">
                <Mail className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Email</h4>
                <p className="text-slate-900 font-bold text-xs leading-tight">ventas@emapolsac.com</p>
              </div>
            </div>

            {/* 4. HORARIO */}
            <div className="flex items-center p-3 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm">
              <div className="bg-slate-100 p-3 rounded-xl mr-4">
                <Clock className="h-4 w-4 text-slate-950" />
              </div>
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Horario</h4>
                <p className="text-slate-900 font-bold text-xs leading-tight">Lun-Vie: 8AM-6PM / Sáb: 9AM-12PM</p>
              </div>
            </div>

            {/* Ubicación técnica con MARCADOR ROJO OBLIGATORIO */}
            <div className="bg-slate-950 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group mt-4">
              <div className="w-full h-40 bg-slate-900 relative">
                <iframe
                  src="https://maps.google.com/maps?q=-12.019694,-76.919944&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:filter-none transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-white uppercase italic tracking-tighter">
                    UBICACIÓN <span className="text-red-600">ESTRATÉGICA</span>
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                    Av. La Paz 102, Huachipa
                  </p>
                </div>
                <Button
                  onClick={() => window.open("https://maps.app.goo.gl/ds4iPu5XRM5Hrk8B8", "_blank")}
                  className="h-10 w-10 bg-red-600 hover:bg-white hover:text-red-600 rounded-xl p-0 transition-all shadow-lg"
                >
                  <Navigation className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Formulario */}
          <div className="lg:col-span-8 lg:mt-12">
            <form
              onSubmit={e => { e.preventDefault(); sendToGmail(); }}
              className="bg-slate-50/50 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200 shadow-inner space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-500 uppercase ml-2 tracking-widest">Nombre Completo *</label>
                  <Input name="fullName" placeholder="Nombre" value={formData.fullName} onChange={handleInputChange} required className="bg-white border-none h-12 rounded-xl px-4 text-xs font-bold shadow-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-500 uppercase ml-2 tracking-widest">Empresa</label>
                  <Input name="company" placeholder="Empresa" value={formData.company} onChange={handleInputChange} className="bg-white border-none h-12 rounded-xl px-4 text-xs font-bold shadow-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-500 uppercase ml-2 tracking-widest">Email *</label>
                  <Input name="email" type="email" placeholder="CORREO@EMPRESA.COM" value={formData.email} onChange={handleInputChange} required className="bg-white border-none h-12 rounded-xl px-4 text-xs font-bold shadow-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-500 uppercase ml-2 tracking-widest">Teléfono *</label>
                  <Input name="phone" placeholder="+51 9XX XXX XXX" value={formData.phone} onChange={handleInputChange} required className="bg-white border-none h-12 rounded-xl px-4 text-xs font-bold shadow-sm" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase ml-2 tracking-widest">Mensaje *</label>
                <Textarea name="message" placeholder="DETALLES TÉCNICOS..." rows={4} value={formData.message} onChange={handleInputChange} required className="bg-white border-none rounded-xl p-4 text-xs font-bold shadow-sm resize-none" />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-red-600 hover:bg-slate-950 text-white font-black text-[11px] tracking-[0.2em] h-14 rounded-xl transition-all shadow-lg"
              >
                {sending ? "ENVIANDO..." : "ENVIAR SOLICITUD A GMAIL"} <Send className="ml-3 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}