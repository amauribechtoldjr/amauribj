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
          width={400}
          height={400}
        />
      </div>
      <div className="projectsCard__infoContainer">
        <span>{project.type}</span>
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
        {githubLink !== "" && (
          <a href={githubLink}>
            <img src={githubIcon} alt="Github Icon" width={32} height={32} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="sectionPage projects" id="projects">
      <span className="kungfuheading projects_title">Outros projetos</span>
      <div>
        <ProjectsCard
          img={{ src: eufestGif, alt: "" }}
          project={{
            type: "Featured Project",
            name: "eufest.com.br",
            description:
              "Sed accumsan urna nec neque lobortis sodales. In hac habitasse platea dictumst. Aliquam eu elementum augue. Fusce scelerisque pulvinar odio fringilla tristique.",
          }}
          skills={[
            "Shopify",
            "Next.js",
            "React",
            "SASS",
            "SASS",
            "SASS",
            "SASS",
            "SASS",
          ]}
        />
        <ProjectsCard
          img={{ src: ecommerceImg, alt: "" }}
          project={{
            type: "Study based project",
            name: "Ecommerce fully integrated with Shopify",
            url: "http://www.travesssa.com",
            description:
              "Sed accumsan urna nec neque lobortis sodales. In hac habitasse platea dictumst. Aliquam eu elementum augue. Fusce scelerisque pulvinar odio fringilla tristique.",
          }}
          skills={[
            "Shopify",
            "Next.js",
            "React",
            "SASS",
            "SASS",
            "SASS",
            "SASS",
            "SASS",
          ]}
        />
        <ProjectsCard
          img={{ src: portfolioImg, alt: "" }}
          project={{
            type: "Featured Project",
            name: "My portfolio",
            description:
              "Sed accumsan urna nec neque lobortis sodales. In hac habitasse platea dictumst. Aliquam eu elementum augue. Fusce scelerisque pulvinar odio fringilla tristique.",
          }}
          skills={["Remix", "React"]}
        />
      </div>
    </section>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
