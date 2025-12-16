import Link from 'next/link'
import React from 'react'
import { MdPersonAddAlt1 } from 'react-icons/md'

const AddFriend = () => {
  return (
    <Link href={'/AddFriend'} className="AddFriend flex items-center justify-center gap-2 p-2  rounded-full w-full max-w-[400px] text-sm cursor-pointer border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 transition">
        <MdPersonAddAlt1 
        className="text-xl"
        /> Add Friends
    </Link>
  )
}

export default AddFriend