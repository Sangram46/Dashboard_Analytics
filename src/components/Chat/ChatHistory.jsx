import ChatBubble from './ChatBubble'

const ChatHistory = ({ messages, isTyping }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      {isTyping && (
        <ChatBubble
          message={{
            id: 'typing',
            text: '',
            sender: 'assistant',
            timestamp: new Date(),
          }}
          isTyping={true}
        />
      )}
    </div>
  )
}

export default ChatHistory