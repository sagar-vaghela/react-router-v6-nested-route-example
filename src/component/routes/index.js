import React from 'react'
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import routes from './routes';
function RouteResolver({ key, ...data }) {
  console.log(data,"data");
    let Component = data.type;
    return <Component {...data} />;
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
    {routes.map((route,index) => [<RouteResolver {...route} key={index}/>])}
    

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
