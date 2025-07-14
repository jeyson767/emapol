import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ProductSearchSection() {
  return (
    <section className="bg-yellow-500 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">BUSCA PRODUCTOS</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Buscar productos..." className="flex-1 h-14 text-lg bg-white" />
            <Button className="h-14 px-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold">BUSCAR</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
