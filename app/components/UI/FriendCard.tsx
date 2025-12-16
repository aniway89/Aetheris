import React from 'react'

const FriendCard = () => {
  return (
    <div className="flex items-center  border-neutral-700 rounded-lg px-3 py-2 w-full justify-between ">
        <div className="flex items-center gap-3">
            <img 
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/47d920de9ad2a4995d74d161c05b9e36737e19bd" 
            alt="" 
            className="userpfp w-13 h-13  rounded-full" />
            <div className="userDNandUN flex flex-col">
                <div className="userDN text-neutral-50 font-semibold">Yoruayan</div>
                <div className="UserUN text-neutral-400 text-xs">SLJDkhf_09</div>
            </div>
        </div>
        <div className="addbutton px-3 py-1 bg-neutral-300 text-neutral-950 rounded-lg font-semibold text-sm ">
            Add
        </div>

    </div>
  )
}

export default FriendCard