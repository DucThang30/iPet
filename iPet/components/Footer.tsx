"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  Shield,
  Truck,
  CreditCard,
  Award,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Đăng Ký Nhận Tin Khuyến Mãi</h3>
            <p className="text-blue-100 mb-6">Nhận thông tin ưu đãi và sản phẩm mới nhất dành cho thú cưng</p>
            <div className="max-w-md mx-auto flex space-x-2">
              <Input placeholder="Nhập email của bạn..." className="bg-white text-gray-900 border-0" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <Send className="w-4 h-4 mr-2" />
                Đăng Ký
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐾</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">iPet</h3>
                  <p className="text-sm text-gray-400">Thương mại thú cưng #1</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                iPet là nền tảng thương mại điện tử hàng đầu Việt Nam chuyên về thú cưng. Chúng tôi cung cấp hơn 10,000
                sản phẩm chất lượng cao và kết nối với 1,000+ cửa hàng uy tín.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600 p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-pink-600 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-red-600 p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-400 p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Liên Kết Nhanh</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Về iPet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tuyển Dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tin Tức
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hướng Dẫn Mua Hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Chính Sách Đổi Trả
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Bảo Mật Thông Tin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Điều Khoản Sử Dụng
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Danh Mục Sản Phẩm</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    🍖 Thức Ăn Cho Chó
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    🐱 Thức Ăn Cho Mèo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    🎾 Đồ Chơi Thú Cưng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    🦴 Phụ Kiện
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    💊 Thuốc & Vitamin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    🧼 Vệ Sinh
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    👕 Quần Áo Thú Cưng
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Thông Tin Liên Hệ</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Trụ Sở Chính</p>
                    <p className="text-gray-400">
                      Khu Công nghệ Cao
                      <br />
                     Hòa lạc<br />
                      TP. Hà Nội
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hotline</p>
                    <p className="text-gray-400">1900 1234 (24/7)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">support@ipet.vn</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Giờ Hỗ Trợ</p>
                    <p className="text-gray-400">24/7 - Tất cả các ngày</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Bảo Hành Chính Hãng</p>
                <p className="text-xs text-gray-400">100% sản phẩm chính hãng</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Giao Hàng Nhanh</p>
                <p className="text-xs text-gray-400">Miễn phí từ 500k</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Thanh Toán Đa Dạng</p>
                <p className="text-xs text-gray-400">ATM, Visa, MasterCard</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Hỗ Trợ 24/7</p>
                <p className="text-xs text-gray-400">Tư vấn chuyên nghiệp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">© 2024 iPet. Tất cả quyền được bảo lưu.</p>
              <p className="text-xs text-gray-500 mt-1">Giấy phép kinh doanh số: 0123456789 do Sở KH&ĐT TP.HCM cấp</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=30&width=50&text=VISA" alt="Visa" className="h-6" />
                <img src="/placeholder.svg?height=30&width=50&text=MC" alt="MasterCard" className="h-6" />
                <img src="/placeholder.svg?height=30&width=50&text=ATM" alt="ATM" className="h-6" />
              </div>

              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=30&width=80&text=DMCA" alt="DMCA Protected" className="h-8" />
                <img src="/placeholder.svg?height=30&width=80&text=SSL" alt="SSL Secured" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
