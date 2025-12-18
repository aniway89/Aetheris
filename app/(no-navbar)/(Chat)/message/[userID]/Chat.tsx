'use client'

import { useEffect, useRef } from 'react'
import MessageHader from '@/app/(no-navbar)/(Chat)/message/components/MessageHader'
import Userchat from '../components/Userchat'
import YourChat from '../components/YourChat'
import TextArea from '../components/TextArea'
import Vclog from '../components/Vclog'

interface Props {
    params: {
        userID: string
    }
    onProfileToggle?: () => void // new
}

export default function Chat({ params, onProfileToggle }: Props) {
    const chatContainerRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom on mount and keep it there
    useEffect(() => {
        const scrollToBottom = () => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop =
                    chatContainerRef.current.scrollHeight
            }
        }

        scrollToBottom()
        const timer = setTimeout(scrollToBottom, 100)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col w-full h-[100dvh] bg-black">

            {/* HEADER — scrolls out when keyboard opens */}
            <div className="shrink-0">
                <MessageHader onProfileToggle={onProfileToggle} />
            </div>

            {/* MESSAGE LIST — scrollable, messages stick to bottom */}
            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto overflow-x-hidden scollabar-hide"
            >
                <div className="min-h-full flex flex-col justify-end px-2 py-2">
                    <div className="flex flex-col gap-2">
                        <Userchat />
                        <YourChat />
                        <Userchat />
                        <YourChat />
                        <Vclog />
                    </div>
                </div>
            </div>

            {/* INPUT — moves up with keyboard */}
            <div className="shrink-0">
                <TextArea />
            </div>

        </div>
    )
}
