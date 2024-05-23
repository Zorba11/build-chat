'use server';

import { createStreamableUI } from 'ai/rsc';
import { GlowingStarsBackgroundCard } from './ui/glowing-stars';

const CreatedUi = async () => {
  const weatherUI = createStreamableUI();

  weatherUI.update(<div style={{ color: 'gray' }}>Loading...</div>);

  setTimeout(() => {
    weatherUI.done(
      <div className="flex py-20 items-center justify-center antialiased">
        <GlowingStarsBackgroundCard>
          <h1 className="text-3xl font-bold">Weather</h1>
          <p className="text-lg">It's sunny today!</p>
        </GlowingStarsBackgroundCard>
      </div>
    );
  }, 1000);

  return weatherUI.value;
};

export default CreatedUi;
