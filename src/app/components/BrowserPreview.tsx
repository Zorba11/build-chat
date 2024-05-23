import { useChat } from 'ai/react';
import React, { useState } from 'react';
import CreatedUi from './CreatedUi';
import { GlowingStarsBackgroundCardPreview } from './GlowingStarsBackgroundCardPreview';

type Props = {};

const BrowserPreview = (props: Props) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [streamedUi, setStreamedUi] = useState(null);

  return (
    <>
      {/* <iframe src="http://localhost:3001" width="100%" height="100%" title="Preview Area"></iframe> */}
      <div className="flex flex-col w-[60%] max-lg-md p-4 mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        {/* <CreatedUi /> */}
        <button
          onClick={async () => {
            const streamedUiFetched = await CreatedUi();
            setStreamedUi(streamedUiFetched);
          }}
        >
          What's the weather?
        </button>

        {streamedUi}
      </div>
      {/* <GlowingStarsBackgroundCardPreview /> */}
    </>
  );
};

export default BrowserPreview;
