import React from "react";
import Link from "next/link";

const PopularBlogs = ({ posts }) => {
 
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <h1 className="font-bold text-2xl md:text-4xl mb-4 mt-8 text-black dark:text:white">
          Blogs
        </h1>
        {posts.map((post) => {
          return (
            <Link href={`blog/${post.slug}`} key={post.slug}>
              <a>
                <div className="my-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 my-1">
                    {post.frontmatter?.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400 ">
                   
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <Link href="/blog"><div type="button" className="flex items-center text-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"> See more </div></Link>
    </div>
  );
};

export default PopularBlogs;
