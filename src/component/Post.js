import React from 'react'
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { BlogPosts } from '../constant/blogPosts';
import PostItem from './PostItem';

const Childoute = ({
  element, path
}) => {
  let Component = element.type;
  return (
    <Route
      path={path}
      element={
        <Component />
      }
    />
  );
}

const Post = () => {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;

  const data = [{
    element: <PostItem />,
    path: `item`,
  }, {
    element: <PostItem />,
    path: `item`,
  }]

  return (
    <Routes>
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <Link to={`item`}>{description}</Link></div>
      {/* {innerRoute.map((route) => [<RouteResolver {...route}/>])} */}
      {data.map(({ path, element: Component }) => {
        return <Childoute
          key={path}
          tabsData={data}
          path={path}
          element={Component}
        />
      })}
    </Routes>
  );
};

export default Post
