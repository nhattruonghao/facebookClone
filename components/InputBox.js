import React, { useRef, useState } from "react";
import { useSession } from "next-auth/client";
import Image from "next/image";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  Timestamp,
} from "firebase/firestore";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState("");
  async function sendPost(e) {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const docData = {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: Timestamp.now(),
    };

    const newPost = collection(db, "posts");
    const docRef = await addDoc(newPost, docData);
    docRef;
    if (imageToPost) {
      const uploadTask = ref(storage, `posts/${docRef.id}`);
      uploadString(uploadTask, imageToPost, "data_url").then(
        (resp) => {
          getDownloadURL(
            ref(storage, `posts/${resp.metadata.name}`),
          ).then((url) => {
            setDoc(
              doc(collection(db, "posts"), resp.metadata.name),
              {
                postImage: url,
              },
              { merge: true },
            );
          });
        },
      );
      removeImage();
    }
    inputRef.current.value = "";
  }
  const addImageToPost = (e) => {
    const render = new FileReader();
    if (e.target.files[0]) {
      render.readAsDataURL(e.target.files[0]);
    }
    render.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost("");
  };
  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md
  text-gray-500 font-medium mt-6"
    >
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow
                px-5 focus:outline-none"
            placeholder={`What's on your mind, ${session.user.name}`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110
            transition duration-150 transform hover:scale-105 cursor-pointer "
          >
            <img
              className="h-10 object-contain"
              src={imageToPost}
              alt=""
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-around items-center">
        <div className="inputIcon rounded-2xl">
          <VideoCameraIcon className=" h-7 text-red-500" />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon rounded-2xl"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">
            Photo/Video
          </p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            hidden
            type="file"
          />
        </div>
        <div className="inputIcon rounded-2xl">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
