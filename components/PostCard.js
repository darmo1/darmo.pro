import React from "react";
import Link from 'next/link'

function randomColor(){
  const randomNumber = Math.random();
  const bgColors = ['bg-purple-300', 'bg-pink-300', 'bg-amber-300', 'bg-orange-300', 'bg-esmerald-300', 'bg-cyan-300', 'bg-indigo-400']
  const index = Math.floor(randomNumber * bgColors.length)
  return bgColors[index]
}

const PostCard = ({post}) => {
  return (
    <Link href={`blog/${post.slug}`} key={post.slug}>
      <a>
        <div className={`w-40 rounded h-48 my-4 mx-2 border-2 p-2 ${randomColor()}`}>
          <h4 className="font-medium text-gray-900 dark:text-gray-100 my-1">
            {post.frontmatter?.title}
          </h4>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
