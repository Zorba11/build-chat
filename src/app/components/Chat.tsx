import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';
import { use, useEffect, useState } from 'react';
import BrowserPreview from './BrowserPreview';
import { useStores } from '@/store/useStores';
import { CoreMessage } from 'ai';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const {
      codePreviewStore: { generateUi },
    } = useStores();

    const handleClick = async () => {
      await generateUi(messages as CoreMessage[]);
    };

    // const handleSubmitWrapper = async (event) => {
    //   event.preventDefault();  // Prevent default form submission if handleSubmit doesn't do it.
      
    //   await handleSubmit(event);  // call original handleSubmit which sends the message.
    
    //   // Optionally, delay the UI generation to ensure response has been processed
    //   setTimeout(() => {
    //     generateUi(messages as CoreMessage[]);
    //   }, 1000); // Adjust delay as needed based on typical response times or handle via callback.
    // };

    const [prevMessagesLength, setPrevMessagesLength] = useState(0);

    useEffect(() => {
      const currentMessagesLength = (messages as CoreMessage[]).length;
      if (currentMessagesLength !== prevMessagesLength) {
        generateUi(messages as CoreMessage[]);
        setPrevMessagesLength(currentMessagesLength);
      }
    }, [messages.length]);



  return (
    <div className="flex flex-col w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
      <button onClick={handleClick}>Show Created UI</button>
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
      <form onSubmit={ handleSubmit}>
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
