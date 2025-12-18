import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const page = () => {
    return (
        <div className="w-full min-h-[100dvh] flex items-center justify-center  px-4">
            <div className="w-full max-w-md">

                {/* Section */}
                <div className="rounded-2xl bg-neutral-900 overflow-hidden">

                    {/* Row */}
                    <div className="flex items-center justify-between px-5 py-4">
                        <span className="text-[15px] text-neutral-200">
                            Email
                        </span>

                        <span className="text-[15px] font-medium text-neutral-200 truncate">
                            sermail@gmail.com
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-black/5 mx-5" />

                    {/* Status Row */}
                    <div className="flex items-center justify-between px-5 py-4">
                        <span className="text-[15px] text-neutral-200">
                            Status
                        </span>

                        <span className="text-[14px] text-green-600 font-medium">
                            Verified
                        </span>
                    </div>

                </div>

                {/* Hint */}
                <p className="mt-3 text-center text-[13px] text-gray-500">
                    Used for sign-in, notifications, and account recovery
                </p>

            </div>
        </div>


    )
}

export default page