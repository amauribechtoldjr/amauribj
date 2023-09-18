import linkedinLogo from "~/assets/images/logos/linkedin.png";
import githubLogo from "~/assets/images/logos/github.png";
import SeciontTitle from "../SectionTitle";
import Section from "../Section";
// import Skill from "../Skill";

function MainHero() {
  return (
    <div className="w-full flex items-center">
      <div>
        <h2 className="text-3xl font-bold font-title tracking-wider">
          Amauri Bechtold Junior
        </h2>
        <p className="my-4">
          Trabalho com empresas para projetar soluções excepcionais e
          impulsionar a transformação digital.
        </p>
        <div className="flex items-center gap-2">
          <img
            src={linkedinLogo}
            alt="Link para linkedin do Amauri Bechtold Junior"
            className="w-6 h-6"
          />
          <img
            src={githubLogo}
            alt="Link para github do Amauri Bechtold Junior"
            className="w-6 h-6"
          />
        </div>
        <span className="block mt-4">amauribechtoldjr@gmail.com</span>
        <span className="mt-2">Florianópolis, Santa Catarina, Brasil</span>
      </div>
    </div>
  );
}

function HeroAbout() {
  return (
    <div>
      <SeciontTitle>About</SeciontTitle>
      <p>
        I am a Software Engineer with 12 years of experience, working mostly
        with Javascript and its ecosystem.
      </p>
      <p className="my-2">
        My current focus is learning about web performance, code quality and
        every type of technology that I am interested in.My work comprises
        improving the architectures/products I work with contributing my
        knowledge about performance, code quality, design patterns, building
        code review culture.
      </p>
      <p className="">
        Also, I like to mentor people and help them to start their careers in
        the software development area.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <Section>
      <MainHero />
      <HeroAbout />
    </Section>
  );
}
