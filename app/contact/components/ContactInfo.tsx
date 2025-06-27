import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    title: "Correo Electrónico",
    details: ["contacto@rav.ar", "soporte@rav.ar"],
  },
  {
    icon: MapPin,
    title: "Visítanos",
    details: ["Avenida Corrientes 1234, CABA", "Buenos Aires, Argentina"],
  },
  {
    icon: Phone,
    title: "Llámanos",
    details: ["+54 9 11 1234-5678", "+54 9 11 8765-4321"],
  },
];


export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow duration-300">
          <CardContent className="flex items-start space-x-4 p-6">
            <item.icon className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground">
                  {detail}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

