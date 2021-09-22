import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { getPostsBySlug, getSinglePost } from '../../lib/mdx'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import Container from '../../components/Container'



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

const  Wrapper = (props) => {
    return (<div className="leading-9">{props.children} </div>)
}

const Blog = ({source, frontmatter}) => {

    return (
        <Container>
            <div className="max-w-4xl mx-auto leading-6">
            <h1 className="font-bold text-gray-600 text-lg my-12 sm:font-medium">{frontmatter?.title}</h1>
            <MDXRemote {...source} components={{ p: Wrapper}}/>
        </div>
        </Container>
    )
}

export default Blog




