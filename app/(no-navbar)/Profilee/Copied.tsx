import React from 'react'
import { LuCopy } from 'react-icons/lu'

const Copied = () => {
  return (
    <div className="flex flex-col items-center w-full absolute top-2 sr-only">

    <div className=" rounded-full bg-neutral-900/70 backdrop-blur-lg  flex items-center px-4 py-2 gap-2">
        <LuCopy /> Copied !
    </div>
    </div>
  )
}

export default Copied