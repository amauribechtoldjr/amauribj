import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar, { links as navbarLinks } from "~/components/Navbar/Navbar";
import styles from "~/styles/index.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="teste">
      <div>Amauri Bechtold Junior - Portfolio</div>
      <Link to="/test">Test</Link>
      <Navbar />
    </main>
  );
}

export const links = () => [
  ...navbarLinks(),
  { rel: "stylesheet", href: styles },
];
