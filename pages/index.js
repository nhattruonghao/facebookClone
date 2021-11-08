import { collection, orderBy, query, getDocs } from "firebase/firestore";
import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Slidebar from "../components/Slidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="bg-gray-100 overflow-hidden h-screen">
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="flex">
        <Slidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const postsCol = query(
    collection(db, "posts"),
    orderBy("timestamp", "desc"),
  );
  const postsSnapshot = await getDocs(postsCol);
  const postsList = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      timestamp: null,
  }));
  return {
    props: {
      session,
      posts: postsList
    },
  };
}
