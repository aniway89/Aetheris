import React from 'react'

const FreiendReq = () => {
  return (
    <div className="FriendReq flex items-center gap-2 border border-neutral-800  w-full px-2 py-2 rounded-2xl items-center">
        <img 
        src="https://s3-alpha.figma.com/hub/file/1745661902/08a40780-b6e6-4d69-9e99-52b45c9523e2-cover.png" 
        alt="" 
        className="w-13 h-13 rounded-full" />
        <div className="flex flex-col w-full">
            <div className="username font-semibold text">Yoru</div>
            <div className="text-neutral-400 text-xs time-of-req">32 minut ago</div>
        </div>
        <div className="accepet-denied flex-gap-2 flex items-center gap-2 w-full">
            <div className="px-2 py-1 text-sm font-semibold text-black rounded-lg bg-neutral-100">Accept</div>
            <div className="px-2 py-1 text-sm font-semibold  rounded-lg border border-neutral-800">Denyey</div>
           
        </div>
    </div>
  )
}

export default FreiendReq