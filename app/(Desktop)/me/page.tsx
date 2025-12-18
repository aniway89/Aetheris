'use client'

import { useState, useEffect } from 'react'
import Dm from '@/app/(with-navbar)/chat/dm/dm'
import Chat from '@/app/(no-navbar)/(Chat)/message/[userID]/Chat'
import Profile from '@/app/(no-navbar)/Profilee/Profile'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
    const [profileOpen, setProfileOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)')
        const handler = () => setIsDesktop(mq.matches)
        handler()
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    return (
        <div className="h-[100dvh] w-full flex bg-black overflow-hidden">

            {/* LEFT */}
            <div className="w-80 border-r border-neutral-800 hidden lg:block">
                <Dm />
            </div>

            {/* CENTER */}
            <div
                className="flex-1 relative"
                onClick={() => isDesktop && profileOpen && setProfileOpen(false)}
            >
                <Chat
                    params={{ userID: '1' }}
                    onProfileToggle={() => setProfileOpen(v => !v)}
                />
            </div>

            {/* DESKTOP PROFILE */}
            <AnimatePresence>
                {profileOpen && isDesktop && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 260 }}
                        className="w-78 border-l border-neutral-800 bg-black"
                    >
                        <Profile />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MOBILE PROFILE */}
            <AnimatePresence>
                {profileOpen && !isDesktop && (
                    <>
                        {/* backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setProfileOpen(false)}
                        />

                        {/* sheet */}
                        <motion.div
                            className="fixed bottom-0 left-0 right-0 h-[85dvh] bg-black rounded-t-2xl z-50"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                        >
                            <Profile />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
