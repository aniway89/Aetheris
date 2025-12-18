'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { HiXCircle } from 'react-icons/hi'

const ProfileEdit = () => {
    const [about, setAbout] = useState('')
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value

        // 🔒 Max 2 consecutive empty lines
        value = value.replace(/\n{3,}/g, '\n\n')

        // 🔒 200 char limit safety
        if (value.length > 200) return

        setAbout(value)
    }

    // 🔥 Auto-grow textarea (4 lines → max-h-80)
    useEffect(() => {
        const el = textareaRef.current
        if (!el) return

        el.style.height = 'auto'
        el.style.height = `${el.scrollHeight}px`
    }, [about])

    return (
        <div className="flex flex-col ">
            <div className="flex items-center justify-between px-2 py-4">
                <Link href={'/Profile'} className="flex items-center text-xl font-semibold gap-4">
                    <FaArrowLeftLong
                        className='text-neutral-300'
                    />
                    Profile

                </Link>
                <div className="save text-sm text-blue-400 hover:text-blue-500 transition ">Save</div>
            </div>
            {/* Banner */}
            <div className="w-full h-40 overflow-hidden flex items-center justify-center relative">
                <img
                    src="https://i.pinimg.com/originals/ab/12/29/ab12297c17aea188fa41e7818706b961.gif"
                    alt=""
                    className="min-h-40 w-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
                    <FaCamera />
                </div>
            </div>

            {/* Profile */}
            <div className="flex items-center">
                <div className="User-pfp w-26 h-26 rounded-full border-6 border-black ml-5 -mt-13 overflow-hidden relative">
                    <img
                        src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyMHV5dm55dmYwNnpreW1jaGk4bDN0MDdpdzg5NDZ1YXRnOTdsMmxkYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8ArzbGWLVNQzRv1aAL/200w.gif"
                        alt=""
                    />
                    <div className="absolute bottom-0 w-full bg-neutral-900/40 p-1 flex items-center justify-center">
                        <FaCamera />
                    </div>
                </div>
                <div className="  flex flex-items-center py-1 px-3 text-sm text-neutral-500 z-3 border -mt- ml- rounded-lg bg-neutral-900 border-neutral-700  max-w-[200px]">
                    <div className="max-w-2 max-h-2 min-h-2 min-w-2 rounded-full bg-neutral-900 -mt-1 -ml-7 border  absolute"></div>
                    <div className="max-w-3 max-h-3 min-h-3 min-w-3 rounded-full bg-neutral-900 -mt-2 -ml-4 border-t  absolute"></div>
                    <div className="Message">Hi guy asdasdasd</div>
                </div>
            </div>

            {/* Info */}
            <div className="w-full flex flex-col px-5 mt-2">
                <div className="text-lg font-semibold">!Yoru.Ayan.lEgend</div>
                <div className="flex items-center text-neutral-400 gap-1 text-sm">
                    <span>@ayan124</span>
                    <span className="w-1 h-1 bg-neutral-400 rounded-full" />
                    <span>Cat</span>
                </div>
            </div>

            {/* Editor */}
            <div className="editor px-10 py-5 flex flex-col gap-4">
                {/* Display Name */}
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-neutral-400 font-semibold">Display Name</div>
                    <div className="flex items-center bg-neutral-900 px-4 py-2 border border-neutral-800 rounded-xl">
                        <input
                            type="text"
                            className="outline-none w-full text-sm bg-transparent"
                            placeholder="Userdisplayname"
                        />
                        <HiXCircle className="text-neutral-300 text-lg" />
                    </div>
                </div>

                {/* Pronouns */}
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-neutral-400 font-semibold">Pronouns</div>
                    <div className="flex items-center bg-neutral-900 px-4 py-2 border border-neutral-800 rounded-xl">
                        <input
                            type="text"
                            className="outline-none w-full text-sm bg-transparent"
                            placeholder="Pronouns"
                        />
                        <HiXCircle className="text-neutral-300 text-lg" />
                    </div>
                </div>

                {/* About Me */}
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-neutral-400 font-semibold">About Me</div>
                    <div className="bg-neutral-900 px-4 py-2 border border-neutral-800 rounded-xl">
                        <textarea
                            ref={textareaRef}
                            value={about}
                            onChange={handleAboutChange}
                            placeholder="About me"
                            rows={4}
                            maxLength={200}
                            className="
                w-full
                bg-transparent
                text-sm
                leading-6
                text-white
                outline-none
                resize-none
                whitespace-pre-wrap
                overflow-hidden
                min-h-[6rem]
                max-h-80
              "
                        />
                        <div className="text-xs text-neutral-500 text-right mt-1">
                            {about.length}/200
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
