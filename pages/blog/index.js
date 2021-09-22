import React from 'react'
import Container from '../../components/Container';
import PostCard from '../../components/PostCard';
import { getSortedPosts } from '../../lib/mdx';

const index = ({posts}) => {
    return (
        <Container>
          <div className="max-w-4xl  mx-auto px-4">
              <div>
                <h1 className="font-bold text-2xl md:text-4xl mb-4 mt-8 text-black dark:text:white">
                  Blogs
                </h1>
                <p className="">Welcome to my favorite spot, where I can share with you amazing stuff and give what I have learnt up to today</p>
                <div className="flex">
                {posts.map((post) => {
                  return (
                    <PostCard post={post}/>
                  );
                })}
                </div>
              </div>
              
            </div>
        </Container>
    )
}

export default index

export const getStaticProps = async () => {
    const posts = await getSortedPosts();
  
    return {
        props: { posts}
    }
  }
