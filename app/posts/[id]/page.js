
import PostComents from '@/app/components/postComents';
import { getPostComments, getPost, getAllPosts } from '@/app/lib/postApi'
import React, { Suspense } from 'react'

export const generateMetadata = async ({params}) => {
  const {id} = params; 
  const post = await getPost(id);
  const {title, body} = post;
  return {
    title: title,
    description: body
  }

}

const PostPage = async({params}) => {
  const {id} = params; 
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;
  const {title, body} = post;
  return (
    <div className='mt-6'>
      <h1 className='font-bold mb-4'>{title}</h1>
      <p>{body}</p>
      <hr />
      <Suspense fallback="<h3>Loading Comments....</h3>">
        <PostComents promise={commentsPromise} />
      </Suspense>
      
    </div>
    
  )
}

// export const generateStaticParams = async () => {
//   const posts =await getAllPosts();
//   return posts.map(post => ({
//     id: post.id.toString(),
//   }));
// } 


export default PostPage

