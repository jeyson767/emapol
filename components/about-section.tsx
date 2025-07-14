import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Sobre Nosotros
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Más de 10 años en el mercado, dedicada al diseño, desarrollo y fabricación de todo tipo de piezas en polímeros y caucho.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos inspiramos en cada cliente y creamos nuestra propia forma de dar sentido a lo que nos apasiona. En diferenciarnos por la calidad,
            por la rápida respuesta a los requerimientos y el cumplimiento de los plazos comprometidos, otorgando asi soluciones eficientes e innovadoras.
            Nuestro personal esta en una mejora continua en su desempeño y profesionalismo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Nuestra Misión y Visión</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Misión</h4>
                <p className="text-gray-600">
                  Convertirnos en la mejor opción de solución para nuestros clientes, el mejor servicio, calidad y valor
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Visión</h4>
                <p className="text-gray-600">
                  Ser una empresa líder a nivel nacional e internacional, en el diseño y fabricación de todo tipo de piezas en polímeros y caucho
                  para el sector minero e industria en general.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Calidad y Satisfacción del Cliente</h4>
                <p className="text-gray-600">Garantizar que cada servicio y producto cumpla con los más altos estándares de calidad, logrando superar las expectativas de nuestros clientes.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Innovación Continua</h4>
                <p className="text-gray-600">Incorporar nuevas tecnologías y procesos en nuestras operaciones para ofrecer soluciones más eficientes y sostenibles.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Crecimiento Sustentable</h4>
                <p className="text-gray-600">Expandir nuestra presencia en el mercado minero e industrial, respetando los principios de sostenibilidad y cuidado del medio ambiente.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Desarrollo del Talento Humano</h4>
                <p className="text-gray-600">Fomentar el crecimiento profesional y personal de nuestros colaboradores, asegurando un equipo motivado y altamente capacitado.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
