import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <Chat />
    </main>
  );
}
