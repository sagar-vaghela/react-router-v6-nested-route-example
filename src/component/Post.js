import React from 'react'
import { useParams, useSearchParams, Link} from 'react-router-dom';
import { BlogPosts } from '../constant/blogPosts';

const Post = () => {
  console.log(useSearchParams(),"useParams");
      const {slug} = useParams();
    const post = BlogPosts[slug];
    const { title, description } = post;
    return (
      <div style={{ padding: 20 }}>
        
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

export default Post
