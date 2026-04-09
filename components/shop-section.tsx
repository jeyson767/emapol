"use client"

import { useState, } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, Search, FileText, X, Zap, ShieldCheck, Headphones } from "lucide-react"
import { QuoteCart } from "./quote-cart"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

export function ShopSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [quoteItems, setQuoteItems] = useState<
    Array<{ id: number; name: string; partNumber: string; quantity: number }>
  >([])
  const [showQuoteCart, setShowQuoteCart] = useState(false)
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  const [showAddedAlert, setShowAddedAlert] = useState(false)

  const products = [
    { id: 1, name: "SLIDING PIECE", partNumber: "0105 07001 / 1612007", image: "Sliding.jpg" },
    { id: 3, name: "DOWELL", partNumber: "0105 16001", image: "Dowell1.jpg" },
    { id: 4, name: "BUFFER", partNumber: "263 634 18", image: "Buffer1.jpg" },
    { id: 5, name: "PLACA DESLIZANTE", partNumber: "0105 07009", image: "PlacaDeslizante1.jpg" },
    { id: 6, name: "CLAVIJA RECTANGULAR", partNumber: "0105 16004 / 1612013", image: "ClavijaRectangular.jpg" },
    { id: 7, name: "CLAVIJA CUADRADA", partNumber: "0138 50001 / 1612003", image: "ClavijaCuadrada.jpg" },
    { id: 8, name: "SPACER", partNumber: "3128 3141 05", image: "Spacer.jpg" },
    { id: 9, name: "ANILLO DE GOMA CON CANAL", partNumber: "0105 15391 / 1612017", image: "AnilloC.jpg" },
    { id: 10, name: "ANILLO DE GOMA SIN CANAL", partNumber: "0105 15480 / 1612018", image: "AnilloS.jpg" },
    { id: 11, name: "BUSHING", partNumber: "3128 0020 90", image: "Bushing.jpg" },
    { id: 12, name: "MORDAZA PROTECTOR", partNumber: "3128 3092 70, 71, 72, 73", image: "MordazaP.jpg" },
    { id: 13, name: "DISK", partNumber: "3128 3092 24", image: "Disk.jpg" },
    { id: 14, name: "DOWELL RIÑON", partNumber: "3128 3035 27", image: "Dowell3.jpg" },
    { id: 15, name: "DOWELL PASTEL", partNumber: "3125 0634 00", image: "Dowell4.jpg" },
    { id: 16, name: "ABRAZADERA CLAMP", partNumber: "3128 3406 87", image: "AbrazaderaV.jpg" },
    { id: 17, name: "HOSE DRUM", partNumber: "3128 0475 09", image: "HoseDrum.jpg" },
    { id: 18, name: "LIP SEAL", partNumber: "0130 99003 / 86223930", image: "SelloAgua.jpg" },
    { id: 19, name: "RING SEAL", partNumber: "86804291 / 0410 10180", image: "RingSeal.jpg" },
    { id: 20, name: "SELLO", partNumber: "3115 2333 00", image: "Sello .jpg" },
    { id: 21, name: "PLATE", partNumber: "3128 3021 13", image: "Plate.jpg" },
    { id: 22, name: "PROTECTOR DE NITRILO", partNumber: "3128 3094 40", image: "Protector.jpg" },
    { id: 23, name: "PULLEY WHELL", partNumber: "3128 0784 30", image: "PulleyWhell.jpg" },
    { id: 24, name: "SHOTCRETERA", partNumber: "", image: "Shotcretera.jpg" },
    { id: 25, name: "SEAL", partNumber: "3128 2166 00", image: "Seal1.jpg" },
    { id: 26, name: "SEAL-Q'TY 80EA", partNumber: "3128 3012 39", image: "Seal2.jpg" },
    { id: 27, name: "LOCK BUFFER TOPE", partNumber: "3315 1419 00", image: "Lock.jpg" },
    { id: 28, name: "SHIELD HC28", partNumber: "86778644", image: "Shield1.jpg" },
    { id: 29, name: "SHIELD R-32", partNumber: "0105 15304", image: "Shield2.jpg" },
    { id: 30, name: "TOBERA", partNumber: "E528970", image: "Shotcretera2.jpg" },
    { id: 31, name: "SLIDING PIECE", partNumber: "3128 3246 24", image: "Sliding3.jpg" },
    { id: 32, name: "SLIDING SANDVIK", partNumber: "330 016 98", image: "Sliding4.jpg" },
    { id: 33, name: "TRABADOR DE CABLE", partNumber: "0707 14001 / 0707 14002 / 0707 14017", image: "Trabador.jpg" },
  ];

  const addToQuote = (product: (typeof products)[0]) => {
    const existingItem = quoteItems.find((item) => item.id === product.id)
    if (existingItem) {
      setQuoteItems(
        quoteItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
      )
    } else {
      setQuoteItems([
        ...quoteItems,
        { id: product.id, name: product.name, partNumber: product.partNumber, quantity: 1 },
      ])
    }
    setShowAddedAlert(true)
    setTimeout(() => setShowAddedAlert(false), 1500)
  }

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <>
      {showAddedAlert && (
        // Cambiamos right-4/10 por right-0 para que se pegue al borde derecho
        <div className="fixed bottom-56 right-0 z-[10000] animate-in fade-in slide-in-from-right-10 duration-300">
          <div className="bg-slate-950/95 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-l-2xl shadow-[-10px_0_50px_rgba(0,0,0,0.5)] flex items-center gap-4 border-r-4 border-r-red-600">

            {/* Icono de rayo EMAPOL con pulso */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-50 animate-pulse" />
              <div className="relative bg-red-600 rounded-full p-2">
                <Zap className="h-4 w-4 text-white fill-white" />
              </div>
            </div>

            <div className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500">Notificación</span>
              <span className="text-sm font-black uppercase italic tracking-tighter text-white">
                ¡PIEZA AÑADIDA!
              </span>
            </div>

            <div className="ml-2 bg-white/5 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-slate-400" />
            </div>
          </div>
        </div>
      )}

      <section id="tienda" className="pt-32 pb-24 bg-white relative overflow-hidden">

        {/* --- EL MOSAICO DE MARCA ULTRA-DENSIFICADO (EDICIÓN TIENDA) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] md:opacity-[0.07]" aria-hidden="true">
          {/* Fila Superior */}
          <img src="/images/logo.png" className="absolute top-[2%] left-[10%] w-32 md:w-64 rotate-12 blur-[1px]" alt="" />
          <img src="/images/logo.png" className="absolute top-[8%] right-[5%] w-28 md:w-44 -rotate-12 blur-[2px]" alt="" />

          {/* Bloque Central Superior */}
          <img src="/images/logo.png" className="absolute top-[20%] left-[40%] w-24 md:w-36 rotate-[45deg] blur-[3px]" alt="" />
          <img src="/images/logo.png" className="absolute top-[25%] right-[30%] w-36 md:w-56 -rotate-12 blur-[1px]" alt="" />

          {/* Laterales Medios (Muy grandes para llenar espacio) */}
          <img src="/images/logo.png" className="absolute top-[45%] left-[-10%] w-64 md:w-[500px] rotate-[15deg] blur-[5px]" alt="" />
          <img src="/images/logo.png" className="absolute top-[50%] right-[-5%] w-52 md:w-80 -rotate-45 blur-[2px]" alt="" />

          {/* Bloque Central Inferior */}
          <img src="/images/logo.png" className="absolute top-[70%] left-[25%] w-40 md:w-60 rotate-[20deg] blur-[3px]" alt="" />
          <img src="/images/logo.png" className="absolute top-[75%] right-[40%] w-32 md:w-48 -rotate-12 blur-[1px]" alt="" />

          {/* Fila Base (Cerca del final) */}
          <img src="/images/logo.png" className="absolute bottom-[10%] left-[5%] w-48 md:w-72 rotate-12 blur-[2px]" alt="" />
          <img src="/images/logo.png" className="absolute bottom-[15%] right-[15%] w-40 md:w-60 -rotate-[20deg] blur-[4px]" alt="" />
          <img src="/images/logo.png" className="absolute bottom-[2%] left-[50%] -translate-x-1/2 w-32 md:w-56 rotate-[10deg] blur-[1px]" alt="" />
        </div>

        <div className="container mx-auto px-6 relative z-10">

          {/* --- HEADER ESTILO EMAPOL --- */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic text-slate-950 mb-8">
              REPUESTOS <br />
              <span className="text-red-600 not-italic">EMAPOL.</span>
            </h2>
          </div>

          {/* Search Bar - Estilo Industrial */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6 group-focus-within:text-red-600 transition-colors" />
              <Input
                placeholder="BUSCAR POR NOMBRE O NÚMERO DE PARTE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 h-16 text-lg font-black uppercase tracking-wider border-2 border-slate-100 rounded-2xl focus:border-red-600 focus:ring-0 shadow-xl"
              />
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group relative border-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-3">
                  <div className="relative pt-6 px-6">
                    <div className="w-full h-56 bg-slate-50 flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-100 relative group/img">
                      <img
                        src={`/api/watermark?image=${product.image}`}
                        alt={product.name}
                        onContextMenu={(e) => e.preventDefault()} // Seguridad extra
                        className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-500 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    </div>

                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <Dialog
                        open={expandedImage === product.image}
                        onOpenChange={(open) => setExpandedImage(open ? product.image : null)}
                      >
                        <DialogTrigger asChild>
                          <Button size="icon" className="h-10 w-10 bg-white text-slate-950 hover:bg-red-600 hover:text-white shadow-xl rounded-xl">
                            <Eye className="h-5 w-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[70vh] w-full p-0 bg-white border-none rounded-[2rem] overflow-hidden [&>button]:hidden ">
                          <DialogTitle className="sr-only">{product.name}</DialogTitle>
                          <div className="relative p-12 flex flex-col items-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-6 right-6 hover:bg-red-50 text-slate-400 hover:text-red-600"
                              onClick={() => setExpandedImage(null)}
                            >
                              <X className="h-6 w-6" />
                            </Button>
                            <img
                              src={`/api/watermark?image=${product.image}`}
                              alt={product.name}
                              onContextMenu={(e) => e.preventDefault()}
                              className="max-h-[60vh] object-contain mb-8"
                            />
                            <h3 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter mb-4">{product.name}</h3>
                            <div className="px-6 py-2 bg-red-50 rounded-full text-red-600 font-mono font-bold tracking-widest uppercase">
                              P/N: {product.partNumber}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <CardHeader className="pt-6 pb-2 px-8">
                    <CardTitle className="text-xl font-black text-slate-950 uppercase italic leading-tight group-hover:text-red-600 transition-colors line-clamp-1">
                      {product.name}
                    </CardTitle>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">
                      NÚMERO DE PARTE
                    </div>
                    <div className="font-mono text-sm text-red-600 font-bold bg-red-50/50 w-fit px-2 py-0.5 rounded-md mt-1">
                      {product.partNumber || "CONSULTAR"}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4 pb-8 px-8">
                    <Button
                      className="w-full bg-slate-950 hover:bg-red-600 text-white font-black text-xs tracking-widest rounded-xl h-12 transition-all shadow-lg"
                      onClick={() => addToQuote(product)}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      COTIZAR AHORA
                    </Button>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 w-1.5 h-0 bg-red-600 transition-all duration-500 group-hover:h-full" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <Search className="h-20 w-20 mx-auto mb-6 text-slate-200" />
              <h3 className="text-2xl font-black text-slate-950 uppercase italic">Sin resultados</h3>
              <p className="text-slate-500 mt-2 font-medium">No encontramos "{searchTerm}" en nuestro inventario.</p>
              <Button variant="ghost" className="mt-6 text-red-600 font-black" onClick={() => setSearchTerm("")}>LIMPIAR BÚSQUEDA</Button>
            </div>
          )}

          {/* Features Industriales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-16 border-t border-slate-100">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-red-200 group-hover:-translate-y-2 transition-transform">
                <Zap className="h-8 w-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-black text-slate-950 uppercase italic tracking-tighter mb-2">Respuesta Inmediata</h3>
              <p className="text-slate-500 text-sm font-medium uppercase leading-tight">Cotizaciones procesadas en menos de 24 horas</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="bg-slate-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-slate-200 group-hover:-translate-y-2 transition-transform">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-950 uppercase italic tracking-tighter mb-2">Garantía Total</h3>
              <p className="text-slate-500 text-sm font-medium uppercase leading-tight">Piezas fabricadas bajo estándares industriales</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-red-200 group-hover:-translate-y-2 transition-transform">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-950 uppercase italic tracking-tighter mb-2">Soporte Crítico</h3>
              <p className="text-slate-500 text-sm font-medium uppercase leading-tight">Asesoría técnica para minería 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTÓN FLOTANTE DE COTIZACIÓN (AJUSTE MÓVIL) --- */}
      {quoteItems.length > 0 && (
        <div className="fixed bottom-32 right-0 z-[9999] animate-in fade-in slide-in-from-right-10 duration-500">

          {/* Resplandor sutil */}
          <span className="absolute inset-0 rounded-l-full bg-red-600/15 animate-pulse blur-lg" />

          <Button
            onClick={() => setShowQuoteCart(true)}
            // MÓVIL: h-14 w-14 (Círculo) | DESKTOP: h-16 w-auto (Pestaña)
            className="relative group bg-slate-950 hover:bg-red-700 text-white rounded-l-full h-14 md:h-16 w-14 md:w-auto px-0 md:px-6 flex items-center justify-center gap-0 md:gap-4 shadow-[-10px_0_40px_rgba(0,0,0,0.4)] border-r-4 border-red-600 transition-all duration-300 active:scale-95"
          >
            {/* Icono Principal - Centrado en móvil */}
            <div className="bg-red-600 p-2 md:p-2.5 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-md">
              <FileText className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>

            {/* Separador - Solo visible en Desktop */}
            <div className="hidden md:block w-px h-8 bg-slate-700" />

            {/* Contador - En móvil flota sobre el icono, en desktop va al lado */}
            <div className="flex flex-col items-center justify-center relative">
              {/* Etiqueta "Ítems" - Oculta en móvil */}
              <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-0.5">Ítems</span>

              <div className="flex items-end gap-1">
                {/* En móvil el número es un badge pequeño arriba del icono, en desktop es el número grande */}
                <span className="absolute -top-10 -left-8 md:relative md:top-0 md:left-0 bg-white md:bg-transparent text-slate-950 md:text-white text-[11px] md:text-3xl font-black rounded-full md:rounded-none h-6 w-6 md:h-auto md:w-auto flex items-center justify-center border-2 border-red-600 md:border-0 italic tracking-tighter leading-none">
                  {String(quoteItems.length).padStart(2, '0')}
                </span>
                <Zap className="hidden md:block h-4 w-4 text-red-500 fill-red-500 mb-1 opacity-70" />
              </div>
            </div>
          </Button>
        </div>
      )}

      <QuoteCart isOpen={showQuoteCart} onClose={() => setShowQuoteCart(false)} items={quoteItems} onUpdateItems={setQuoteItems} />
    </>
  )
}