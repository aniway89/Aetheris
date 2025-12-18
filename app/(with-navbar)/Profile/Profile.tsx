import Userbanner from '@/app/components/Profile Compoenets/Userbanner'
import Link from 'next/link'
import { FaGear } from 'react-icons/fa6'
import { MdModeEditOutline } from 'react-icons/md'

const Profile = () => {
    return (
        <div className="flex-col flex w-full items-center">
            <div className='flex flex-col max-h-[100dvh] overflow-y-hidden'>
                <Link href={'/Setting'} className="absolute top-2 right-2 p-2 text-sm">
                    <FaGear />
                </Link>
                <Userbanner />
                <div className="User-pfp w-26 h-26  rounded-full border-6 border-black ml-5 -mt-13  overflow-hidden z-2">
                    <img src="
                        https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyMHV5dm55dmYwNnpreW1jaGk4bDN0MDdpdzg5NDZ1YXRnOTdsMmxkYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8ArzbGWLVNQzRv1aAL/200w.gif
                        "
                        alt="" />
                    <div className="absolute flex flex-items-center py-1 px-3 text-sm text-neutral-500 z-1 border -mt-10 ml-25 rounded-lg bg-neutral-900 border-neutral-700  max-w-[200px]">
                        <div className="max-w-2 max-h-2 min-h-2 min-w-2 rounded-full bg-neutral-900 -mt-1 -ml-7 border  absolute"></div>
                        <div className="max-w-3 max-h-3 min-h-3 min-w-3 rounded-full bg-neutral-900 -mt-2 -ml-4 border-t  absolute"></div>
                        <div className="Message">Hi guys</div>
                    </div>

                </div>

                <div className="username-area w-full flex flex-col px-5 ">
                    <div className="DisplayName text-lg  font-semibold ">
                        !Yoru.Ayan.lEgend
                    </div>
                    <div className=" w-full flex items-center text-neutral-400 gap-1">
                        <div className="Username text-sm  max-w-[150px]  ">
                            @ayan124
                        </div>
                        <div className='bg-neutral-400 min-h-1 min-w-1  rounded-full '></div>
                        <div className="pronincation">
                            Cat
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-4 mt-10">

                    <Link href={'ProfileEdit'} className="EditProfile flex items-center justify-center gap-2 w-full p-2 rounded-lg bg-white text-black " >
                        <MdModeEditOutline /> Edit Profile
                    </Link>
                </div>
                <div className="p-4">
                    <div className="flex flex-col gap-1">
                        <div className="text-xs text-neutral-400 font-semibold">About Me</div>
                        <div className="bg-neutral-900 px-4 py-2 border border-neutral-800 rounded-xl text-neutral-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente ipsam unde maxime minus, doloribus ducimus quod atque, expedita soluta quisquam necessitatibus quia debitis voluptas, itaque aliquam vero culpa iusto?
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile