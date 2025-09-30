import { createBrowserRouter } from "react-router";

import Root from "../components/Root.jsx";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Users from "../components/Users/Users.jsx";
import UserDetail from "../components/Users/UserDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "", name: "Home", index: true, Component: Home },
      {
        path: "users",
        name: "Users",
        loader: () => {
          setTimeout(() => {}, 5000);
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
        Component: Users,
      },
      {
        path: "users/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: UserDetail,
      },
      { path: "about", name: "About", Component: About },
    ],
  },
]);

export const routes = router.routes[0]?.children ?? [];

export default router;
