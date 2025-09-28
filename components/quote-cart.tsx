"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Trash2, MessageCircle } from "lucide-react"

interface QuoteItem {
  id: number
  name: string
  partNumber: string
  quantity: number
}

interface QuoteCartProps {
  isOpen: boolean
  onClose: () => void
  items: QuoteItem[]
  onUpdateItems: (items: QuoteItem[]) => void
}

export function QuoteCart({ isOpen, onClose, items, onUpdateItems }: QuoteCartProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    ruc: "",
  })

  if (!isOpen) return null

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    onUpdateItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: number) => {
    onUpdateItems(items.filter((item) => item.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp
    const itemsList = items.map((item) => `• ${item.name} (${item.partNumber}) - Cantidad: ${item.quantity}`).join("\n")

    const message = `Hola, solicito cotización para los siguientes productos:

${itemsList}

Datos del cliente:
Nombre: ${formData.name}
Empresa: ${formData.company}
RUC: ${formData.ruc}

Gracias.`

    const whatsappUrl = `https://wa.me/51952474660?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // limpiar formulario 
    setFormData({
      name: "",
      company: "",
      ruc: "",
    })
    onUpdateItems([])
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Lista de Cotizaciones</h2>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Lista de productos */}
          <div className="lg:w-1/2 p-6 border-r overflow-y-auto">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 pb-2 border-b">
                <span>Detalles Del Producto</span>
                <span>Cantidad</span>
                <span></span>
              </div>

              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-3 gap-4 items-center py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-8 bg-red-500"></div>
                    <div>
                      <p className="font-medium text-blue-600">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.partNumber}</p>
                    </div>
                  </div>

                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                    className="w-20"
                    min="1"
                  />

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 w-full bg-red-500 hover:bg-red-600 text-white" onClick={() => onUpdateItems([])}>
                  Borrar Lista
                </Button>
                
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2 p-6 overflow-y-auto bg-gray-50 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none shadow-inner">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Solicitud de cotización</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nombre y Apellido <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Ej: Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/80 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Empresa <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Ej: EMAPOL S.A.C"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-white/80 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  RUC <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Ej: 20123456789"
                  value={formData.ruc}
                  onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                  required
                  className="bg-white/80 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-lg font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar por WhatsApp
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              * Todos los campos son obligatorios. Sus datos están protegidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
