import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import routes from './routes';
import Home from '../Home';
function RouteResolver({ ...data }) {
  let Component = data.type;
  console.log(data,"data", Component);
  
    return <Component path={data.path} element={data.component}  />;
  }

const OurRoutes = () => {
  return (
    <Router>
    <nav style={{ padding: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home{" "}
      </Link>
      <Link to="/about" style={{ padding: 5 }}>
        About
      </Link>
      <Link to="/posts" style={{ padding: 5 }}>
        Posts
      </Link>
    </nav>
    <Routes>
    {routes.map((route) => [<RouteResolver {...route}/>])}
    </Routes>

    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="posts" element={<Posts />}>
        <Route path="/" element={<PostList />} />
        <Route path=":slug" element={<Post />} />
      </Route>
    </Routes> */}
  </Router>
  )
}

export default OurRoutes
