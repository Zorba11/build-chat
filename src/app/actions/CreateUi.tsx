'use server';

import { createStreamableUI } from 'ai/rsc';
import { GlowingStarsBackgroundCard } from '../components/ui/glowing-stars';
// import ReactDOMServer from 'react-dom/server';
// import React from 'react';

const createUi = async () => {
  const generatedComponent = createStreamableUI();

  generatedComponent.update(<div style={{ color: 'gray' }}>Loading...</div>);

  setTimeout(() => {
    generatedComponent.done(
      <div className="flex py-20 items-center justify-center antialiased">
        <GlowingStarsBackgroundCard>
          <h1 className="text-3xl font-bold">Weather</h1>
          <p className="text-lg">It's sunny today!</p>
        </GlowingStarsBackgroundCard>
      </div>
    );
  }, 1000);

  return generatedComponent.value;
};

export default createUi;

// const createUi = async () => {
//   const generatedComponent = createStreamableUI();
//   const element = (
//     <div className="flex py-20 items-center justify-center antialiased">
//       <GlowingStarsBackgroundCard>
//         <h1 className="text-3xl font-bold">Weather</h1>
//         <p className="text-lg">It's sunny today!</p>
//       </GlowingStarsBackgroundCard>
//     </div>
//   );

//   generatedComponent.update(<div style={{ color: 'gray' }}>Loading...</div>);

//   // Render the element to a string
//   const html = ReactDOMServer.renderToString(element);

//   setTimeout(() => {
//     generatedComponent.done(html);
//   }, 1000);

//   return generatedComponent.value;
// };

// export default createUi;
