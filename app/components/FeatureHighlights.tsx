import { Music, Network, Eye, Award, Archive } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Gestión Multicanal",
    description: "Maneja configuraciones complejas de reproducción con sincronización precisa de pistas y sistemas de respaldo.",
  },
  {
    icon: Network,
    title: "Integración de Control de Espectáculo",
    description: "Integración fluida con protocolos estándar de la industria, incluyendo MIDI, OSC y código de tiempo.",
  },
  {
    icon: Award,
    title: "Productos de Alta Calidad",
    description: "Equipos y soluciones provenientes de los mejores materiales y tecnologías, garantizando fiabilidad y rendimiento superior.",
  },
  {
    icon: Archive,
    title: "Montaje y Reparación",
    description: "Realizamos montaje y reparación de sistemas de sonido y equipos de playback, asegurando que todo funcione a la perfección durante tus producciones o eventos en vivo.",
  }
]


export default function FeatureHighlights() {
  return (
<section className="py-24 bg-muted/20">
  <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

