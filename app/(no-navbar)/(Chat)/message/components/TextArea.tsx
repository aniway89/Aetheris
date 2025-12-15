import React from 'react'
import { FaMicrophone } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { IoSend } from 'react-icons/io5'


const TextArea = () => {
    return (
        <div className=' w-full bottom-0 p-4  bg-black sticky flex items-center gap-2 '>
            <div className="ca_button  p-2 rounded-full cursor-pointer bg-neutral-900 flex items-center justify-center text-center">
             <IoMdAdd />
            </div>
            <input type="text "
                className='w-full scollabar-hide py-2 px-3  rounded-full cursor-pointer bg-neutral-900 outline-none' 
                placeholder='Enter Text here'
            />
            <div className="ca_button  p-2 rounded-full cursor-pointer bg-neutral-900 flex items-center justify-center text-center">
            <IoSend />
            </div>
            <div className="ca_button  p-2 rounded-full cursor-pointer bg-neutral-900 flex items-center justify-center text-center">
            <FaMicrophone />
            </div>
        </div>
    )
}

export default TextArea