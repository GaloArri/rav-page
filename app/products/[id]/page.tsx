import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import productsData from "../../data/products.json"
import ContactForm from "./components/ContactForm"

interface ProductPageProps {
  params: {
    id: string;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params; 
  const productId = resolvedParams.id; 

  if (typeof productId !== 'string') {
    console.error("El ID del producto no es una cadena:", productId);
    notFound(); 
  }

  const product = productsData.products.find((p) => p.id === Number.parseInt(productId))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-muted/30 ">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl font-semibold text-primary mb-4">${product.price.toFixed(2)}</p>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <Separator />

              <ContactForm product={product} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

