"use client";

import { useEffect, useState } from "react";
import AddFriend from "@/app/components/UI/AddFriend";
import Navbar from "@/app/components/Element/Navbar";
import { FiSearch } from "react-icons/fi";
import FriendsStatus from "@/app/components/Element/FriendsStatus";
import FriendsList from "@/app/components/Element/FriendsList";
import Link from "next/link";

const Dm = () => {
    const [showBorder, setShowBorder] = useState(false);

    useEffect(() => {
        const container = document.querySelector(".direct-messages");

        const handleScroll = () => {
            if (!container) return;
            setShowBorder(container.scrollTop > 1);
        };

        container?.addEventListener("scroll", handleScroll);

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="direct-messages flex flex-col items-center h-[100dvh] w-full overflow-y-scroll overflow-x-hidden scollabar-hide">

            {/* HEADER */}
            <div
                className={`
          page-header sticky top-0 w-full flex-col justify-center 
          px-4 pt-3 pb-2 bg-black z-10 transition-all duration-200
          ${showBorder ? "border-b border-neutral-800" : "border-b border-transparent"}
        `}
            >
                <h1 className="text-lg font-semibold">Messages</h1>

                <div className="bottom-hadder flex items-center justify-center px-3 gap-2 mt-2">
                    <Link href={'/SearchFriends'} className="searchButton flex items-center justify-center p-1.5 rounded-full text-base cursor-pointer bg-neutral-900 hover:bg-neutral-800 transition border border-neutral-700">
                        <FiSearch />
                    </Link>
                    <AddFriend />
                </div>
            </div>

            <FriendsStatus />
            <FriendsList />

            <div className="flex-1 flex gap-3.5 flex-col items-center justify-center w-full px-5 text-center sr-only">
                Connect with friends to start chatting!
                <AddFriend />
            </div>

        </div>
    );
};

export default Dm;
