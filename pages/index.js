import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import Footer from "../components/Footer";
import MainBackground from "../components/MainBackground";
import FeaturedPosts from "../sections/FeaturedPosts";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Josef Dosoudil Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBackground />
      <div className="bg-antiquewhite dark:bg-magicBlack-500 transition duration-300">
        <div className=" mx-auto px-4 mb-8 ">
        
          <FeaturedPosts />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relative top-8">
                <PostWidget />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
