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
import route from "./route";



const routes = [
    route("/", Home),
    route("/about", About),
    route("posts", Posts),
];

export default routes;