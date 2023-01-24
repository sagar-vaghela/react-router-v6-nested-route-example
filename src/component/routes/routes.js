import { Route, Routes } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Posts from "../Posts";
//return { path, component, type, exact };
/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="posts" element={<Posts />}>
        <Route path="/" element={<PostList />} />
        <Route path=":slug" element={<Post />} />
      </Route>
    </Routes> */
import React from 'react'
import Post from "../Post";
import PostList from "../PostList";
import route, { ROUTE_DEFAULT } from "./route";


const routes = [
    route("/", Home(), ROUTE_DEFAULT),
    route("/about", About(), ROUTE_DEFAULT),
    route("posts", Posts(), ROUTE_DEFAULT),
];

export default routes;