import React from 'react'

const Menuebox = () => {
  return (
    <div className="w-[150px] flex-col   rounded-lg border border-neutral-700 flex items-center bg-neutral-950/60 backdrop-blur-xl absolute top-10 right-5 z-22 sr-">
      <div className="menuebuttons flex w-full px-4 text-xs hover:bg-neutral-900/20 cursor-pointer py-3 transition">Copy Username</div>
      <div className="menuebuttons flex w-full px-4 text-xs hover:bg-neutral-900/20 cursor-pointer py-3 transition">Copy User ID</div>
      <div className="menuebuttons flex w-full px-4 text-xs hover:bg-neutral-900/20 cursor-pointer py-3 transition text-red-700/90">Block</div>
      <div className="menuebuttons flex w-full px-4 text-xs hover:bg-neutral-900/20 cursor-pointer py-3 transition text-red-700/90">Report</div>
    </div>

  )
}

export default Menuebox