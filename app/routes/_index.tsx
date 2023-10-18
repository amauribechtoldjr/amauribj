import { motion } from "framer-motion";
import type { V2_MetaFunction } from "@remix-run/node";
import HeroAbout from "~/components/About";
import Experiences from "~/components/Experiences";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";
import { useLocation } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const location = useLocation();

  const teste = (e: any) => {
    console.log(e);
  };

  return (
    <motion.div
      key={location.pathname}
      initial={{
        x: "-10%",
        opacity: 0,
        position: "relative",
        maxHeight: "100vh",
      }}
      animate={{
        x: "0",
        opacity: 1,
        position: "relative",
        maxHeight: "100vh",
      }}
      exit={{
        y: "-10%",
        opacity: 0,
        position: "relative",
        maxHeight: "100vh",
      }}
      transition={{ duration: 0.5 }}
    >
      <header
        className="lg:my-0 lg:w-2/5 lg:max-h-screen lg:fixed lg:left-20"
        onScrollCapture={teste}
      >
        <Hero />
        <Navbar />
      </header>
      <main className="lg:min-w-full lg:overflow-y-auto lg:min-h-full lg:max-h-screen lg:flex lg:flex-row">
        <div className="lg:flex-1"></div>
        <div className="lg:flex-1">
          <div className="lg:max-w-md xl:max-w-xl">
            <HeroAbout />
            <Experiences />
            <Projects />
          </div>
        </div>
      </main>
    </motion.div>
  );
}
