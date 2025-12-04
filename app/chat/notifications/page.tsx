'use client';
import Navbar from "@/app/components/Element/Navbar";
import UserNotifications from "@/app/components/Element/UserNotifications";
import { useEffect, useState } from "react";

const Page = () => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".notifications");
    const handleScroll = () => {
      if (!container) return;
      setShowBorder(container.scrollTop > 1);
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="notifications flex flex-col items-center h-[100dvh] w-full overflow-y-scroll overflow-x-hidden scollabar-hide">

      {/* HEADER */}
      <div
        className={`
          page-header sticky top-0 w-full flex-col justify-center 
          px-5 pt-5 pb-2 bg-black z-10 transition-all duration-200
          ${showBorder ? "border-b border-neutral-800" : "border-b border-transparent"}
        `}
      >
        <h1 className="text-xl font-semibold">Notifications</h1>
      </div>

      <UserNotifications />
      <Navbar />
    </div>
  );
};

export default Page;