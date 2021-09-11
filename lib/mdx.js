import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

//We have cached root
const root = process.cwd();

//Get Static File
export const POSTS_PATH = path.join( root , "./data/_posts");

export const getSortedPosts = async () => {

    //Read all Posts 
    const fileNames =  fs.readdirSync(POSTS_PATH)
    const allPosts = fileNames.map( file => {
       
        const slug = file.replace(".mdx", "");
     
        const fullPath = path.join( POSTS_PATH, file);

        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(fileContent);
        const options = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date( data?.date).toLocaleDateString( 'en-US', options);
        const frontmatter = { ...data, date}

        return {
            slug,
            frontmatter
        }
    })

    return allPosts.sort(( a,b ) => ( new Date(a.date) < new Date(b.date) ? 1 : -1 ))

}

export const getPostsBySlug = async() => {
    const fileName = fs.readdirSync(POSTS_PATH);

    return fileName.map( file =>  {
        return {
            params: {
                slug: file.replace(".mdx", "")
            }
        }
    })
}

export const getSinglePost = async ( slug ) => {

    const fullPath = path.join( POSTS_PATH, `${slug}.mdx`);
    const content = fs.readFileSync( fullPath, 'utf-8' );
    return content

}






// export const getSourceOfFile = fileName => {
//     return fs.readFileSync( path.join(POSTS_PATH, fileName ), 'utf-8');
// }

// export const getAllPosts = async () => {
//     return fs
//     .readdirSync(POSTS_PATH)
//     .filter( path =>  /\.mdx?$/.test(path))
//     .map( fileName => {
//         const source = getSourceOfFile(fileName);
//         const slug = fileName.replace(/\.mdx?$/, "");
//         const { data } = matter(source);
//         return {
//             frontmatter : data,
//             slug
//         }
//     })
// }

// export const getSinglePost = async slug => {
//     const source = getSourceOfFile( slug + ".mdx" );
//     const { content, data } = matter(source);
//     const mdxSource = await serialize(content, {scope: data})
     

//     return {
//         mdxSource,
//         frontmatter: { data }
      
        
//     }
// }

















// export const getFiles = async () => {
//     return fs.readdirSync( path.join( root, '/data/_posts'));
// }

// export const getFileBySlug = async ( slug ) => {
//     const mdxSource = fs.readFileSync(path.join(root, "/data/_posts", `${slug}.mdx`), 'utf-8');
//     const { data , content } = matter(mdxSource);
//     const source = await serialize(content, {});
//     return {
//         source,
//         frontmatter: { slug, ...data}
//     }
// }

// export const getAllFilesMetaData = async () => {
//     const files = await getFiles();
//     return files.reduce((allPosts, postSlug) => {
//         const mdxSource = fs.readFileSync( path.join(root, "/data/_posts" , postSlug) , 'utf-8');
//         const { data } = matter(mdxSource);
//         return [ { ...data, slug: postSlug.replace(".mdx", "")}, allPosts]

//     }, [])
// }