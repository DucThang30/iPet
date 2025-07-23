"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Shield } from "lucide-react"

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

interface StoreCardProps {
  store: Store
  onStoreClick: (store: Store) => void
}

export default function StoreCard({ store, onStoreClick }: StoreCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative" onClick={() => onStoreClick(store)}>
        <img src={store.image || "/placeholder.svg"} alt={store.name} className="w-full h-32 object-cover" />
        {store.verified && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white">
            <Shield className="w-3 h-3 mr-1" />
            Xác Thực
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{store.name}</h3>
          <Badge variant="outline">{store.type}</Badge>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(store.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {store.rating} ({store.reviews})
          </span>
        </div>
        <div className="space-y-1 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{store.distance}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{store.hours}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {store.services.slice(0, 3).map((service) => (
            <Badge key={service} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-transparent" variant="outline" onClick={() => onStoreClick(store)}>
          Xem Chi Tiết
        </Button>
      </CardContent>
    </Card>
  )
}
