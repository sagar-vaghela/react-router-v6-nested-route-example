import React from 'react'
import { useParams } from 'react-router-dom';
import { BlogPosts } from '../constant/blogPosts';

const Post = () => {
  // console.log(useParams(),"useParams");
    // const params = useParams();
    // const post = BlogPosts[params.slug];
    // const { title, description } = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{"title"}</h3>
        <p>{"description"}</p>
      </div>
    );
  };

export default Post
