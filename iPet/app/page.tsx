"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Plus } from "lucide-react"

// Components
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ChatBot from "@/components/ChatBot"
import ProductDetailModal from "@/components/ProductDetailModal"
import StoreDetailModal from "@/components/StoreDetailModal"

// Views
import HomeView from "@/views/HomeView"
import ProductsView from "@/views/ProductsView"
import StoresView from "@/views/StoresView"

// Data
import { categories, products, stores } from "@/data/mockData"

export default function iPetMarketplace() {
  const [currentView, setCurrentView] = useState("home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // Thêm state cho cart và wishlist
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedStore, setSelectedStore] = useState(null)
  const [viewMode, setViewMode] = useState("grid")

  // Thêm các hàm xử lý
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    // Hiển thị thông báo thành công
    alert(`Đã thêm ${product.name} vào giỏ hàng!`)
  }

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlistItems.find((item) => item.id === product.id)
    if (isInWishlist) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id))
      alert(`Đã xóa ${product.name} khỏi danh sách yêu thích!`)
    } else {
      setWishlistItems([...wishlistItems, product])
      alert(`Đã thêm ${product.name} vào danh sách yêu thích!`)
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentView("products")
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    setCurrentView("products")
  }

  // Lọc sản phẩm theo tìm kiếm và danh mục
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Login View
  const LoginView = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-md w-full mx-4">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">🐾</span>
            </div>
            <CardTitle className="text-2xl">Chào Mừng Đến iPet</CardTitle>
            <p className="text-gray-600">Đăng nhập để trải nghiệm đầy đủ</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Email hoặc số điện thoại" className="h-12" />
            <Input type="password" placeholder="Mật khẩu" className="h-12" />
            <Button
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => setIsLoggedIn(true)}
            >
              Đăng Nhập
            </Button>
            <div className="text-center">
              <Button variant="link">Quên mật khẩu?</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Hoặc</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 bg-transparent">
                <span className="mr-2">📘</span>
                Facebook
              </Button>
              <Button variant="outline" className="h-12 bg-transparent">
                <span className="mr-2">🔍</span>
                Google
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Chưa có tài khoản?{" "}
                <Button variant="link" className="p-0 h-auto font-semibold text-blue-600">
                  Đăng ký ngay
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Profile View
  const ProfileView = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Nguyễn Văn A</h1>
              <p className="text-gray-600">nguyenvana@email.com</p>
              <p className="text-sm text-gray-500">Thành viên từ: 15/01/2024</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white rounded-xl p-1">
            <TabsTrigger value="orders" className="rounded-lg">
              Đơn Hàng
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-lg">
              Đánh Giá
            </TabsTrigger>
            <TabsTrigger value="favorites" className="rounded-lg">
              Yêu Thích
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-lg">
              Cài Đặt
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Đơn Hàng Của Tôi</h2>
              {[1, 2, 3].map((order) => (
                <Card key={order} className="mb-4 border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Đơn hàng #iPET{order}001</p>
                        <p className="text-sm text-gray-600">Ngày đặt: 15/12/2024</p>
                        <p className="text-sm text-gray-600">Tổng tiền: {(order * 500000).toLocaleString()}đ</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Đang giao
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Đánh Giá Của Tôi</h2>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <p className="text-gray-600">Bạn chưa có đánh giá nào.</p>
                <Button className="mt-4 bg-transparent" variant="outline">
                  Khám Phá Sản Phẩm
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Sản Phẩm Yêu Thích</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.slice(0, 3).map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow border-0"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <CardContent className="p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                      <p className="text-red-600 font-bold">{product.price.toLocaleString()}đ</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Cài Đặt Tài Khoản</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <Input placeholder="Họ và tên" defaultValue="Nguyễn Văn A" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input placeholder="Email" defaultValue="nguyenvana@email.com" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <Input placeholder="Số điện thoại" defaultValue="0901234567" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                  <Input placeholder="Địa chỉ" defaultValue="123 Đường ABC, Quận 1, TP.HCM" className="h-12" />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Cập Nhật Thông Tin
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  // Forum View
  const ForumView = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Diễn Đàn Hỏi Đáp iPet</h1>
              <p className="text-gray-600">Cộng đồng yêu thú cưng chia sẻ kinh nghiệm</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Đặt Câu Hỏi
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Chó của tôi bị tiêu chảy, tôi nên làm gì?",
                author: "Nguyễn Văn A",
                time: "2 giờ trước",
                answers: 5,
                views: 123,
                category: "Sức Khỏe",
                urgent: true,
              },
              {
                title: "Thức ăn nào tốt nhất cho mèo con 2 tháng tuổi?",
                author: "Trần Thị B",
                time: "4 giờ trước",
                answers: 8,
                views: 256,
                category: "Dinh Dưỡng",
                urgent: false,
              },
              {
                title: "Cách huấn luyện chó đi vệ sinh đúng chỗ?",
                author: "Lê Văn C",
                time: "1 ngày trước",
                answers: 12,
                views: 489,
                category: "Huấn Luyện",
                urgent: false,
              },
            ].map((question, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            question.category === "Sức Khỏe"
                              ? "bg-red-100 text-red-800"
                              : question.category === "Dinh Dưỡng"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {question.category}
                        </span>
                        {question.urgent && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                            Khẩn Cấp
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">
                        {question.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <span>Bởi {question.author}</span>
                        <span>{question.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">💬 {question.answers} trả lời</span>
                      <span className="flex items-center">👁️ {question.views} lượt xem</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Trả lời →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Cart View
  const CartView = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Giỏ Hàng Của Tôi ({cartItems.length} sản phẩm)</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🛒</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Giỏ hàng trống</h2>
            <p className="text-gray-600 mb-6">Hãy thêm sản phẩm yêu thích vào giỏ hàng!</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600" onClick={() => setCurrentView("products")}>
              Mua Sắm Ngay
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.seller}</p>
                      <p className="text-red-600 font-bold">{item.price.toLocaleString()}đ</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (item.quantity > 1) {
                            setCartItems(
                              cartItems.map((cartItem) =>
                                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
                              ),
                            )
                          }
                        }}
                      >
                        -
                      </Button>
                      <span className="px-4 py-2">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setCartItems(
                            cartItems.map((cartItem) =>
                              cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
                            ),
                          )
                        }}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600"
                      onClick={() => {
                        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
                      }}
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Tổng cộng:</span>
                <span className="text-2xl font-bold text-red-600">
                  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}đ
                </span>
              </div>
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600">Thanh Toán</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        isLoggedIn={isLoggedIn}
        cartItems={cartItems}
        categories={categories}
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
      />

      <main className="min-h-screen">
        {currentView === "home" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <HomeView
              categories={categories}
              products={products}
              stores={stores}
              setCurrentView={setCurrentView}
              onProductClick={setSelectedProduct}
              onStoreClick={setSelectedStore}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              onCategoryFilter={handleCategoryFilter}
            />
          </div>
        )}
        {currentView === "products" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ProductsView
              products={filteredProducts}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onProductClick={setSelectedProduct}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </div>
        )}
        {currentView === "stores" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <StoresView stores={stores} onStoreClick={setSelectedStore} />
          </div>
        )}
        {currentView === "login" && <LoginView />}
        {currentView === "profile" && isLoggedIn && <ProfileView />}
        {currentView === "forum" && <ForumView />}
        {currentView === "cart" && <CartView />}
      </main>

      <Footer />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        handleAddToCart={handleAddToCart}
        handleAddToWishlist={handleAddToWishlist}
      />
      <StoreDetailModal store={selectedStore} onClose={() => setSelectedStore(null)} />

      {/* AI Chatbot */}
      <ChatBot />

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
        <div className="flex justify-around py-2">
          <Button variant="ghost" size="sm" onClick={() => setCurrentView("home")}>
            <div className="text-center">
              <div className="text-2xl">🏠</div>
              <div className="text-xs">Trang Chủ</div>
            </div>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setCurrentView("products")}>
            <div className="text-center">
              <div className="text-2xl">🛍️</div>
              <div className="text-xs">Sản Phẩm</div>
            </div>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setCurrentView("stores")}>
            <div className="text-center">
              <div className="text-2xl">🏪</div>
              <div className="text-xs">Cửa Hàng</div>
            </div>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setCurrentView("forum")}>
            <div className="text-center">
              <div className="text-2xl">💬</div>
              <div className="text-xs">Diễn Đàn</div>
            </div>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setCurrentView(isLoggedIn ? "profile" : "login")}>
            <div className="text-center">
              <div className="text-2xl">👤</div>
              <div className="text-xs">Tài Khoản</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
