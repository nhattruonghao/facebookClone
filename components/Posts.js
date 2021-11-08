import {
 collection,
 query,
 orderBy,
 getDocs,
} from "firebase/firestore";
import React, {
 useEffect,
 useState,
} from "react";
import { db } from "../firebase";
import Post from "./Post";

async function getPosts(db) {
 const postsCol = query(
  collection(db, "posts"),
  orderBy("timestamp", "desc"),
 );
 const postsSnapshot = await getDocs(postsCol);
 const postsList = postsSnapshot.docs.map(
  (doc) => {
   return doc.data();
  },
 );
 return postsList;
}
function Posts({posts}) {
 const [postsList, setPostsList] = useState([]);
 useEffect(() => {
  getPosts(db).then((resp) => {
   setPostsList(resp);
  });
 },[postsList]);

 return (
  <div>
   {
   postsList &&
   postsList.map((post, index) => {
    return <Post key={index} post={post}/>;
   })}
  </div>
 );
}

export default Posts;
