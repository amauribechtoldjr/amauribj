import styles from "./styles.css";

export default function Navbar() {
  return <div className="navbar">Navbar</div>;
}

export const links = () => [{ rel: "stylesheet", href: styles }];
