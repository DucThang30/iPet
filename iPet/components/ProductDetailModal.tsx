"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Plus, Minus } from "lucide-react"

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

interface ProductDetailModalProps {
  product: Product | null
  onClose: () => void
  handleAddToCart: (product: Product) => void
  handleAddToWishlist: (product: Product) => void
}

export default function ProductDetailModal({
  product,
  onClose,
  handleAddToCart,
  handleAddToWishlist,
}: ProductDetailModalProps) {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Chi Tiết Sản Phẩm</h2>
            <Button variant="ghost" onClick={onClose}>
              ✕
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} đánh giá)
                  </span>
                </div>
              </div>

              <div className="border-t border-b py-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-red-600">{product.price.toLocaleString()}đ</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice.toLocaleString()}đ</span>
                  <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Thương hiệu:</strong> {product.brand}
                </p>
                <p>
                  <strong>Danh mục:</strong> {product.category}
                </p>
                <p>
                  <strong>Người bán:</strong> {product.seller}
                </p>
                <p>
                  <strong>Tình trạng:</strong>{" "}
                  <span className="text-green-600">{product.inStock ? "Còn hàng" : "Hết hàng"}</span>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Mô tả sản phẩm:</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="sm">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2">1</span>
                  <Button variant="ghost" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  onClick={() => handleAddToCart(product!)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Thêm Vào Giỏ
                </Button>
                <Button variant="outline" onClick={() => handleAddToWishlist(product!)}>
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4">Đánh Giá Sản Phẩm</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Người dùng {review}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">Sản phẩm rất tốt, chất lượng cao, thú cưng rất thích!</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
