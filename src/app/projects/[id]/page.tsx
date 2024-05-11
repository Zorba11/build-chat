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
        <main className="flex min-h-screen justify-center h-[100vh] gap-10 p-20">
          <LeftPane />
          <RightPane />
        </main>
      </PageTransition>
    </AnimatePresence>
  )
}

export default Projects