import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'
import Navbar from '../components/Dashboard/Navbar'
import ChatHistory from '../components/Chat/ChatHistory'
import ChatInput from '../components/Chat/ChatInput'
import { motion } from 'framer-motion'

const ChatPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Initial mock messages
    setMessages([
      {
        id: 1,
        text: 'Hello! How can I assist you today?',
        sender: 'assistant',
        timestamp: new Date(Date.now() - 60000),
      },
    ])
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = (message) => {
    if (!message.trim()) return

    const newUserMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setIsTyping(true)

    setTimeout(() => {
      const responses = [
        'I understand your question. Let me look that up for you.',
        'That\'s an interesting point. Here\'s what I found...',
        'Based on my knowledge, I would suggest...',
        'I can help with that. Here are the details...',
      ]
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)]

      const newAssistantMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'assistant',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, newAssistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />
        <main className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            <ChatHistory messages={messages} isTyping={isTyping} />
            <div ref={messagesEndRef} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 border-t border-gray-200 dark:border-slate-700"
          >
            <ChatInput onSend={handleSendMessage} />
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default ChatPage