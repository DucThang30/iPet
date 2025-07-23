"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProductCard from "@/components/ProductCard"
import StoreCard from "@/components/StoreCard"

interface HomeViewProps {
  categories: Array<{
    name: string
    icon: string
    count: number
  }>
  products: any[]
  stores: any[]
  setCurrentView: (view: string) => void
  onProductClick: (product: any) => void
  onStoreClick: (store: any) => void
  onAddToCart: (product: any) => void
  onAddToWishlist: (product: any) => void
  onCategoryFilter: (category: string) => void
}

export default function HomeView({
  categories,
  products,
  stores,
  setCurrentView,
  onProductClick,
  onStoreClick,
  onAddToCart,
  onAddToWishlist,
  onCategoryFilter,
}: HomeViewProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">iPet - Sàn Thương Mại Thú Cưng #1</h1>
            <p className="text-xl mb-8">Hơn 10,000 sản phẩm - 1,000+ cửa hàng uy tín</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setCurrentView("products")}
            >
              Khám Phá Ngay
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
       {/* 
    <section>
  <h2 className="text-lg font-semibold mb-3 text-gray-800">Danh Mục Sản Phẩm</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
    {categories.map((category) => (
      <Card
        key={category.name}
        className="cursor-pointer border border-gray-100 hover:border-gray-300 rounded-md transition-colors"
        onClick={() => onCategoryFilter(category.name)}
      >
        <CardContent className="p-3 text-center">
          <div className="text-xl text-gray-600 mb-1">{category.icon}</div>
          <div className="text-sm text-gray-800">{category.name}</div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
*/}

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sản Phẩm Nổi Bật</h2>
          <Button variant="outline" onClick={() => setCurrentView("products")}>
            Xem Tất Cả
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
      </section>

      {/* Nearby Stores */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cửa Hàng Gần Bạn</h2>
          <Button variant="outline" onClick={() => setCurrentView("stores")}>
            Xem Tất Cả
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stores.slice(0, 3).map((store) => (
            <StoreCard key={store.id} store={store} onStoreClick={onStoreClick} />
          ))}
        </div>
      </section>
    </div>
  )
}
