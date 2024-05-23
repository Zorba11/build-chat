import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
      <AnimatePresence>
        {messages.map((m) => (
          <motion.div
            key={m.id}
            className={`whitespace-pre-wrap p-2 my-2 rounded ${
              m.role === 'user'
                ? 'border-blue-500 bg-blue-100 text-blue-500'
                : 'border-green-500 bg-green-100 text-green-500'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </motion.div>
        ))}
      </AnimatePresence>
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-5 right-30 w-[100%] max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
