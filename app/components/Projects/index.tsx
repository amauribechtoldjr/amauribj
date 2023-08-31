import styles from "./styles.css";

import eufestGif from "~/assets/gifs/eufest.gif";
import githubIcon from "~/assets/images/logos/github.png";
import portfolioImg from "~/assets/images/portfolio.jpg";
import ecommerceImg from "~/assets/images/ecommerce.jpg";
import Skill from "../Skill";

interface ProjectsCardProps {
  img: { src: string; alt: string };
  project: {
    type: string;
    name: string;
    description: string;
    url?: string;
  };
  skills: string[];
  githubLink?: string;
}

function ProjectsCard({ img, project, skills, githubLink }: ProjectsCardProps) {
  return (
    <div className="projectsCard">
      <div className="projectsCard__imgContainer">
        <img
          src={img.src}
          alt={img.alt}
          className="projectsCard__img"
          width={300}
          height={300}
        />
      </div>
      <div className="projectsCard__infoContainer">
        <span className="projectsCard__type">{project.type}</span>
        {project.url ? (
          <a
            href={project.url}
            className="projectsCard__titleLink"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="kungfuheading projectsCard__title">
              {project.name}
            </h2>
          </a>
        ) : (
          <h2 className="kungfuheading projectsCard__title">{project.name}</h2>
        )}
        <p className="projectsCard__description">{project.description}</p>
        <div className="projectsCard__skillsContainer">
          {skills.length > 0 &&
            skills.map((skill) => <Skill name={skill} key={skill} />)}
        </div>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github Icon" width={32} height={32} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="sectionPage projects" id="projects">
      <span className="kungfuheading projects_title">Outros projetos</span>
      <div>
        <ProjectsCard
          img={{ src: eufestGif, alt: "" }}
          project={{
            type: "Projeto profissional",
            name: "eufest.com.br",
            description: `Landing Page para o evento online EuFest, que aconteceu no ano de 2020. 
              Projeto continha programação, informações sobre palestrantes e um cadastro de e-mail para acompanhar o evento (atualmente offline).`,
          }}
          skills={["React", "Gatsby", "SSR", "Mailchimp"]}
        />
        <ProjectsCard
          img={{ src: ecommerceImg, alt: "" }}
          project={{
            type: "Projeto de estudo",
            name: "Ecommerce + shopify",
            url: "http://www.travesssa.com",
            description: `Projeto de ecommerce totalmente integrado com API do Shopify. A loja foi desenvolvida com a ideia de ser um ecommerce de cerâmicas.`,
          }}
          skills={[
            "Shopify",
            "Next.js",
            "React",
            "SASS",
            "GraphQL",
            "SSR",
            "SSG",
          ]}
          githubLink="https://github.com/amauribechtoldjr/shopify-ecommerce"
        />
        <ProjectsCard
          img={{ src: portfolioImg, alt: "" }}
          project={{
            type: "Projeto profissional",
            name: "Este portfólio",
            description: `Meu portofólio pessoal.`,
            url: "http://localhost:3000/",
          }}
          skills={["RemixJs", "React", "Vanilla CSS"]}
          githubLink="https://github.com/amauribechtoldjr/amauribj"
        />
      </div>
    </div>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
