import { NavLink } from "react-router";

import { routes } from "../lib/router.js";

import Container from "./Common/Container";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <Container>
        <nav className="sm:px-6 lg:px-8">
          <ul className="flex space-x-6">
            {routes.map(
              (route, i) =>
                route.name && (
                  <li key={i}>
                    <NavLink
                      to={route.path}
                      end
                      className={({ isActive }) =>
                        `relative px-3 py-4 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-indigo-400"
                        : "text-gray-300 hover:text-white"
                    }`
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
