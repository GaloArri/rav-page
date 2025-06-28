"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useProducts } from "./ProductContext"

export default function ProductList() {
  const { filteredProducts } = useProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
        >
          <Link href={`/products/${product.id}`} className="block">
            <CardContent className="p-0 relative">
            <div className="aspect-[3/4] relative overflow-hidden bg-white flex items-center justify-center">
  <Image
    src={product.image || "/placeholder.svg"}
    alt={product.name}
    fill
    className="object-contain transition-transform duration-300 group-hover:scale-105"
  />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </CardContent>
          </Link>
          <CardFooter className="flex flex-col items-start p-6">
            <div className="w-full mb-4">
              <Link href={`/products/${product.id}`} className="block">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
              </Link>
              <div className="flex justify-between items-center w-full">
                <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>

              </div>
            </div>
            <Button asChild className="w-full">
              <Link href={`/products/${product.id}`}>Ver Más</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

