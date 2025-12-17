import React from 'react'

const Block = () => {
  return (
<div className="absolute bottom-0 px-8 py-3 bg-neutral-900/50 backdrop-blur-lg w-full flex flex-col gap-2 items-center text-center sr-only">
  <div className="w-7 h-1 bg-neutral-400 rounded-full" />

  <div className="text-xl font-semibold">Block user</div>

  <div className="text-xs text-neutral-400">
    Do you really want to block <span className="font-semibold text-white">username</span>?
  </div>

  <div className="text-xs text-neutral-500">
    You won’t see their messages, posts, or profile anymore.
  </div>

  <div className="text-[10px] text-neutral-500">
    They won’t be notified.
  </div>

  <button className="text-xs text-blue-400 hover:underline mt-1">
    Block and report
  </button>

  <button className="text-xs text-neutral-400 hover:text-neutral-200">
    Mute instead
  </button>

  <div className="w-full flex gap-2 pt-3 pb-4">
    <button className="w-full bg-neutral-200 text-black font-semibold py-2 rounded-sm">
      Block
    </button>

    <button className="w-full bg-neutral-950/20 text-neutral-200 font-semibold py-2 rounded-sm border border-neutral-700">
      Cancel
    </button>
  </div>
</div>

  )
}

export default Block