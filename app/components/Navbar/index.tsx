import styles from "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">Sobre mim</li>
        <li className="navbar__item">Experiências</li>
        <li className="navbar__item">Contato</li>
      </ul>
    </nav>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
