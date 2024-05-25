import React, { useState } from 'react';
import { useStores } from '@/store/useStores';
import { observer } from 'mobx-react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactDOMServer from 'react-dom/server';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {};

const BrowserPreview = observer(({}: Props) => {
  const { codePreviewStore: { generatedComponent } } = useStores();
  const [showCode, setShowCode] = useState(false);

  const toggleView = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="relative flex flex-col max-w-[60%] w-[60%] max-lg-md p-4 mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh] justify-center items-center">
      {generatedComponent && (
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={toggleView}
        >
          {showCode ? 'Show Component' : 'Show Code'}
        </button>
      )}
      <AnimatePresence>
        {showCode && generatedComponent ? 
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 1.5 }}
          >
            <SyntaxHighlighter language="javascript" style={docco}>
              {React.isValidElement(generatedComponent) ? ReactDOMServer.renderToStaticMarkup(generatedComponent) : ""}
            </SyntaxHighlighter>
          </motion.div>
          :
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 2 }}
          >
            <div className="flex flex-grow justify-center items-center">
              {generatedComponent}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
}); 

export default BrowserPreview;
