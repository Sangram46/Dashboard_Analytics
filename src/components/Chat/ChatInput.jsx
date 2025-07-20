import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSend(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-slate-800"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-r-lg hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
      >
        <FiSend className="w-5 h-5" />
      </button>
      
    </form>
  )
}

export default ChatInput