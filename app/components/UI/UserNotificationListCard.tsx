import React from 'react';

interface UserNotificationListCardProps {
    user: {
        name: string;
        avatar: string;
    };
    message: string;
    timestamp: string;
}

const UserNotificationListCard = ({ user, message, timestamp }: UserNotificationListCardProps) => {
    return (
        <div
            className="
        flex items-center 
        py-[10px] px-[16px]
        gap-[14px]
        hover:bg-neutral-900 
        rounded-xl
        cursor-pointer
        transition-all duration-150
      "
        >
            {/* Avatar */}
            <div className="relative w-[46px] h-[46px]">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                />
            </div>

            {/* Username + Message */}
            <div className="flex flex-col flex-1 min-w-0">
                <div className="font-semibold text-gray-200 text-[15px] truncate">
                    {user.name}
                </div>

                <div className="text-xs text-gray-500 truncate">
                    {message}
                </div>
            </div>

            {/* Timestamp */}
            <div className="text-xs text-gray-500 shrink-0">
                {timestamp}
            </div>
        </div>
    );
};

export default UserNotificationListCard;
