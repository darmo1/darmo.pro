import React from "react";
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <Link href={`blog/${post.slug}`} key={post.slug}>
      <a>
        <div className="w-40 rounded h-48 my-4 mx-2 border-2">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 my-1">
            {post.frontmatter?.title}
          </h4>
          <p className="text-gray-700 dark:text-gray-400 ">Hola como estás</p>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
