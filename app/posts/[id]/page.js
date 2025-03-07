import { getPost } from '@/app/lib/postApi'
import React from 'react'

const PostPage = async({params}) => {
  const {id} = params; 
  const post = await getPost(id);
  const {title, body} = post;
  return (
    <div className='mt-6'>
      <h1 className='font-bold mb-4'>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default PostPage