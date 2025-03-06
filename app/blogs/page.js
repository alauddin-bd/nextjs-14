import Link from 'next/link';
import React from 'react'

const Blogs = () => {
  const blogs = [
    {id: 1, title: "Blog1", description: "Blog1 description here"},
    {id: 2, title: "Blog2", description: "Blog2 description here"}
  ];
  return (
    <main className='mt-10'>
      
      <ul>
        {
          blogs.map(blog => <li className='mb-5' key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>)
        }
      </ul>

    </main>
  )
}

export default Blogs
