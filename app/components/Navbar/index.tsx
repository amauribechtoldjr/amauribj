import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul>
        <li>
          <NavLink to="/" className={(props) => (props.isActive ? "" : "")}>
            Sobre mim
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/experience"
            className={(props) => (props.isActive ? "" : "")}
          >
            Experiências
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/projects"
            className={(props) => (props.isActive ? "" : "")}
          >
            Projetos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
