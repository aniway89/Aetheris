import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { MdOpenInFull } from 'react-icons/md'

const Video = () => {
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
            <video
                src="
                https://v.ftcdn.net/05/91/48/71/700_F_591487168_h4N3OpI6kRtbyr1oe7UHSqYrhXepmwV2_ST.mp4

                "
                className='rounded-sm' />
        </div>
    )
}

export default Video