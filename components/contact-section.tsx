"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [sending, setSending] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    })
  }

  const validateForm = () => {
    return (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.message.trim()
    )
  }

  const sendToGmail = () => {
    if (!validateForm()) {
      alert("Por favor completa todos los campos obligatorios (Nombre, Email, Teléfono y Mensaje)")
      return
    }
    setSending(true)
    const subject = encodeURIComponent("Solicitud de Información - EMAPOL S.A.C")
    const emailBody = `Estimados,

Solicito más información sobre sus servicios de polímeros y caucho.

DATOS DEL SOLICITANTE:
- Nombre completo: ${formData.fullName}
- Empresa: ${formData.company || "No especificado"}
- Email: ${formData.email}
- Teléfono: ${formData.phone}
- Servicio de interés: ${formData.service || "No especificado"}

MENSAJE:
${formData.message}

Quedo atento a su respuesta.

Saludos cordiales,
${formData.fullName}`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ventas@emapolsac.com&su=${subject}&body=${encodeURIComponent(emailBody)}`
    window.open(gmailUrl, "_blank")
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setSending(false)
    alert("Solicitud enviada. Se abrirá Gmail para completar el envío.")
  }

  const sendByEmail = () => {
    if (!validateForm()) {
      alert("Por favor completa todos los campos obligatorios (Nombre, Email, Teléfono y Mensaje)")
      return
    }
    setSending(true)
    const subject = "Solicitud de Información - EMAPOL S.A.C"
    const emailBody = `Estimados,

Solicito más información sobre sus servicios de polímeros y caucho.

DATOS DEL SOLICITANTE:
- Nombre completo: ${formData.fullName}
- Empresa: ${formData.company || "No especificado"}
- Email: ${formData.email}
- Teléfono: ${formData.phone}
- Servicio de interés: ${formData.service || "No especificado"}

MENSAJE:
${formData.message}

Quedo atento a su respuesta.

Saludos cordiales,
${formData.fullName}`

    const mailtoUrl = `mailto:ventas@emapolsac.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoUrl
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setSending(false)
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contacto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            ¿Necesita más información?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarle con sus proyectos de polímeros y caucho.
            <br />
            Contáctenos y reciba una respuesta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-6">
            {/* Dirección */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Dirección</h3>
                <p className="text-gray-600">Jr. José de la Mar Mza. H Lote. 3-3a</p>
                <p className="text-gray-600">Sec. Rústico, Lurigancho - Chosica</p>
                <p className="text-gray-600">Lima, Perú</p>
                <p className="text-xs text-gray-500 mt-1">(Altura de la Empresa Hyundai)</p>
              </div>
            </div>
            {/* Teléfono */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Teléfono</h3>
                <p className="text-gray-600">+51 952 474 660</p>
                <p className="text-gray-600">+51 986 363 135</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-gray-600">emapol@emapolsac.com</p>
                <p className="text-gray-600">ventas@emapolsac.com</p>
              </div>
            </div>
            {/* Horarios */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border">
              <div className="bg-purple-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Horarios</h3>
                <p className="text-gray-600">Lun - Vie: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sáb: 10:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border"
            onSubmit={e => {
              e.preventDefault()
              sendToGmail()
            }}
            autoComplete="off"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitar más información</h3>
            <p className="text-gray-600 mb-6">
              Complete el formulario y nos pondremos en contacto con usted en menos de 24 horas.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="fullName"
                    placeholder="Su nombre completo"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <Input
                    name="company"
                    placeholder="Nombre de su empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="su.email@empresa.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+51 123 456 789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de interés</label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Repuestos de Polímeros">Repuestos de Polímeros</SelectItem>
                    <SelectItem value="Repuestos de Caucho">Repuestos de Caucho</SelectItem>
                    <SelectItem value="Diseño personalizado de repuestos">Diseño personalizado de repuestos</SelectItem>
                    <SelectItem value="Fabricación Personalizada">Fabricación Personalizada</SelectItem>
                    <SelectItem value="Mecanizado CNC">Mecanizado CNC</SelectItem>
                    <SelectItem value="otro - especificar en mensaje">Otro - especificar en mensaje</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  placeholder="Describa sus necesidades o proyecto en detalle..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  disabled={sending}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {sending ? "Enviando..." : "Enviar por Gmail"}
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                * Campos obligatorios. Sus datos están protegidos y no serán compartidos con terceros.
              </p>
            </div>
          </form>
        </div>

        {/* Sección de Ubicación - Responsive */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">¿Cómo llegar a nuestras instalaciones?</h3>
            <p className="text-gray-600">Encuentre fácilmente nuestra ubicación en Lurigancho, Lima</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 rounded-2xl border border-blue-200 shadow-lg">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="bg-blue-600 p-4 sm:p-6 rounded-full shadow-lg">
                    <Navigation className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">EMAPOL S.A.C</h4>
                  <div className="text-base sm:text-lg text-gray-700 space-y-1">
                    <p className="font-semibold">Jr. José de la Mar Mza. H Lote. 3-3a</p>
                    <p>Sec. Rústico, Lurigancho - Lima, Perú</p>
                    <p className="text-sm text-gray-600 italic">(Altura de la Empresa Hyundai)</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open("https://maps.app.goo.gl/j9N9Q7msHEaQjWq8A", "_blank")}
                  >
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                    Ver Ubicación en Google Maps
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-3" />
                  </Button>
                </div>
                <div className="bg-white/70 p-4 sm:p-6 rounded-xl border border-blue-200">
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center justify-center">
                    <Navigation className="h-5 w-5 mr-2 text-blue-600" />
                    Instrucciones para llegar
                  </h5>
                  <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                    <p>
                      📍 <strong>Referencia principal:</strong> Altura de la Empresa Hyundai
                    </p>
                    <p>
                      🚗 <strong>En auto:</strong> Haga clic en el botón para abrir Google Maps y obtener direcciones
                      paso a paso
                    </p>
                    <p>
                      🚌 <strong>En transporte público:</strong> Google Maps le mostrará las mejores rutas disponibles
                    </p>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <p>
                    💡 <strong>Tip:</strong> El botón abrirá Google Maps en una nueva ventana con nuestra ubicación
                    exacta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
