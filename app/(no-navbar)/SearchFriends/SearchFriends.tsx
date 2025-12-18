import Navbar from '@/app/components/Element/Navbar'
import FriendCard from '@/app/components/UI/FriendCard'
import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi'
import { IoIosSearch } from 'react-icons/io'

const SearchFriends = () => {
    return (
        <div className="w-full flex flex-col items-center overflow-y-scroll overflow-x-hidden scollabar-hide max-h-[100dvh] h-[100dvh] ">
            <div className="Search-bar px-5 py-4 gap-3 flex flex items-center  w-full absolute top-0 bg-black border-b border-neutral-800">
                <Link href={'/chat/dm'} className="flex items-center gap-2 text-xl font-semibold">
                    <HiChevronLeft className='text-3xl' />
                </Link>
                <div className="searchbar flex items-center gap-2 border border-neutral-900 bg-neutral-950 px-4 py-1 w-[90%] rounded-full backdrop-blur-3xl">
                    <IoIosSearch className='text-3xl' /> <input type="text" className='border-0 outline-none w-full' placeholder='Search by username' />
                </div>
            </div>
            <div className=" flex flex-col gap-2 px-4 scollabar-hide w-full overflow-y-scroll py-22 h-full ">
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />


            </div>
            <Navbar />
        </div>
    )
}

export default SearchFriends