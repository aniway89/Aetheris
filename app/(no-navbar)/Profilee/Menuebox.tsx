import React from 'react'

const Menuebox = () => {
  return (
   <div className="w-[150px] gap-2 flex-col py-3  rounded-lg border border-neutral-700 flex items-center bg-neutral-950/60 backdrop-blur-xl absolute top-10 right-5 z-22 sr-only">
    <div className="menuebuttons flex w-full px-4">Copy Username</div>
    <div className="menuebuttons flex w-full px-4">Copy User ID</div>
    <div className="menuebuttons flex w-full px-4 text-red-700/90">Block</div>
    <div className="menuebuttons flex w-full px-4 text-red-700/90">Report</div>
   </div>

  )
}

export default Menuebox