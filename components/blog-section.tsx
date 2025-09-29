import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"

export function BlogSection() {
  const events = [
    {
      id: 1,
      title: "Entrega de canastas navideña 2024",
      image: "/images/Navidad.jpg",
      description:
        "¡Gracias por todo, equipo! Que esta canasta navideña sea un pequeño reflejo del gran valor que tienen para nosotros.",
    },
    {
      id: 2,
      title: "Celebración de cumpleaños del Gerente General",
      image: "/images/Cumple.jpg",
      description:
        "Un brindis por muchos años más de liderazgo y éxito. ¡Feliz cumpleaños!",
    },

    {
      id: 3,
      title: "Premiación iberoamericano 2025",
      image: "/images/premio.jpg",
      description:
        "Orgullosos de ser reconocidos como una de las mejores empresas iberoamericanas. ¡Gracias a todos por hacerlo posible!",
    },

  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header con diseño llamativo */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles className="h-32 w-32 text-blue-600" />
          </div>
          <div className="relative z-10">
            <Badge
              variant="outline"
              className="mb-4 bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700 px-4 py-2"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Nuestro Blog
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Eventos EMAPOL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mantente al día con todas las actividades, capacitaciones y eventos especiales de EMAPOL.
              <br />
              <span className="text-blue-600 font-semibold">Conoce nuestras participaciones y logros</span>
            </p>
          </div>
        </div>

        {/* Grid de eventos responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 hover:-translate-y-2"
            >
              {/* Imagen adaptativa con overlay */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-100 to-indigo-100">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Número del evento */}
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3 relative">
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 pb-6">
                <p className="text-gray-600 leading-relaxed line-clamp-4 mb-4">{event.description}</p>

                {/* Botón de acción llamativo */}
                <div className="flex items-center justify-between">
                  <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:gap-3 gap-2">
                    <span></span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Indicador visual */}
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas responsive */}
        <div className="mt-20 pt-16 border-t border-blue-200/50">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <p className="text-gray-600 font-medium">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}