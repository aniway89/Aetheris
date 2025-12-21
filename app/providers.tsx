'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from '@/lib/supabaseClient'
import type { Session } from '@supabase/supabase-js'

export default function Providers({
  children,
  initialSession,
}: {
  children: React.ReactNode
  initialSession?: Session | null
}) {
  const pathname = usePathname()

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={initialSession}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </SessionContextProvider>
  )
}
