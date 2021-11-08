import React from "react";
import Image from "next/image";
import {
  ChatAltIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";

function Post({ post }) {
  return (
    <div className="flex flex-col">
      <div className=" w-full p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={post.image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-xs text-gray-400">
              {post.timestamp?.toDate().toString()}
            </p>
          </div>
        </div>
        <div>
          <p className="pt-4">{post.message}</p>
        </div>
        {post.postImage ? (
          <div className="relative h-56 md:h-96 bg-white cursor-pointer">
            <Image
              className="z-2"
              src={post.postImage}
              objectFit="cover"
              layout="fill"
            />
          </div>
        ) : ''}
      </div>
      {/* footer post */}
      <div
        className="flex justify-between items-center rounded-b-2xl bg-white
      shadow-md text-gray-400 border-t"
      >
        <div className="inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comments</p>
        </div>
        <div className="inputIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
