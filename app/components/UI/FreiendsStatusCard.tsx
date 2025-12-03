
interface Props {
  avatar: string;
  username: string;
  statusMessage?: string;
  status?: "online" | "idle" | "dnd" | "offline";
}

export default function FriendsStatusCard({
  avatar,
  username,
  statusMessage,
  status = "offline",
}: Props) {
  const statusColor = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-neutral-600",
  }[status];

  const showText = status !== "offline";

  return (
    <div className="FreiendsStatusCard border border-neutral-800 p-3 rounded-xl w-fit flex items-center gap-3 bg-neutral-900/40">
      
      {/* Avatar */}
      <div className="relative w-12 h-12">
        <img
          src={avatar}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />

        {/* Status Dot */}
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-neutral-900 ${statusColor}`}
        ></div>
      </div>

      {/* Username + status (only if NOT offline) */}
      {showText && (
        <div className="flex flex-col">
          <div className="username text-sm font-semibold">{username}</div>

          {statusMessage && (
            <div className="status-text text-xs text-neutral-400 max-w-[200px] truncate">
              {statusMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
