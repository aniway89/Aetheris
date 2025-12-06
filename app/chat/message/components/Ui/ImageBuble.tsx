import { HiDownload } from "react-icons/hi"
import { MdOpenInFull } from "react-icons/md"


const ImageBuble = () => {
  return (
    <div className=''>
        <div className="Floting-top flex items-center gap-1 opacity-65 w-full  justify-end-safe -mb-10 p-1">
            <div className="MEdiaButton bg-neutral-900 p-2 rounded-sm w-fit">
                <HiDownload />
            </div>
            <div className="MEdiaButton bg-neutral-900 p-2 rounded-sm w-fit">
                <MdOpenInFull />
            </div>
        </div>
        <img 
        src="
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpouGTcc51Y1KD0H-DGz-BxWdjIckvfGNoqQ&s
        " 
        alt="" 
        className='rounded-sm'/>
    </div>
  )
}

export default ImageBuble