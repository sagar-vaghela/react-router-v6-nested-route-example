import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import PostList from './PostList';
import route, { ROUTE_DEFAULT } from './routes/route';
import Post from './Post';

const innerRoute = [
  route("/", PostList(), ROUTE_DEFAULT),
  route(":slug", Post(), ROUTE_DEFAULT),
]

function RouteResolver({ ...data }) {
  let Component = data.type;
  console.log(data,"data123", Component);
  
    return <Component path={data.path} element={data.component}  />;
  }

  

const Posts = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* render any matching child */}
      {/* <Outlet /> */}
      <Routes>
        {/* <Route path='/' element={PostList()}></Route> */}
      {innerRoute.map((route) => [<RouteResolver {...route}/>])}
    </Routes>
    </div>
  )
}

export default Posts
