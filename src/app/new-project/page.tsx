"use client"
import PageTransition from '@/components/PageTransition'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'

type Props = {}

const Page = (props: Props) => {
  useEffect(() => {
    // Call the Next.js backend API 'create-new'
    fetch('/api/create-new')
      .then(async (response) => {
        // Handle the response as needed
        const data = await response.json();

        if (response.ok) {
          // Successful response
          alert(`API response: ${data.message}`);
        } else {
          // Error response
          alert(`API response: ${data.message}`);
        }

      })
      .catch(error => {
        // Handle any errors
        console.error('API error:', error);
      });
  }, []);

  return (
    <AnimatePresence mode="wait">
    <PageTransition>
    <div className="flex justify-center items-center h-screen">
          <ul className="text-center">
        <li>
        Creating New Next Js Project...
        </li>
        <li>
        Executing commands...
        </li>
        <li>
        Installing dependencies...
        </li>
        <li>
          Creating pages...
        </li>
        <li>
          Running Preview...
        </li>
        <li>
          You will routed to the builder page now
        </li>
      </ul>
      </div>
    </PageTransition>
    </AnimatePresence>
  )
}

export default Page