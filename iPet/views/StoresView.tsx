"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import StoreCard from "@/components/StoreCard"

interface StoresViewProps {
  stores: any[]
  onStoreClick: (store: any) => void
}

export default function StoresView({ stores, onStoreClick }: StoresViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cửa Hàng & Dịch Vụ Gần Bạn</h1>
        <Button variant="outline">
          <MapPin className="w-4 h-4 mr-2" />
          Thay Đổi Vị Trí
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} onStoreClick={onStoreClick} />
        ))}
      </div>
    </div>
  )
}
