import React from 'react'
import { getAllPosts } from '../lib/postApi'
import Link from 'next/link';

const Posts = async() => {
  const posts = await getAllPosts();
 
  return (
    <div>
      <h1>All Posts</h1>
      <ul className='mt-6'>
        {posts.map(post => <li className='mb-2' key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default Posts