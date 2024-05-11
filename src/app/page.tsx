import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen h-[100vh] flex-col items-center justify-center">
      <Link href="/new-project" className="mb-4">
      <Button className="w-32">Create New</Button>
      </Link>
      <Link href="/projects/1">
        <Button className="w-32">Recent</Button>
      </Link>
    </main>
  );
}
