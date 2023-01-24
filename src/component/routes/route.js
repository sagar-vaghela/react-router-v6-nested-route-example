import { PublicRoute, PrivateRoute, DashboardRoute } from "./routeType";
import { Route } from "react-router";

export const ROUTE_PUBLIC = PublicRoute;
export const ROUTE_DEFAULT = Route;
export const ROUTE_DASHBOARD = DashboardRoute;
export const ROUTE_PRIVATE = PrivateRoute;

export default function route(path, component, type = ROUTE_DEFAULT) {
  return { path, component, type };
}
