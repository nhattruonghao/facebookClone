import React from 'react'
import Image from "next/image"

function Contact({src, name}) {
    console.log(src)
    return (
        <div className="flex items-center space-x-3 bm-2
        relative hover:bg-gray-200 cursor-pointer p-3
        rounded-xl">
            <Image 
            className="rounded-full"
            objectFit="cover"
            src={src}
            height={50}
            width={50}
            layout="fixed"
            />
            <p className="">
                {name}
            </p>
            <div className="absolute bottom-2 left-7 bg-green-400
            h-3 w-3 rounded-full"></div>
        </div>
    )
}

export default Contact
