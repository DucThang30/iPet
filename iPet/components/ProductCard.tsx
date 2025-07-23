"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Eye, Heart, ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  rating: number
  reviews: number
  discount: number
  badge: string
  category: string
  brand: string
  inStock: boolean
  seller: string
  description: string
}

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
  onAddToCart?: (product: Product) => void
  onAddToWishlist?: (product: Product) => void
}

export default function ProductCard({ product, onProductClick, onAddToCart, onAddToWishlist }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      <div className="relative overflow-hidden" onClick={() => onProductClick(product)}>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary">{product.badge}</Badge>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 mr-2">
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation()
                onAddToWishlist?.(product)
              }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-red-600">{product.price.toLocaleString()}đ</span>
            <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice.toLocaleString()}đ</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">{product.seller}</p>
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={(e) => {
            e.stopPropagation()
            onAddToCart?.(product)
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Thêm Vào Giỏ
        </Button>
      </CardContent>
    </Card>
  )
}
