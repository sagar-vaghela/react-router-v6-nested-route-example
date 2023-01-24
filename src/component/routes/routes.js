import About from "../About";
import Home from "../Home";
import Posts from "../Posts";
import React from 'react'
import route, { ROUTE_DEFAULT } from "./route";

const routes = [
    route("/",<Home />, ROUTE_DEFAULT),
    route("/about", <About />, ROUTE_DEFAULT),
    route("/posts/*", <Posts/>, ROUTE_DEFAULT),
];

export default routes;