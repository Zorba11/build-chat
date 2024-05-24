import { continueConversation } from '@/app/actions/continueConversation';
import createUi from '@/app/actions/CreateUi';
import { CoreMessage } from 'ai';
import { makeAutoObservable } from 'mobx';

export interface ICodePreviewStore {
  generateUi: (messages: CoreMessage[]) => Promise<void>;
  generatedComponent: JSX.Element | null;
}

export class CodePreviewStore implements ICodePreviewStore {
  generatedComponent: JSX.Element | null = null;
  constructor() {
    makeAutoObservable(this);
    this.generatedComponent = null;
    this.generateUi = this.generateUi.bind(this);
  }

  async generateUi(messages: CoreMessage[]): Promise<void> {
    const result = await createUi();
    this.generatedComponent = result;
    console.log('Generated UI:', result);
  }
}
