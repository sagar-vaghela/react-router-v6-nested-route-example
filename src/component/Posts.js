import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostList from './PostList';
import Post from './Post';

const Posts = () => {
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

  const data = [{
    element: <PostList />,
    path: "/",
  }, {
    element: <Post />,
    path: "/:slug/*",
  },]

  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Routes>
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
    </div>
  )
}

export default Posts
