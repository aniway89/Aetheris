import React from 'react'
import FreiendsStatusCard from '../UI/FreiendsStatusCard'

const FriendsStatus = () => {
  return (
    <div className="FriendsStatus flex items-center w-full overflow-x-scroll scroll-smooth gap-4 px-3 py-8 min-h-fit ">
        <FreiendsStatusCard
            avatar="https://i.pravatar.cc/150?img=1"
            username="Alice"
            status="idle"
            statusMessage="Away for a bit"


        />
    </div>
  )
}

export default FriendsStatus