'use client'

import { useEffect, useRef } from 'react'
import MessageHader from '@/app/(no-navbar)/(Chat)/message/components/MessageHader'
import Userchat from '../components/Userchat'
import YourChat from '../components/YourChat'
import TextArea from '../components/TextArea'
import Vclog from '../components/Vclog'

interface Props {
  params: { userID: string }
  onProfileToggle?: () => void
  onDmToggle?: () => void
  dmVisible?: boolean
}

export default function Chat({
  params,
  onProfileToggle,
  onDmToggle,
  dmVisible = true,
}: Props) {
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chatContainerRef.current) return
    chatContainerRef.current.scrollTop =
      chatContainerRef.current.scrollHeight
  }, [])

  return (
    <div className="flex flex-col w-full h-screen bg-black">

      <MessageHader
        onProfileToggle={onProfileToggle}
        onDmToggle={onDmToggle}
        dmVisible={dmVisible}
      />

      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden scollabar-hide"
      >
        <div className="min-h-full flex flex-col justify-end px-2 py-2">
          <Userchat />
          <YourChat />
          <Userchat />
          <YourChat />
          <Vclog />
        </div>
      </div>

      <TextArea />
    </div>
  )
}
