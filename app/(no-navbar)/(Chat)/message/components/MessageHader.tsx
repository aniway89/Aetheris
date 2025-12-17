
import Link from 'next/link'
import { GoChevronLeft } from 'react-icons/go'
import { HiPhone, HiVideoCamera } from 'react-icons/hi'
const MessageHader = () => {
  const userID = '12345'

  return (
    <div className="flex items-center justify-between p-4 border-b border-neutral-700 bg-black">
      {/* left */}
      <div className="flex items-center gap-2 min-w-0">
        <GoChevronLeft className="text-2xl cursor-pointer" />
        <img src='https://images.prismic.io/smi-blog/6c987520-81a6-4d03-acc3-2281bbb8b323_IMG_4795.jpg?auto=compress,format' className="w-10 h-10 rounded-full" />
        <div className="font-bold text-lg truncate max-w-[160px]">
          yoru.ayan.cat on cratwsa heres
        </div>
      </div>

      {/* right */}
      <div className="flex gap-2">
        <Link href={`/Vc/${userID}`} className="p-2 rounded-full bg-neutral-900">
          <HiPhone />
        </Link>
        <Link href={`/Vc/${userID}`} className="p-2 rounded-full bg-neutral-900">
          <HiVideoCamera />
        </Link>
      </div>
    </div>
  )
}

export default MessageHader