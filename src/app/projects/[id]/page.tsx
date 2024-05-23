"use client"
import Chat from '@/app/components/Chat'
import LeftPane from '@/app/components/LeftPane'
import RightPane from '@/app/components/RightPane'
import PageTransition from '@/components/PageTransition'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <main className="flex flex-row min-h-screen h-[100%] w-[100%] p-5 mt-10">
          <LeftPane />
          <RightPane />
        </main>
      </PageTransition>
    </AnimatePresence>
  );
}

export default Projects