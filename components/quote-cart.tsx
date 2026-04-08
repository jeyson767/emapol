"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Trash2, MessageCircle, FileText, Zap } from "lucide-react"

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
    const itemsList = items.map((item) => `• ${item.name} (${item.partNumber}) - Cantidad: ${item.quantity}`).join("\n")
    const message = `Hola, solicito cotización para los siguientes productos:\n\n${itemsList}\n\nDatos del cliente:\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nRUC: ${formData.ruc}\n\nGracias.`
    const whatsappUrl = `https://wa.me/51952474660?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    
    setFormData({ name: "", company: "", ruc: "" })
    onUpdateItems([])
    onClose()
  }

  return (
    // Se cierra al hacer clic en el fondo oscuro (bg-slate-950/40)
    <div 
      className="fixed inset-0 bg-slate-950/60 z-[10000] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose} 
    >
      {/* Contenedor Principal - onClick preventDefault para que no se cierre al tocar el contenido */}
      <div 
        className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between p-8 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter">
              Tu Lista de <span className="text-red-600">Cotización.</span>
            </h2>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={onClose}
            className="rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <X className="h-7 w-7" />
          </Button>
        </div>

        {/* --- CONTENIDO CON SCROLL INDEPENDIENTE --- */}
        <div className="flex flex-col lg:flex-row overflow-hidden flex-1">
          
          {/* LADO IZQUIERDO: LISTA DE PRODUCTOS (SCROLLABLE) */}
          <div className="lg:w-3/5 p-8 overflow-y-auto border-r border-slate-100 bg-slate-50/30">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                <span>Detalles Del Producto</span>
                <span className="mr-20">Cantidad</span>
              </div>

              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 border-b border-slate-100 group animate-in slide-in-from-left-4 duration-300">
                    <div className="w-1.5 h-12 bg-red-600 rounded-full group-hover:h-14 transition-all" />
                    <div className="flex-1">
                      <p className="font-black text-slate-950 uppercase italic text-sm leading-none mb-1 group-hover:text-red-600 transition-colors">
                        {item.name}
                      </p>
                      <p className="font-mono text-xs text-slate-400 font-bold tracking-tighter">
                        P/N: {item.partNumber}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-20 h-10 font-black text-center border-2 border-slate-100 focus:border-red-600 rounded-xl"
                        min="1"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-xl"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20">
                  <Zap className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-black uppercase italic">No hay productos seleccionados.</p>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <Button 
                variant="ghost" 
                className="mt-8 text-red-600 font-black text-xs tracking-widest hover:bg-red-50 uppercase"
                onClick={() => onUpdateItems([])}
              >
                Limpiar Toda la Lista
              </Button>
            )}
          </div>

          {/* LADO DERECHO: FORMULARIO (ESTÁTICO/SCROLLABLE) */}
          <div className="lg:w-2/5 p-8 bg-slate-950 overflow-y-auto">
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-2">
              <Zap className="h-5 w-5 text-red-600 fill-red-600" />
              Finalizar Pedido
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre y Apellido *</label>
                <Input
                  placeholder="EJ: JUAN PÉREZ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value.toUpperCase() })}
                  required
                  className="bg-white/5 border-white/10 text-white h-12 focus:border-red-600 focus:ring-0 rounded-xl uppercase font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Empresa *</label>
                <Input
                  placeholder="EJ: EMAPOL S.A.C"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value.toUpperCase() })}
                  required
                  className="bg-white/5 border-white/10 text-white h-12 focus:border-red-600 focus:ring-0 rounded-xl uppercase font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">RUC *</label>
                <Input
                  placeholder="EJ: 20123456789"
                  value={formData.ruc}
                  onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white h-12 focus:border-red-600 focus:ring-0 rounded-xl font-bold"
                />
              </div>

              <Button
                type="submit"
                disabled={items.length === 0}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-sm tracking-widest py-7 rounded-2xl shadow-[0_15px_30px_rgba(220,38,38,0.3)] transition-all active:scale-95 disabled:opacity-50 disabled:bg-slate-800"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                ENVIAR POR WHATSAPP
              </Button>
            </form>
            
            <p className="text-[9px] text-slate-500 mt-8 text-center font-bold tracking-widest leading-relaxed">
              * AL ENVIAR, SE ABRIRÁ WHATSAPP PARA <br /> CONFIRMAR LOS DETALLES TÉCNICOS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}