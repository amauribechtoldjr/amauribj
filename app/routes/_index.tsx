import type { V2_MetaFunction } from "@remix-run/node";
import Experiences from "~/components/Experiences";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
      <Experiences />
      <Projects />
    </main>
  );
}
