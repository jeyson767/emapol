import { Badge } from "@/components/ui/badge"

export function ServicesSection() {
  const services = [
    {
      title: "INGENIERIA Y DISEÑO",
      description:
        "Contamos con un equipo de ingenieros especializados en diseño y desarrollo de nuevos repuestos de Polímeros y Caucho, de acuerdo a las especificaciones y requerimientos de cada cliente.",
      image: "/images/fabricacion.jpeg",
    },
    {
      title: "REVESTIMIENTO",
      description:
        "Nuestro servicio se ajusta a cualquier forma y se puede aplicar a cualquier espesor, en los diferentes elastómeros según sea las condiciones de aplicación. Somos una empresa con experiencia en el mercado.",
      image: "/images/fabricacion3.jpg",
    },
    {
      title: "MECANIZADO - CNC",
      description:
        "Contamos con Centros Mecanizados – CNC  de la linea ROMI y el servicio de TORNERÍA. Nuestra área de Maestranza ofrece servicios de alta precisión.",
      image: "/images/fabricacion4.jpg",
    },
    {
      title: "FABRICACIÓN",
      description:
        "A partir de muestras o planos, fabricamos todo tipo de repuestos en Polímeros y Caucho.  Repuestos de alta rotación para Jumbos de Perforación Minera y repuestos para la Industria en General.",
      image: "/images/fabricacion2.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-purple-800">NUESTROS SERVICIOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={service.image || "/placeholder.svg?height=200&width=300"}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-lg font-bold text-blue-600 mb-4">{service.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
