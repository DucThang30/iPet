"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot } from "lucide-react"

interface ChatMessage {
  type: "bot" | "user"
  message: string
}

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: "bot", message: "Xin chào! Tôi là trợ lý AI chăm sóc thú cưng iPet. Tôi có thể giúp gì cho bạn?" },
    { type: "user", message: "Chó của tôi bị tiêu chảy, tôi nên làm gì?" },
    {
      type: "bot",
      message:
        "Tiêu chảy ở chó có thể do nhiều nguyên nhân. Tôi khuyên bạn nên: 1) Cho chó nhịn ăn 12-24h, chỉ uống nước 2) Cho ăn thức ăn nhạt như cơm trắng + thịt gà luộc 3) Nếu tình trạng kéo dài >2 ngày, hãy đến bác sĩ thú y ngay.",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: "user", message: inputMessage }])
      setInputMessage("")

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: "Cảm ơn bạn đã liên hệ! Tôi sẽ tìm hiểu và trả lời câu hỏi của bạn ngay.",
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${chatOpen ? "w-80 h-96" : "w-14 h-14"}`}>
      {chatOpen ? (
        <Card className="w-full h-full flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">iPet AI Assistant</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-3">
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-3 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Nhập câu hỏi..."
                className="flex-1"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button size="sm" onClick={handleSendMessage}>
                Gửi
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Button
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          onClick={() => setChatOpen(true)}
        >
          <Bot className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}
