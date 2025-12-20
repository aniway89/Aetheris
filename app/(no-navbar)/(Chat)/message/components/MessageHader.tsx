'use client'

import Link from 'next/link'
import { GoChevronLeft } from 'react-icons/go'
import { HiPhone, HiVideoCamera } from 'react-icons/hi'

interface MessageHeaderProps {
  onProfileToggle?: () => void
  onDmToggle?: () => void
  dmVisible?: boolean
}

const MessageHader = ({
  onProfileToggle,
  onDmToggle,
  dmVisible = true,
}: MessageHeaderProps) => {
  const userID = '12345'

  return (
    <div className="flex items-center justify-between p-3 border-b border-neutral-700 bg-black">

      <div className="flex items-center gap-2 min-w-0">

        <button onClick={onDmToggle}>
          <GoChevronLeft
            className={`text-xl transition-transform ${
              dmVisible ? '' : 'rotate-180'
            }`}
          />
        </button>

        <button onClick={onProfileToggle}>
          <img
            src="https://images.prismic.io/smi-blog/6c987520-81a6-4d03-acc3-2281bbb8b323_IMG_4795.jpg"
            className="w-8 h-8 rounded-full"
          />
        </button>

        <button
          onClick={onProfileToggle}
          className="font-bold truncate max-w-[160px]"
        >
          yoru.ayan.cat
        </button>
      </div>

      <div className="flex gap-2">
        <Link href={`/Vc/${userID}`} className="p-1.5 bg-neutral-900 rounded-full">
          <HiPhone />
        </Link>
        <Link href={`/Vc/${userID}`} className="p-1.5 bg-neutral-900 rounded-full">
          <HiVideoCamera />
        </Link>
      </div>
    </div>
  )
}

export default MessageHader
