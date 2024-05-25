'use server';

import { createStreamableUI } from 'ai/rsc';
import { GlowingStarsBackgroundCardPreview } from '../components/GlowingStarsBackgroundCardPreview';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import * as z from 'zod';

const htmlSchema = z.object({
  html: z.string().min(1).refine(htmlContent => {
    // Very minimal check for HTML tags
    return /<\/?[a-z][\s\S]*>/i.test(htmlContent);
  }, {
    message: "The generated string does not appear to be valid HTML.",
  })
});


const createUi = async (prompt: string) => {
  const generatedComponent = createStreamableUI();

  const result = await generateObject({
    model: openai("gpt-4-0125-preview"),
    mode: "auto",
    prompt: prompt,
    system: "You are an expert software frontend engineer and you should generate browser ui components based on the user's request",
    schema: htmlSchema,
  })

  generatedComponent.update(<div style={{ color: 'gray' }}>Loading...</div>);

  setTimeout(() => {
    if (!result.error) {
      generatedComponent.done(<div dangerouslySetInnerHTML={{ __html: result.object.html }} />);
    } else {
      generatedComponent.error(<div>Failed to load AI-generated HTML.</div>);
    }
  }, 400);

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
