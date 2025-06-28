"use client"

import { useProducts } from "./ProductContext"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Filter, X } from "lucide-react"

const filters = {
  categories: [
    { id: "a", label: "a" },
    { id: "c", label: "c" },
    { id: "w", label: "w" },
  ],
  sizes: [
    { id: "d", label: "d" },
    { id: "sc", label: "sc" },
    { id: "d", label: "d" },
    { id: "c", label: "c" },
    { id: "c", label: "c" },
  ],
}

export default function ProductFilters() {
  const {
    selectedCategories,
    setSelectedCategories,
    selectedColors,
    selectedSizes,
    setSelectedSizes,
    clearFilters,
  } = useProducts()

  const activeFiltersCount = selectedCategories.length + selectedColors.length + selectedSizes.length

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1 rounded-full bg-primary w-5 h-5 text-xs flex items-center justify-center text-primary-foreground">
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-4" align="end">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Filters</h3>
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground" onClick={clearFilters}>
                  Clear all
                </Button>
              )}
            </div>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                {filters.categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) => {
                        setSelectedCategories(
                          checked
                            ? [...selectedCategories, category.id]
                            : selectedCategories.filter((id) => id !== category.id),
                        )
                      }}
                    />
                    <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />
            <div>
              <h4 className="font-medium mb-2">Sizes</h4>
              <div className="grid grid-cols-2 gap-2">
                {filters.sizes.map((size) => (
                  <div key={size.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`size-${size.id}`}
                      checked={selectedSizes.includes(size.id)}
                      onCheckedChange={(checked) => {
                        setSelectedSizes(
                          checked ? [...selectedSizes, size.id] : selectedSizes.filter((id) => id !== size.id),
                        )
                      }}
                    />
                    <Label htmlFor={`size-${size.id}`}>{size.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {activeFiltersCount > 0 && (
        <Button variant="ghost" size="sm" className="h-9 px-2 text-muted-foreground" onClick={clearFilters}>
          <X className="h-4 w-4 mr-2" />
          Clear
        </Button>
      )}
    </div>
  )
}

