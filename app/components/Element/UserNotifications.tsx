import React from 'react';
import UserNotificationListCard from '../UI/UserNotificationListCard';
import FreiendReq from '../UI/FreiendReq';

type NotificationType = 'mention' | 'reaction' | 'reply' | 'call' | 'missed_call';

interface Notification {
    id: string;
    type: NotificationType;
    user: {
        name: string;
        avatar: string;
    };
    message: string;
    timestamp: string;
}

const UserNotifications = () => {
    const notifications: Notification[] = [
        {
            id: '1',
            type: 'mention',
            user: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=1' },
            message: 'mentioned you in Design Team',
            timestamp: '3h',
        },
        {
            id: '2',
            type: 'reply',
            user: { name: 'Alex Morgan', avatar: 'https://i.pravatar.cc/150?img=2' },
            message: 'replied to your message',
            timestamp: '6h',
        },
        {
            id: '3',
            type: 'reaction',
            user: { name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=3' },
            message: 'reacted ❤️ to your message',
            timestamp: '1d',
        },
        {
            id: '4',
            type: 'call',
            user: { name: 'Taylor Swift', avatar: 'https://i.pravatar.cc/150?img=4' },
            message: 'called you',
            timestamp: '2d',
        },
        {
            id: '5',
            type: 'missed_call',
            user: { name: 'Chris Evans', avatar: 'https://i.pravatar.cc/150?img=5' },
            message: 'tried to call you',
            timestamp: '3d',
        },
        {
            id: '6',
            type: 'mention',
            user: { name: 'Emma Watson', avatar: 'https://i.pravatar.cc/150?img=6' },
            message: 'mentioned you in Project Alpha',
            timestamp: '5d',
        },
    ];

    return (
        <div className="w-full flex flex-col gap-2 px-2 h-auto pb-20">
            {notifications.map((notification) => (
                <UserNotificationListCard
                    key={notification.id}
                    user={notification.user}
                    message={notification.message}
                    timestamp={notification.timestamp}
                />
                
            ))}
            <FreiendReq/>
        </div>
    );
};

export default UserNotifications;
