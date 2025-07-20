import { motion } from 'framer-motion'
import { FiUser, FiMessageSquare } from 'react-icons/fi'

const ChatBubble = ({ message, isTyping }) => {
  const isAssistant = message.sender === 'assistant'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex mb-4 ${isAssistant ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`flex max-w-xs md:max-w-md lg:max-w-lg ${
          isAssistant ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
            isAssistant
              ? 'bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark'
              : 'bg-secondary-light/10 dark:bg-secondary-dark/10 text-secondary-light dark:text-secondary-dark'
          }`}
        >
          {isAssistant ? <FiMessageSquare /> : <FiUser />}
        </div>
        <div
          className={`ml-3 mr-3 py-2 px-4 rounded-lg ${
            isAssistant
              ? 'bg-gray-100 dark:bg-slate-700'
              : 'bg-primary-light dark:bg-primary-dark text-white'
          }`}
        >
          {isTyping ? (
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
              <div
                className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          ) : (
            <p>{message.text}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ChatBubble