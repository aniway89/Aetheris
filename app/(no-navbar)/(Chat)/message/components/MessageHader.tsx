'use client'

import Link from 'next/link'
import { GoChevronLeft } from 'react-icons/go'
import { HiPhone, HiVideoCamera } from 'react-icons/hi'

interface MessageHeaderProps {
  onProfileToggle?: () => void
}

const MessageHader = ({ onProfileToggle }: MessageHeaderProps) => {
  const userID = '12345'

  return (
    <div className="flex items-center justify-between p-3 border-b border-neutral-700 bg-black">

      {/* LEFT */}
      <div className="flex items-center gap-2 min-w-0">
        <GoChevronLeft className="text-xl cursor-pointer" />

        {/* avatar */}
        <button
          onClick={onProfileToggle}
          className="shrink-0"
        >
          <img
            src="https://images.prismic.io/smi-blog/6c987520-81a6-4d03-acc3-2281bbb8b323_IMG_4795.jpg?auto=compress,format"
            className="w-8 h-8 rounded-full"
          />
        </button>

        {/* username */}
        <button
          onClick={onProfileToggle}
          className="font-bold text-base truncate max-w-[160px] text-left hover:underline"
        >
          yoru.ayan.cat on cratwsa heres
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex gap-2">
        <Link
          href={`/Vc/${userID}`}
          className="p-1.5 rounded-full bg-neutral-900 text-sm"
        >
          <HiPhone />
        </Link>

        <Link
          href={`/Vc/${userID}`}
          className="p-1.5 rounded-full bg-neutral-900 text-sm"
        >
          <HiVideoCamera />
        </Link>
      </div>
    </div>
  )
}

export default MessageHader
