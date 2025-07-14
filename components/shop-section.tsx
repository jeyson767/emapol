"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, Search, FileText, X } from "lucide-react"
import { QuoteCart } from "./quote-cart"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

export function ShopSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [quoteItems, setQuoteItems] = useState<
    Array<{ id: number; name: string; partNumber: string; quantity: number }>
  >([])
  const [showQuoteCart, setShowQuoteCart] = useState(false)
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const products = [
    {
      id: 1,
      name: "SLIDING PIECE",
      partNumber: "0105 07001 / 1612007",
      image: "/images/Sliding.jpg",
    },
    {
      id: 2,
      name: "SLIDING",
      partNumber: "3128 3039 30",
      image: "/images/Sliding2.jpg",
    },
    {
      id: 3,
      name: "DOWELL",
      partNumber: "0105 16001",
      image: "/images/Dowell1.jpg",
    },
    {
      id: 4,
      name: "BUFFER",
      partNumber: "263 634 18",
      image: "/images/Buffer1.jpg",
    },
    {
      id: 5,
      name: "PLACA DESLIZANTE",
      partNumber: "0105 07009",
      image: "/images/PlacaDeslizante1.jpg",
    },
    {
      id: 6,
      name: "CLAVIJA RECTANGULAR",
      partNumber: "0105 16004 / 1612013",
      image: "/images/ClavijaRectangular.jpg",
    },
    {
      id: 7,
      name: "CLAVIJA CUADRADA",
      partNumber: "0138 50001 / 1612003",
      image: "/images/ClavijaCuadrada.jpg",
    },
    {
      id: 8,
      name: "SPACER",
      partNumber: "3128 3141 05",
      image: "/images/Spacer.jpg",
    },
    {
      id: 9,
      name: "ANILLO DE GOMA CON CANAL",
      partNumber: "0105 15391 / 1612017",
      image: "/images/AnilloC.jpg",
    },
    {
      id: 10,
      name: "ANILLO DE GOMA SIN CANAL",
      partNumber: "0105 15480 / 1612018",
      image: "/images/AnilloS.jpg",
    },
    {
      id: 11,
      name: "BUSHING",
      partNumber: "3128 0020 90",
      image: "/images/Bushing.jpg",
    },
    {
      id: 12,
      name: "MORDAZA PROTECTOR",
      partNumber: "3128 3092 70, 71, 72, 73",
      image: "/images/MordazaP.jpg",
    },
    {
      id: 13,
      name: "DISK",
      partNumber: "3128 3092 24",
      image: "/images/Disk.jpg",
    },
    {
      id: 14,
      name: "DOWELL RIÑON",
      partNumber: "3128 3035 27",
      image: "/images/Dowell3.jpg",
    },
    {
      id: 15,
      name: "DOWELL PASTEL",
      partNumber: "3125 0634 00",
      image: "/images/Dowell4.jpg",
    },
    {
      id: 16,
      name: "ABRAZADERA CLAMP",
      partNumber: "3128 3406 87",
      image: "/images/AbrazaderaV.jpg",
    },
    {
      id: 17,
      name: "HOSE DRUM",
      partNumber: "3128 0475 09",
      image: "/images/HoseDrum.jpg",
    },
    {
      id: 18,
      name: "LIP SEAL",
      partNumber: "0130 99003 / 86223930",
      image: "/images/SelloAgua.jpg",
    },
    {
      id: 19,
      name: "RING SEAL",
      partNumber: "86804291 / 0410 10180",
      image: "/images/RingSeal.jpg",
    },
    {
      id: 20,
      name: "SELLO",
      partNumber: "3115 2333 00",
      image: "/images/Sello .jpg",
    },
    {
      id: 21,
      name: "PLATE",
      partNumber: "3128 3021 13",
      image: "/images/Plate.jpg",
    },
    {
      id: 22,
      name: "PROTECTOR DE NITRILO",
      partNumber: "3128 3094 40",
      image: "/images/Protector.jpg",
    },
    {
      id: 23,
      name: "PULLEY WHELL",
      partNumber: "3128 0784 30",
      image: "/images/PulleyWhell.jpg",
    },
    {
      id: 24,
      name: "SHOTCRETERA",
      partNumber: "",
      image: "/images/Shotcretera.jpg",
    },
    {
      id: 25,
      name: "SEAL",
      partNumber: "3128 2166 00",
      image: "/images/Seal1.jpg",
    },
    {
      id: 26,
      name: "SEAL-Q'TY 80EA",
      partNumber: "3128 3012 39",
      image: "/images/Seal2.jpg",
    },
    {
      id: 27,
      name: "LOCK BUFFER TOPE",
      partNumber: "3315 1419 00",
      image: "/images/Lock.jpg",
    },
    {
      id: 28,
      name: "SHIELD HC28",
      partNumber: "86778644",
      image: "/images/Shield1.jpg",
    },
    {
      id: 29,
      name: "SHIELD R-32",
      partNumber: "0105 15304",
      image: "/images/Shield2.jpg",
    },
    {
      id: 30,
      name: "TOBERA",
      partNumber: "E528970",
      image: "/images/Shotcretera2.jpg",
    },
    {
      id: 31,
      name: "SLIDING PIECE",
      partNumber: "3128 3246 24",
      image: "/images/Sliding3.jpg",
    },
    {
      id: 32,
      name: "SLIDING SANDVIK",
      partNumber: "330 016 98",
      image: "/images/Sliding4.jpg",
    },
    {
      id: 33,
      name: "TRABADOR DE CABLE",
      partNumber: "0707 14001 / 0707 14002 / 0707 14017",
      image: "/images/Trabador.jpg",
    },

  ]

  const addToQuote = (product: (typeof products)[0]) => {
    const existingItem = quoteItems.find((item) => item.id === product.id)
    if (existingItem) {
      setQuoteItems(
        quoteItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
      )
    } else {
      setQuoteItems([
        ...quoteItems,
        {
          id: product.id,
          name: product.name,
          partNumber: product.partNumber,
          quantity: 1,
        },
      ])
    }
  }

  // Filter products based on search term only
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <>
      <section id="tienda" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nuestra Tienda
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Repuestos Industriales de Calidad</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encuentra los repuestos y componentes industriales que necesitas. Solicita tu cotización personalizada con
              nuestros especialistas.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar por nombre o número de parte... (ej: sliding, 0105 16001)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600 mt-2">
                Mostrando {filteredProducts.length} resultado(s) para "{searchTerm}"
              </p>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Quick Actions - Ojo expandible */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Dialog
                        open={expandedImage === product.image}
                        onOpenChange={(open) => setExpandedImage(open ? product.image : null)}
                      >
                        <DialogTrigger asChild>
                          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                          <DialogTitle className="sr-only">
                            {product.name} - {product.partNumber}
                          </DialogTitle>
                          <div className="relative">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
                              onClick={() => setExpandedImage(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <div className="w-full max-h-[90vh] overflow-hidden rounded-lg bg-white">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-contain max-h-[70vh] p-4"
                              />
                              <div className="p-4 bg-white">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                <p className="text-gray-600">
                                  <span className="font-medium">NÚMERO DE PARTE:</span>
                                  <span className="font-mono text-blue-600 ml-2">{product.partNumber}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>

                    {/* Part Number */}
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">NUMERO DE PARTE:</span>
                      <br />
                      <span className="font-mono text-blue-600">{product.partNumber}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm"
                        onClick={() => addToQuote(product)}
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        COTIZAR
                      </Button>
                      <Dialog
                        open={expandedImage === product.image}
                        onOpenChange={(open) => setExpandedImage(open ? product.image : null)}
                      >
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                          <DialogTitle className="sr-only">
                            {product.name} - {product.partNumber}
                          </DialogTitle>
                          <div className="relative">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
                              onClick={() => setExpandedImage(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <div className="w-full max-h-[90vh] overflow-hidden rounded-lg bg-white">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-contain max-h-[70vh] p-4"
                              />
                              <div className="p-4 bg-white">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                <p className="text-gray-600">
                                  <span className="font-medium">NÚMERO DE PARTE:</span>
                                  <span className="font-mono text-blue-600 ml-2">{product.partNumber}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron productos</h3>
              <p className="text-gray-500">
                Intenta con otros términos de búsqueda como "sliding", "sello" o números de parte como "SP-2024-001".
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                Limpiar búsqueda
              </Button>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cotización Rápida</h3>
              <p className="text-gray-600">Respuesta en menos de 24 horas</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Repuestos Originales</h3>
              <p className="text-gray-600">Garantía de calidad certificada</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Asesoría Técnica</h3>
              <p className="text-gray-600">Especialistas disponibles 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Notification Button - ROJO */}
      {quoteItems.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setShowQuoteCart(true)}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full h-14 w-14 shadow-xl relative"
          >
            <FileText className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {quoteItems.length}
            </span>
          </Button>
        </div>
      )}

      {/* Quote Cart Modal */}
      <QuoteCart
        isOpen={showQuoteCart}
        onClose={() => setShowQuoteCart(false)}
        items={quoteItems}
        onUpdateItems={setQuoteItems}
      />
    </>
  )
}
