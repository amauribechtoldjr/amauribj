import type { V2_MetaFunction } from "@remix-run/node";
import Hero, { links as heroLInks } from "~/components/Hero";
import Experiences, {
  links as experiencesLinks,
} from "~/components/Experiences";
import styles from "~/assets/styles/index.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="main">
      <Hero />
      <Experiences />
    </main>
  );
}

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...heroLInks(),
  ...experiencesLinks(),
];
