import React from "react";
import Image from "next/image";

function StoryCard({ name, src, profile }) {
 return (
  <div
   className="relative h-14 w-14 md:h-20 md:w-20
        lg:h-56 lg:w-36 cursor-pointer overflow-hidden-x p-3
        transition opacity-1 duration-200 transform ease-in hover:scale-105"
  >
   <Image
    className="transform transition scale-0 lg:scale-100 rounded-full z-50 top-10"
    src={profile}
    width={40}
    height={40}
    layout="fixed"
    objectFit="cover"
   />
   <Image
    className="object-cover filter brightness-50
            rounded-full lg:rounded-3xl
            hover:filter hover:brightness-100 
            transition duration-200"
    src={src}
    layout="fill"
   />
  </div>
 );
}

export default StoryCard;
