import useTransitionEffect from "~/hooks/useTransitionEffect";
import Skill from "../Skill";
import styles from "./styles.css";

interface Experience {
  id: string;
  description: string | string[];
  companyName: string;
  companyURL: string;
  jobTitle: string;
  skills: string[];
  startDate: string;
  endDate: string;
}

const experiences: Experience[] = [
  {
    id: "solides",
    companyName: "Sólides",
    jobTitle: "Engenheiro de Software",
    skills: [
      "Typescript",
      "Javascript",
      "React",
      "single-spa",
      "Tailwind",
      "AWS Lambda",
      "AWS S3",
      "Commander.js",
      "Node.js",
    ],
    description: [
      "Atua no desenvolvimento e manutenção da arquitetura de micro-frontends da empresa. Esta arquitetura inclui o orquestrador dos micro-frontends, serviços como coletor de métricas dos frontends, uma CLI para deploy dos frontends e uma API backend para servir toda essa arquitetura.",
      "Atua em colaboração com outros times dando mentoria através de code reviews e treinamentos.",
    ],
    startDate: "Jan 2020",
    endDate: "Current",
    companyURL: "https://solides.com.br",
  },

  {
    id: "bornlogic",
    companyName: "Bornlogic",
    jobTitle: "Desenvolvedor Frontend Sênior",
    skills: [
      "Typescript",
      "Javascript",
      "React",
      "styled-components",
      "story-book",
    ],
    description: [
      "Trabalhou em colaboração com o time de design para a criação da nova biblioteca de Design System. Incluindo a manutenção e criação de novos componentes.",
      "Desenvolveu e manteve o software da empresa, colaborando com o time para melhorias de performance, acessibilidade e treinamentos internos para o time de Frontend.",
    ],
    startDate: "Oct 2018",
    endDate: "Set 2019",
    companyURL: "https://bornlogic.com",
  },
  {
    id: "eureca",
    companyName: "Eureca",
    jobTitle: "Desenvolvedor Fullstack Sênior",
    skills: [
      "Typescript",
      "Javascript",
      "NodeJS",
      "React",
      "Gatsby",
      "SSR",
      "Mailchimp",
      "GraphQL",
      "Material-UI",
    ],
    description: [
      "Atuou de maneira integral na nova plataforma da Eureca, dando manunteção, criando novas features incluindo backend.",
      "Criou a landing page Eufest (projeto paralelo da empresa, citado na seção abaixo).",
    ],
    startDate: "Nov 2019",
    endDate: "Nov 2020",
    companyURL: "https://eureca.me",
  },
  {
    id: "amcom",
    companyName: "AMcom",
    jobTitle: "Desenvolvedor Frontend Sênior",
    skills: ["React", "React-native", "styled-components"],
    description:
      "Atuou no desenvolvimentos e manutenção de diferentes projetos para clientes da AMcom.",
    startDate: "Nov 2018",
    endDate: "Oct 2019",
    companyURL: "https://amcom.com.br",
  },
  {
    id: "linx",
    companyName: "Linx",
    jobTitle: "Desenvolvedor Frontend",
    skills: [
      "Typescript",
      "Javascript",
      "React",
      "Redux",
      "Redux Saga",
      "PostgreSQL",
      "styled-component",
      "Electron",
    ],
    description: `Desenvolveu e manteve três aplicações desktop para cozinhas industriais da Petrobras.`,
    startDate: "Dec 2016",
    endDate: "Aug 2018",
    companyURL: "https://www.linx.com.br/",
  },
  {
    id: "unimestre",
    companyName: "Unimestre",
    jobTitle: "Desenvolvedor Fullstack Junior",
    skills: [
      "Javascript",
      "jQuery",
      "PHP",
      "Pascal (Delphi)",
      "MySQL",
      "PostgreSQL",
    ],
    description: `Desenvolveu, manteve e enviou código para produção de projetos da empresa. Como sistemas acadêmicos, bibliotecários e algoritmos de cálculo de boletims.`,
    startDate: "Jan 2012",
    endDate: "Dec 2016",
    companyURL: "https://unimestre.com",
  },
];

function ExperienceCard({ ...exp }: Experience) {
  const { ref: cardRef, className } = useTransitionEffect({
    originalClassName: "experienceCard",
  });

  return (
    <div className={className} ref={cardRef}>
      <h2 className="experienceCard__title">{exp.jobTitle}</h2>
      <span>{`-`}</span>
      <a
        href={exp.companyURL}
        className="experienceCard__company"
        target="_blank"
        rel="noreferrer"
      >
        {exp.companyName}
      </a>
      <span className="experienceCard__timing">
        {exp.startDate} - {exp.endDate}
      </span>
      {Array.isArray(exp.description) ? (
        <>
          {exp.description.map((desc, i) => (
            <p className="experienceCard__description" key={i}>
              {desc}
            </p>
          ))}
        </>
      ) : (
        <p className="experienceCard__description">{exp.description}</p>
      )}

      <div className="experienceCard__skillsContainer">
        {exp.skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <section className="sectionPage experiences" id="experience">
      <div>
        <h2 className="kungfuheading experiences__title">Experiência</h2>
      </div>
      <div className="experiences__cardsContainer">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
