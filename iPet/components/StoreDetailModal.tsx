"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Clock, Calendar } from "lucide-react"

interface Store {
  id: number
  name: string
  type: string
  rating: number
  reviews: number
  distance: string
  address: string
  phone: string
  hours: string
  image: string
  services: string[]
  priceRange: string
  verified: boolean
}

interface StoreDetailModalProps {
  store: Store | null
  onClose: () => void
}

export default function StoreDetailModal({ store, onClose }: StoreDetailModalProps) {
  if (!store) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Thông Tin Chi Tiết</h2>
            <Button variant="ghost" onClick={onClose}>
              ✕
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={store.image || "/placeholder.svg"}
                alt={store.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">[Google Maps Integration]</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl font-bold">{store.name}</h1>
                  <Badge variant="outline">{store.type}</Badge>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(store.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {store.rating} ({store.reviews} đánh giá)
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Địa chỉ</p>
                    <p className="text-gray-600">{store.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Số điện thoại</p>
                    <p className="text-gray-600">{store.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Giờ mở cửa</p>
                    <p className="text-gray-600">{store.hours}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Dịch vụ:</h3>
                <div className="flex flex-wrap gap-2">
                  {store.services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Khoảng giá:</h3>
                <p className="text-lg font-bold text-blue-600">{store.priceRange}</p>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Đặt Lịch
                </Button>
                <Button variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi Ngay
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4">Đánh Giá Dịch Vụ</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Khách hàng {review}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">Dịch vụ tuyệt vời, nhân viên chuyên nghiệp và tận tâm!</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
