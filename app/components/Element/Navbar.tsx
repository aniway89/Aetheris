'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { motion } from 'framer-motion'

const iconVariants = {
  idle: { scale: 1 },
  active: { scale: 1 },
  tap: { scale: 0.6 },
}

const avatarVariants = {
  idle: { scale: 1 },
  active: { scale: 1 },
  tap: { scale: 0.6 },
}

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => pathname.startsWith(path)

  const handleProfileClick = () => {
    router.push(pathname === '/Profile' ? '/Setting' : '/Profile')
  }

  return (
    <nav
      className="
        fixed bottom-[1%] left-1/2 -translate-x-1/2
        w-[90%]
        flex items-center justify-between
        px-8 py-3
        rounded-full
        border border-neutral-700
        bg-neutral-900/60
        backdrop-blur-md
        z-33
      "
    >
      {/* Home */}
      <Link href="/chat/dm">
        <motion.div
          variants={iconVariants}
          initial="idle"
          animate={isActive('/chat/dm') ? 'active' : 'idle'}
          whileTap="tap"
          className={`text-2xl transition-colors ${
            isActive('/chat/dm') ? 'text-white' : 'text-neutral-400'
          }`}
        >
          <AiFillHome />
        </motion.div>
      </Link>

      {/* Notifications */}
      <Link href="/chat/notifications">
        <motion.div
          variants={iconVariants}
          initial="idle"
          animate={isActive('/chat/notifications') ? 'active' : 'idle'}
          whileTap="tap"
          className={`text-2xl transition-colors ${
            isActive('/chat/notifications')
              ? 'text-white'
              : 'text-neutral-400'
          }`}
        >
          <MdNotifications />
        </motion.div>
      </Link>

      {/* Profile (stronger pop) */}
      <motion.button
        onClick={handleProfileClick}
        variants={avatarVariants}
        initial="idle"
        animate={
          isActive('/Profile') || isActive('/Setting')
            ? 'active'
            : 'idle'
        }
        whileTap="tap"
        className="
          w-7 h-7
          rounded-full
          overflow-hidden
          border border-neutral-700
        "
      >
        <img
          src="https://media.tenor.com/-NwTf2KhmUoAAAAM/anime.gif"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </motion.button>
    </nav>
  )
}

export default Navbar
