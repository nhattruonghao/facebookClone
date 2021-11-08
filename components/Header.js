import React from "react";
import Image from "next/image";
import {
 BellIcon,
 ChatIcon,
 ChevronDownIcon,
 HomeIcon,
 UserGroupIcon,
 ViewGridIcon,
} from "@heroicons/react/solid";

import {
 FlagIcon,
 PlayIcon,
 SearchIcon,
 ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import {signOut, useSession} from "next-auth/client"

function Header() {
  const [session] = useSession();
 return (
  <div
   className="sticky bg-white top-0 z-50 flex item-center
    p-2 lg:px-5 shadow-md"
  >
   {/* Left */}
   <div className="flex items-center">
    <Image
     src="https://links.papareact.com/5me"
     width={40}
     height={40}
     layout="fixed"
    />

    <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
     <SearchIcon className="h-5 text-gray-600" />
     <input
      className="hidden md:flex items-center bg-transparent ml-2 outline-none"
      type="text"
      placeholder="Search Facebook"
     />
    </div>
   </div>
   {/* Center */}
   <div className="flex items-center justify-center flex-grow">
    <div className="flex items-center grid-cols-5 gap-x-6 md:gap-x-2 ">
     <HeaderIcon Icon={HomeIcon} />
     <HeaderIcon Icon={FlagIcon} />
     <HeaderIcon Icon={PlayIcon} />
     <HeaderIcon Icon={ShoppingCartIcon} />
     <HeaderIcon Icon={UserGroupIcon} />
    </div>
   </div>
   {/* Rtight */}
   <div className="flex items-center sm:space-x-2">
     <Image
      onClick = {signOut}
      className="rounded-full cursor-pointer"
      src={session.user.image}
      width="40"
      height="40"
      layout="fixed"
     />
    <p className="whitespace-nowrap font-semibold pr-3">
     {session.user.name}
    </p>
    <BellIcon className="icon"/>
    <ChatIcon className="icon"/>
    <ChevronDownIcon className="icon"/>
    <ViewGridIcon className="icon"/>
   </div>
  </div>
 );
}

export default Header;
