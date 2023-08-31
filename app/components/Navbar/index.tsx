import styles from "./styles.css";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            to="#about"
            className={(props) =>
              props.isActive
                ? "navbar__itemLink navbar__itemLink--selected"
                : "navbar__itemLink"
            }
          >
            Sobre mim
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="#experience"
            className={(props) =>
              props.isActive
                ? "navbar__itemLink navbar__itemLink--selected"
                : "navbar__itemLink"
            }
          >
            Experiências
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="#projects"
            className={(props) =>
              props.isActive
                ? "navbar__itemLink navbar__itemLink--selected"
                : "navbar__itemLink"
            }
          >
            Projetos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
