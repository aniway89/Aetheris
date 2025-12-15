import React from 'react'
import { FaCamera, FaMicrophone, FaPhone } from 'react-icons/fa'
import { HiChatBubbleOvalLeft } from 'react-icons/hi2'

const VcNavbar = () => {
  return (
    <div className="flex items-center justify-center w-full">
    <div className="flex items-center border px-8 py-3 backdrop-blur-lg justify-between w-[96%]  rounded-full bottom-0 border-neutral-700 bg-neutral-900/60">

        <div className="p-3 text-neutral-100 bg-neutral-900 text-xl rounded-full ">
            <FaCamera />
        </div>
        <div className="p-3 text-neutral-100 bg-neutral-900 text-xl rounded-full ">
            <FaMicrophone />
        </div>
        <div className="p-3 text-neutral-100 bg-neutral-900 text-xl rounded-full ">
            <HiChatBubbleOvalLeft />
        </div>
        <div className="p-3 text-neutral-100 bg-red-500/80  rotate-225 text-xl rounded-full ">
            <FaPhone />
        </div>
    </div>

    </div>
  )
}

export default VcNavbar