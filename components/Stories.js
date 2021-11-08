import React from "react";
import StoryCard from "./StoryCard";

const stories = [
 {
  userName: "Sonny Sangha",
  src: "https://links.papareact.com/zof",
  profile: "https://links.papareact.com/l4v",
 },
 {
  userName: "Elon Musk",
  src: "https://links.papareact.com/4zn",
  profile: "https://links.papareact.com/kxk",
 },
 {
  userName: "Jeff Bezoz",
  src: "https://links.papareact.com/k2j",
  profile: "https://links.papareact.com/f0p",
 },
 {
  userName: "Mark Zukerberg",
  src: "https://links.papareact.com/xql",
  profile: "https://links.papareact.com/snf",
 },
 {
  name: "Bill Gate",
  src: "https://links.papareact.com/4u4",
  profile: "https://links.papareact.com/zvy",
 },
];

function Stories() {
 return (
  <div
   className="flex justify-center space-x-3 mx-auto"
  >
   {stories.map((story, index) => {
    return (
     <StoryCard
      key={index}
      name={story.userName}
      src={story.src}
      profile={story.profile}
     />
    );
   })}
  </div>
 );
}

export default Stories;
