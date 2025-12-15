
import { MdCall } from 'react-icons/md'

const Vclog = () => {
  return (
    <div className="w-full flex-items-center justify-center px-10">
        <div className="Calllog bg-neutral-900/40 border border-neutral-800 px-4 py-4 flex items-center rounded-xl gap-4">
            <MdCall
            className='text-3xl text-neutral-300'
            />
            <div className="mid flex items-center justify-between w-full ">
                <div className="flex flex-col gap-0 text-xs">
                    Call Ended
                    <div className="time text-[10px] text-neutral-400">
                        a minute ago ~ Today 12:30Pm
                    </div>
                </div>
                <div className="user_who_call_avatar ">

                    <img 
                    src="https://i.pinimg.com/236x/68/31/12/68311248ba2f6e0ba94ff6da62eac9f6.jpg" 
                    alt="" 
                    className="w-8 h-8 rounded-full" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Vclog