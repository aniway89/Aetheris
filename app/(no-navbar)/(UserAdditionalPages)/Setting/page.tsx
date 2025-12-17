import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoArchiveOutline, IoChevronForwardOutline, IoLockClosedOutline, IoLogOutOutline, IoMailOutline, IoPersonOutline, IoShieldOutline, IoTrashOutline } from 'react-icons/io5'
import { PiNotificationThin } from 'react-icons/pi'

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-2 py-4">
        <Link href={'/Profile'} className="flex items-center text-xl font-semibold gap-4">
          <FaArrowLeftLong
            className='text-neutral-300'
          />
          Setting

        </Link>
      </div>
      <div className="Account-contaier p-4 flex flex-col gap-2   w-full">
        <div className="text-xs text-neutral-400 font-semibold mb-2">Account setting</div>
        <Link href={'Setting/ProfileEdit'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition  justify-between'>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <IoPersonOutline
              className='text-neutral-300 text-lg' /> Edit profile
          </div>
          <IoChevronForwardOutline
            className='text-neutral-400'
          />
        </Link>
        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between '>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <IoMailOutline
              className='text-neutral-300 text-lg' /> Email
          </div>
          <IoChevronForwardOutline
            className='text-neutral-400'
          />
        </Link>
        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between'>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <IoLockClosedOutline
              className='text-neutral-300 text-lg' /> Password
          </div>
          <IoChevronForwardOutline
            className='text-neutral-400'
          />
        </Link>
        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between'>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <IoArchiveOutline
              className='text-neutral-300 text-lg' /> Account Archive
          </div>
          <IoChevronForwardOutline
            className='text-neutral-400'
          />
        </Link>
        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between'>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <IoShieldOutline
              className='text-neutral-300 text-lg' /> Account Privacy
          </div>
          <IoChevronForwardOutline
            className='text-neutral-400'
          />
        </Link>
        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between'>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <PiNotificationThin
              className='text-neutral-300 text-lg' /> Notifications
          </div>
          <IoChevronForwardOutline
            className='text-neutral-400'
          />
        </Link>

        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between'>
          <div className="flex items-center gap-5 text-neutral-200 ">
            <IoLogOutOutline
              className='text-xl  text-neutral-400' /> Log out
          </div>
        </Link>

      </div>
      <div className="critical-area  flex flex-col p-4 gap-2">
        <div className="text-xs text-red-900 font-semibold">Danger zoon</div>

        <Link href={'/'} className='flex items-center / px-4 py-3 . rounded-xl hover:bg-neutral-800 transition justify-between'>
          <div className="flex items-center gap-5 text-red-800 ">
            <IoTrashOutline
              className='text-lg  text-red-900' /> Delete Account
          </div>
        </Link>
      </div>
    </div>
  )
}

export default page