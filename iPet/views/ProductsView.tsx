"use client"

import { Button } from "@/components/ui/button"
import { Filter, Grid, List } from "lucide-react"
import ProductCard from "@/components/ProductCard"

interface ProductsViewProps {
  products: any[]
  viewMode: string
  setViewMode: (mode: string) => void
  onProductClick: (product: any) => void
  onAddToCart: (product: any) => void
  onAddToWishlist: (product: any) => void
  searchQuery: string
  selectedCategory: string
}

export default function ProductsView({
  products,
  viewMode,
  setViewMode,
  onProductClick,
  onAddToCart,
  onAddToWishlist,
  searchQuery,
  selectedCategory,
}: ProductsViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {searchQuery
            ? `Kết quả tìm kiếm: "${searchQuery}"`
            : selectedCategory !== "all"
              ? `Danh mục: ${selectedCategory}`
              : "Tất Cả Sản Phẩm"}
        </h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Lọc
          </Button>
          <div className="flex border rounded-lg">
            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </div>
  )
}
