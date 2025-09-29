import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Send, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* decoracion */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* informacion de emapol */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-lg">
                <span className="text-white font-bold text-xl"></span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-100">EMAPOL S.A.C</h3>
                <p className="text-sm text-blue-200">Polymer and Rubber Manufacturing</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Diseño, Fabricación de polimeros y cauchos para el sector minero e industrial en general.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/emapolsac?igsh=MW4zamxrOWhnZmJhYw=="
                className="bg-slate-800/50 p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="h-5 w-5 text-blue-200" />
              </Link>
              <Link
                href="#"
                className="bg-slate-800/50 p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
              <Linkedin className="h-5 w-5 text-blue-200" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 border-b border-blue-700/30 pb-2">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-blue-300 mt-1 group-hover:text-blue-200 transition-colors" />
                <div>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors">Jr. Jose de la Mar Mz H Lote 3-3A</p>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors">Lima - Lima - Lurigancho</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors">+51 952 474 660</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors">ventas@emapolsac.com</p>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors">emapol@emapolsac.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-center text-sm text-blue-200 py-4 border-t border-blue-700/30">  
        &copy; {new Date().getFullYear()} EMAPOL S.A.C. Todos los derechos reservados.      
      </div>
    </footer>

  )
}
