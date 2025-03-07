import React from 'react'

const PostComents = async({promise}) => {
  const comments = await promise;
  return (
    <div className='mt-10'>
        <h1 className='mt-4 font-bold'>Comments</h1>
        <ul>
          {comments.map(comment => 
            <li className='mb-2' key={comment.id}> 
             {comment.body}
            </li>
        )}
        </ul>
      </div>
  )
}

export default PostComents
