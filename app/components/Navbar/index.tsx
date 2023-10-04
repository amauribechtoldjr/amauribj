import { NavLink, useLocation } from "@remix-run/react";
import Section from "../Section";

export default function Navbar() {
  const route = useLocation();

  const activeLink = "text-1xl font-bold underline";
  const inactiveLink = "text-1xl";

  const isAboutActive = route.hash === "#about";
  const isExperienceActive = route.hash === "#experience";
  const isProjectsActive = route.hash === "#projects";

  return (
    <Section className="hidden lg:block">
      <nav className="my-12">
        <ul>
          <li className="py-2">
            <NavLink
              to="#about"
              className={isAboutActive ? activeLink : inactiveLink}
            >
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#experience"
              className={isExperienceActive ? activeLink : inactiveLink}
            >
              Experience
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="#projects"
              className={isProjectsActive ? activeLink : inactiveLink}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </Section>
  );
}
