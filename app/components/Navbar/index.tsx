import styles from "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#about" className="navbar__itemLink">
            Sobre mim
          </a>
        </li>
        <li className="navbar__item">
          <a href="#experience" className="navbar__itemLink">
            Experiências
          </a>
        </li>
        <li className="navbar__item">
          <a href="#projects" className="navbar__itemLink">
            Projetos
          </a>
        </li>
      </ul>
    </nav>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
