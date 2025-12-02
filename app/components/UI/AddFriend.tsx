import React from 'react'
import { MdPersonAddAlt1 } from 'react-icons/md'

const AddFriend = () => {
  return (
    <div className="AddFriend flex items-center justify-center gap-2 p-2  rounded-full w-full max-w-[400px] text-sm cursor-pointer bg-neutral-900 hover:bg-neutral-800 transition">
        <MdPersonAddAlt1 
        className="text-xl"
        /> Add Friends
    </div>
  )
}

export default AddFriend