import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { getPostsBySlug, getSinglePost } from '../../lib/mdx'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'



export const  getStaticPaths =  async () => {
    const paths = await getPostsBySlug();
  
    return {
        paths,
        fallback: false //cuando no encuentre la ruta tendrá un error 404
    }
}

export const getStaticProps = async ({params}) => {
    
    const source = await getSinglePost(params.slug);
    const {content, data} = matter(source);
    const mdxSource = await serialize( content, {
        scope: data
    })
   


    return {
        props:{
            source: mdxSource, frontmatter: data
        }
    }
}

const Blog = ({source, frontmatter}) => {

    return (
        <div>
            <h1>{frontmatter?.title}</h1>
            <MDXRemote {...source} />
        </div>
    )
}

export default Blog




