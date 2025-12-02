import AddFriend from "@/app/components/UI/AddFriend"
import Navbar from "@/app/components/Element/Navbar"
import { FiSearch } from "react-icons/fi"
import FriendsStatus from "@/app/components/Element/FriendsStatus"
import FriendsList from "@/app/components/Element/FriendsList"


const page = () => {
  return (
    <div className="direct-messages flex flex-col items-center  h-[100dvh] w-full overflow-x-hidden">
        <div className="page-header sticky top-0 w-full flex-col  justify-center px-5 pt-5 pb-2 border-b border-neutral-800 bg-black z-10">
            <h1 className="text-xl font-semibold">Messages</h1>
            <div className="bottom-hadder flex items-center justify-center px-5 gap-2 mt-2">
                <div className="searchButton flex items-center justify-center p-2  rounded-full  text-lg cursor-pointer bg-neutral-900 hover:bg-neutral-800 transition">
                    <FiSearch />
                </div>
                <AddFriend />
            </div>
        </div>
        <FriendsStatus />
        <FriendsList />
        <div className="flex-1 flex gap-3.5 flex-col items-center justify-center  w-full px-5 text-center sr-only">
            {/* This will appare when there is no people in the freind list */}
           Connect with friends to start chatting!
            <AddFriend />
        </div>
        <Navbar />
    </div>

  )
}

export default page