import React from 'react'
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import routes from './routes';
function RouteResolver({ ...data }) {
  let Component = data.type;
  return <Component path={data.path} element={data.component} />;
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
        {routes.map((route) => [<RouteResolver {...route} />])}
      </Routes>
    </Router>
  )
}

export default OurRoutes
