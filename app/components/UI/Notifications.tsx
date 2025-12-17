import React from 'react'

const Notifications = () => {
  return (
    <div className="flex items-center p-2 gap-2">
        <img 
        src="https://galaxypfp.com/wp-content/uploads/2025/10/aesthetic-cute-cat-pfp.webp"
        alt="" 
        className="avatart ww-13 h-13 rounded-full" />
        <div className="flex flex-col w-full">
            <div className="text-sm font-semibold">Username</div>
            <div className="Notification-type text-xs text-neutral-400">4 new messages</div>
        </div>
        <div className="time text-xs text-neutral-400 w-fit flex-nowrap">
            12 min ago
        </div>
    </div>
  )
}

export default Notifications