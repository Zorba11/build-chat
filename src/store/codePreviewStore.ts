import { continueConversation } from "@/app/actions/continueConversation";
import createUi from "@/app/actions/CreateUi";
import { CoreMessage } from "ai";
import { makeAutoObservable } from "mobx";

export interface ICodePreviewStore {
  generateUi: (messages: CoreMessage[]) => Promise<void>;
  generatedComponent: JSX.Element | null | string;
}

export class CodePreviewStore implements ICodePreviewStore {
  generatedComponent: JSX.Element | null | string = null;
  constructor() {
    makeAutoObservable(this);
    this.generatedComponent = null;
    this.generateUi = this.generateUi.bind(this);
  }

  async generateUi(messages: CoreMessage[]): Promise<void> {
    console.log("heres the msg: ", messages[messages.length - 1]);
    const result = await createUi(
      messages[messages.length - 1].content as string
    );
    this.generatedComponent = result;
    console.log("Generated UI:", result);
  }
}
