import { useStores } from '@/store/useStores';
import { observer } from 'mobx-react';

type Props = {};

const BrowserPreview = observer(({}: Props) => {
  const {
    codePreviewStore: { generatedComponent },
  } = useStores();

  return (
    <>
      {/* <iframe src="http://localhost:3001" width="100%" height="100%" title="Preview Area"></iframe> */}
      <div className="flex flex-col w-[60%] max-lg-md p-4 mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        {generatedComponent}
      </div>
      {/* <GlowingStarsBackgroundCardPreview /> */}
    </>
  );
}); 

export default BrowserPreview;
