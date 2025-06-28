import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Play,
  Volume2,
  Headphones,
  Award,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Estudio de grabación profesional con equipos Rav",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Proceso de fabricación sostenible",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Equipo de ingenieros trabajando en nuevos productos",
  },
];

export default function LandingPage() {
  return (
    <div>
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Image
                    src="/assets/logo.svg"
                    alt="Logo de Rav"
                    width={400}
                    height={200}
                    className="w-auto h-20 hover:opacity-80 transition-opacity invert brightness-200"
                  />
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Soluciones innovadoras en reproducción de audio que combinan
                  tecnología avanzada con un enfoque sostenible. Calidad
                  profesional que perdura en el tiempo.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 bg-transparent"
                  asChild
                >
                  <Link href="/about">Más sobre nosotros</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
