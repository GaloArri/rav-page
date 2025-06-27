import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const hitos = [
  { year: 2010, event: "Fundación de Rav en un pequeño taller" },
  { year: 2015, event: "Lanzamiento de nuestra plataforma de comercio electrónico" },
  { year: 2018, event: "Expansión a mercados internacionales" },
  { year: 2020, event: "Presentación de nuestra línea de productos sostenibles" },
  { year: 2023, event: "Alcanzamos 1 millón de clientes satisfechos" },
]

export default function CompanyHistory() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Historia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hitos.map((hito, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{hito.year}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{hito.event}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
