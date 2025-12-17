'use client'

import { useEffect, useRef, useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { IoSend } from 'react-icons/io5'

const TextArea = () => {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  // Auto grow textarea
  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height =
      Math.min(textareaRef.current.scrollHeight, 120) + 'px'
  }, [value])

  return (
    <div className="w-full p-4 bg-black border-t border-neutral-800 flex items-end gap-2">
      
      <button className="p-2 rounded-full bg-neutral-900">
        <IoMdAdd />
      </button>

      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text here"
        className="w-full resize-none max-h-[120px] py-2 px-3 rounded-xl bg-neutral-900 outline-none text-sm overflow-y-auto"
      />

      <button className="p-2 rounded-full bg-neutral-900">
        <IoSend />
      </button>

      <button className="p-2 rounded-full bg-neutral-900">
        <FaMicrophone />
      </button>

    </div>
  )
}

export default TextArea
