import Head from "next/head";
import Container from "../components/Container";

import styles from "../styles/Home.module.css";
import * as React from "react";
import TimeLine from "../components/TimeLine";
import About from "../components/About";
import PopularBlogs from "../components/PopularBlogs";
import { getSortedPosts } from "../lib/mdx";

export default function Home({posts}) {
 
  return (
    <Container>

      <About />
      <PopularBlogs posts={posts} />
      

      <TimeLine />
    </Container>
    
  );
}


export const getStaticProps = async () => {
  const posts = await getSortedPosts();

  return {
      props: { posts}
  }
}