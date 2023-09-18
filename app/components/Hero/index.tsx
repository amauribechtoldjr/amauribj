import linkedinLogo from "~/assets/images/logos/linkedin.png";
import githubLogo from "~/assets/images/logos/github.png";
import Skill from "../Skill";

function MainHero() {
  return (
    <div className="w-full flex items-center">
      <div className="flex-1 w-1/2">
        <h2 className="text-4xl font-bold font-title">
          Amauri Bechtold Junior
        </h2>
        <p className="">
          Trabalho com empresas para projetar soluções excepcionais e
          impulsionar a transformação digital.
        </p>
        <div className="">
          <img
            src={linkedinLogo}
            alt="Link para linkedin do Amauri Bechtold Junior"
            width={32}
            height={32}
          />
          <img
            src={githubLogo}
            alt="Link para github do Amauri Bechtold Junior"
            width={32}
            height={32}
          />
          <span className="">amauribechtoldjr@gmail.com</span>
          <span className="">Florianópolis, Santa Catarina, Brasil</span>
        </div>
      </div>
    </div>
  );
}

function HeroAbout() {
  return (
    <div className="">
      <p className="">
        I am a Software Engineer with 10+ years of experience, working mostly
        with Javascript and its ecosystem.
      </p>
      <p className="">
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
      <div className="my-32">
        <h2>Habilidades:</h2>
        <div className="flex flex-wrap gap-2 my-4">
          <Skill name="Javascript" />
          <Skill name="Typescript" />
          <Skill name="Node.js" />
          <Skill name="GraphQL" />
          <Skill name="single-spa" />
          <Skill name="Tailwind" />
          <Skill name="Styled-Components" />
          <Skill name="SASS" />
          <Skill name="HTML 5" />
          <Skill name="PHP" />
          <Skill name="AWS (s3, lambda)" />
          <Skill name="SCRUM" />
          <Skill name="Kanban" />
          <Skill name="MySQL" />
          <Skill name="PostgreSQL" />
          <Skill name="MongoDB" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center ">
      <MainHero />
      <HeroAbout />
    </section>
  );
}
