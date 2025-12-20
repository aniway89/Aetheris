'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Dm from '@/app/(with-navbar)/chat/dm/dm'
import Chat from '@/app/(no-navbar)/(Chat)/message/[userID]/Chat'
import Profile from '@/app/(no-navbar)/Profilee/Profile'

const MIN_CHAT_WIDTH = 520
const MIN_DM_WIDTH = 260
const MIN_PROFILE_WIDTH = 260

export default function DesktopChatPage() {
  const [dmWidth, setDmWidth] = useState(320)
  const [profileWidth, setProfileWidth] = useState(300)

  const [dmVisible, setDmVisible] = useState(true)
  const [profileOpen, setProfileOpen] = useState(true)

  const resizing = useRef<'dm' | 'profile' | null>(null)

  /* ---------- UI LOCK ---------- */
  const lockUI = () => (document.body.style.userSelect = 'none')
  const unlockUI = () => (document.body.style.userSelect = '')

  /* ---------- SCREEN SAFETY ---------- */
  useEffect(() => {
    const check = () => {
      const screen = window.innerWidth
      const total =
        (dmVisible ? dmWidth : 0) +
        MIN_CHAT_WIDTH +
        (profileOpen ? profileWidth : 0)

      if (total > screen && profileOpen) {
        setProfileOpen(false)
      }
    }

    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [dmWidth, profileWidth, dmVisible, profileOpen])

  /* ---------- RESIZE HANDLER ---------- */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!resizing.current) return

      if (resizing.current === 'dm') {
        setDmWidth(w =>
          Math.min(420, Math.max(MIN_DM_WIDTH, w + e.movementX))
        )
      }

      if (resizing.current === 'profile') {
        setProfileWidth(w =>
          Math.min(360, Math.max(MIN_PROFILE_WIDTH, w - e.movementX))
        )
      }
    }

    const stop = () => {
      if (!resizing.current) return
      resizing.current = null
      unlockUI()
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', stop)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', stop)
    }
  }, [])

  /* ---------- SMART PROFILE TOGGLE ---------- */
  const handleProfileToggle = () => {
    const screen = window.innerWidth
    const need =
      (dmVisible ? dmWidth : 0) +
      MIN_CHAT_WIDTH +
      profileWidth

    if (!profileOpen && need > screen && dmVisible) {
      setDmVisible(false)
    }

    setProfileOpen(v => !v)
  }

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">

      {/* -------- DMs (SLIDE ANIMATED) -------- */}
      <AnimatePresence>
        {dmVisible && (
          <motion.div
            initial={{ x: -40, width: 0, opacity: 0 }}
            animate={{ x: 0, width: dmWidth, opacity: 1 }}
            exit={{ x: -40, width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative shrink-0 border-r border-neutral-800 overflow-hidden"
          >
            <Dm />

            {/* DM RESIZER */}
            <div
              onMouseDown={() => {
                resizing.current = 'dm'
                lockUI()
              }}
              className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-neutral-700/40"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------- CHAT -------- */}
      <div className="flex-1 min-w-0" style={{ minWidth: MIN_CHAT_WIDTH }}>
        <Chat
          params={{ userID: '1' }}
          onProfileToggle={handleProfileToggle}
          onDmToggle={() => setDmVisible(v => !v)}
          dmVisible={dmVisible}
        />
      </div>

      {/* -------- PROFILE -------- */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            style={{ width: profileWidth }}
            className="relative shrink-0 border-l border-neutral-800 bg-black"
          >
            <Profile />

            {/* PROFILE RESIZER */}
            <div
              onMouseDown={() => {
                resizing.current = 'profile'
                lockUI()
              }}
              className="absolute left-0 top-0 h-full w-1 cursor-col-resize hover:bg-neutral-700/40"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
