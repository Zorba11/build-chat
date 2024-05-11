import Image from "next/image";
import Chat from "./components/Chat";
import BrowserPreview from "./components/BrowserPreview";
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';

export default function Home() {
  return (
    <main className="flex min-h-screen h-[100vh] flex-row p-24">
      <LeftPane />
      <RightPane />
    </main>
  );
}
