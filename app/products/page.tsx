import Header from "../components/Header"
import Footer from "../components/Footer"
import { Suspense } from "react"
import { ProductProvider } from "./components/ProductContext"
import ProductList from "./components/ProductList"
import ProductFilters from "./components/ProductFilters"
import ProductSort from "./components/ProductSort"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Nuestros Productos</h1>
          </div>
          <ProductProvider>
            <div className="flex flex-col gap-6">
              <Separator />
              <Suspense fallback={<ProductSkeleton />}>
                <ProductList />
              </Suspense>
            </div>
          </ProductProvider>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-[3/4] rounded-xl" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      ))}
    </div>
  )
}

