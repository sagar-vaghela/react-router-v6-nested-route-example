import React from 'react'
import { Outlet, Route, Routes, useRoutes } from 'react-router-dom'
import PostList from './PostList';
import route, { ROUTE_DEFAULT } from './routes/route';
import Post from './Post';



const RouteResolver = ({ ...data }) => {
  let Component = data.type;
  console.log(data,"data123", Component);
  
    return <Component path={data.path} element={data.component}  />;
  }

  

const Posts = () => {
  const innerRoute = [
    route("/", <PostList/>, ROUTE_DEFAULT),
     route(":slug", <Post />, ROUTE_DEFAULT),
  ]
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* render any matching child */}
      {/* <Outlet /> */}
      <Routes>
        {/* <Route path='/' element={PostList()}></Route>
        <Route path=':slug' element={Post()}></Route> */}
      {innerRoute.map((route) => [<RouteResolver {...route}/>])}
    </Routes>
    </div>
  )
}

export default Posts
