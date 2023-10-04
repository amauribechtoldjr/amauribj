import type { V2_MetaFunction } from "@remix-run/node";
import HeroAbout from "~/components/About";
import Experiences from "~/components/Experiences";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const teste = (e: any) => {
    console.log(e);
  };

  return (
    <div className="lg:relative lg:max-h-screen">
      <header
        className="lg:my-0 lg:w-2/5 lg:max-h-screen lg:fixed lg:left-20"
        onScrollCapture={teste}
      >
        <Hero />
        <Navbar />
      </header>
      <main
        className="scroll-smooth lg:min-w-full lg:overflow-y-auto lg:min-h-full lg:flex lg:flex-row"
        onScroll={teste}
      >
        <div className="lg:flex-1"></div>
        <div className="lg:flex-1">
          <div className="lg:max-w-md xl:max-w-xl">
            <HeroAbout />
            <Experiences />
            <Projects />
          </div>
        </div>
      </main>
    </div>
  );
}
