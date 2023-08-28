import styles from "./styles.css";
import myPhoto from "~/assets/images/foto_trabalho.jpg";
import linkedinLogo from "~/assets/images/logos/linkedin.png";
import githubLogo from "~/assets/images/logos/github.png";
import Skill, { links as skillLinks } from "../Skill";

function MainHero() {
  return (
    <div className="hero__main">
      <div className="hero__intro">
        <h2 className="kungfuheading hero__intro__title">
          Amauri Bechtold Junior
        </h2>
        <p className="hero__intro__description">
          Trabalho com empresas para projetar soluções excepcionais e
          impulsionar a transformação digital.
        </p>
        <div className="hero__intro__socialLinks">
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
          <span className="hero__intro__email">amauribechtoldjr@gmail.com</span>
          <span className="hero__intro__address">
            Florianópolis, Santa Catarina, Brasil
          </span>
        </div>
      </div>
      <div className="hero__photoContainer">
        <img
          src={myPhoto}
          alt="Foto de Amauri Bechtold Junior"
          width={320}
          height={320}
          className="hero__photo"
        />
      </div>
    </div>
  );
}

function HeroAbout() {
  return (
    <div className="hero__about">
      <p className="hero__about__description">
        I am a Software Engineer with 10+ years of experience, working mostly
        with Javascript and its ecosystem.
      </p>
      <p className="hero__about__description">
        My current focus is learning about web performance, code quality and
        every type of technology that I am interested in.My work comprises
        improving the architectures/products I work with contributing my
        knowledge about performance, code quality, design patterns, building
        code review culture.
      </p>
      <p className="hero__about__description">
        Also, I like to mentor people and help them to start their careers in
        the software development area.
      </p>
      <div className="hero__about__skills">
        <h2>Habilidades:</h2>
        <div className="hero__about__skillsContainer">
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
    <section className="hero">
      <MainHero />
      <HeroAbout />
    </section>
  );
}

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...skillLinks(),
];
