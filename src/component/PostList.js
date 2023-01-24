import React from 'react'
import { BlogPosts } from '../constant/blogPosts'
import { Link } from 'react-router-dom'



const PostList = () => {
  return (
    <>
    
    <div>sbdiubdsiu</div>
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => {
        return <li key={slug}>

          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      })}
    </ul>
    </>
  )
}

export default PostList
