export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">

      {/* LEFT: DM LIST — visible on desktop, hidden on mobile */}
      <aside className="hidden lg:flex lg:w-[260px] ">
        {/* DM panel content */}
      </aside>

      {/* CENTER: CHAT — always visible */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* RIGHT: PROFILE — visible on desktop, hidden on mobile */}
      <aside className="hidden lg:flex lg:w-[320px] ">
        {/* Profile / notifications */}
      </aside>

    </div>
  );
}
