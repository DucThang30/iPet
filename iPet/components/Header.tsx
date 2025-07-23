"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ShoppingCart, User, Grid, Menu, X, Phone, Mail, Clock } from "lucide-react"

interface HeaderProps {
  currentView: string
  setCurrentView: (view: string) => void
  isLoggedIn: boolean
  cartItems: any[]
  categories: Array<{
    name: string
    icon: string
    count: number
  }>
  onSearch: (searchTerm: string) => void
  onCategoryFilter: (categoryName: string) => void
}

export default function Header({
  currentView,
  setCurrentView,
  isLoggedIn,
  cartItems,
  categories,
  onSearch,
  onCategoryFilter,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Cập nhật Header để có chức năng tìm kiếm thực tế
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Thêm hàm xử lý tìm kiếm
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      onSearch(searchInput.trim())
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Hotline: 1900 1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@ipet.vn</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>🚚 Miễn phí vận chuyển đơn từ 500k</span>
              <span>🎁 Ưu đãi thành viên mới -20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 bg-white border-b border-gray-200 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <div className="cursor-pointer" onClick={() => setCurrentView("home")}>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  iPet
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Thương mại thú cưng #1</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              {/* Cập nhật search bar để có chức năng thực tế */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <Input
                  placeholder="Tìm kiếm sản phẩm, dịch vụ, cửa hàng..."
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 focus:border-blue-500 rounded-full"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Tìm
                </Button>
              </form>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setCurrentView("stores")} className="hidden lg:flex">
                <MapPin className="w-4 h-4 mr-2" />
                Cửa Hàng
              </Button>

              {/* Cập nhật cart button để hiển thị số lượng thực tế */}
              <Button variant="ghost" size="sm" className="relative" onClick={() => setCurrentView("cart")}>
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>

              {isLoggedIn ? (
                <Button variant="ghost" size="sm" onClick={() => setCurrentView("profile")}>
                  <User className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              ) : (
                <Button size="sm" onClick={() => setCurrentView("login")}>
                  Đăng Nhập
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <Input
                placeholder="Tìm kiếm..."
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 focus:border-blue-500 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Categories Bar */}
          <div className="border-t border-gray-100 py-2 hidden md:block">
            <div className="flex items-center space-x-6 overflow-x-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView("products")}
                className="whitespace-nowrap"
              >
                <Grid className="w-4 h-4 mr-2" />
                Tất Cả
              </Button>
              {/* Cập nhật categories để có chức năng lọc */}
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="ghost"
                  size="sm"
                  className="whitespace-nowrap hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => onCategoryFilter(category.name)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setCurrentView("home")
                  setMobileMenuOpen(false)
                }}
              >
                🏠 Trang Chủ
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setCurrentView("products")
                  setMobileMenuOpen(false)
                }}
              >
                🛍️ Sản Phẩm
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setCurrentView("stores")
                  setMobileMenuOpen(false)
                }}
              >
                🏪 Cửa Hàng
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setCurrentView("forum")
                  setMobileMenuOpen(false)
                }}
              >
                💬 Diễn Đàn
              </Button>

              {/* Mobile Categories */}
              <div className="border-t pt-2 mt-2">
                <p className="text-sm font-semibold text-gray-600 mb-2">Danh Mục</p>
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setCurrentView("products")
                      setMobileMenuOpen(false)
                    }}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
