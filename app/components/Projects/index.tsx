// import eufestGif from "~/assets/gifs/eufest.gif";
import githubIcon from "~/assets/images/logos/github.png";
// import portfolioImg from "~/assets/images/portfolio.jpg";
// import ecommerceImg from "~/assets/images/ecommerce.jpg";
import Skill from "../Skill";
import Section from "../Section";
import SeciontTitle from "../SectionTitle";

interface ProjectsCardProps {
  img?: { src: string; alt: string };
  project: {
    name: string;
    description: string;
    url?: string;
  };
  skills?: string[];
  githubLink?: string;
}

function ProjectsCard({ img, project, skills, githubLink }: ProjectsCardProps) {
  return (
    <div className="my-8">
      <div className="flex items-center my-2">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noreferrer">
            <h2 className="inline font-bold text-1xl underline">
              {project.name}
            </h2>
          </a>
        ) : (
          <h2 className="inline font-bold text-1xl">{project.name}</h2>
        )}
        {githubLink && (
          <div className="inline-flex items-center flex-row">
            <span className="mx-2 font-bold">-</span>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github Icon" className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
      <p className="text-sm">{project.description}</p>
      {skills && skills.length > 0 && (
        <div className="my-4 flex flex-wrap gap-2">
          {skills.length > 0 &&
            skills.map((skill) => <Skill name={skill} key={skill} />)}
        </div>
      )}
    </div>
  );
}

const Projects = () => {
  return (
    <Section variant={"outline"}>
      <SeciontTitle>Outros projetos</SeciontTitle>
      <div>
        {/* <ProjectsCard
          // img={{ src: eufestGif, alt: "" }}
          project={{
            name: "eufest.com.br",
            description: `Landing Page para o evento online EuFest, que aconteceu no ano de 2020. 
              Projeto continha programação, informações sobre palestrantes e um cadastro de e-mail para acompanhar o evento (atualmente offline).`,
          }}
          // skills={["React", "Gatsby", "SSR", "Mailchimp"]}
        /> */}
        <ProjectsCard
          // img={{ src: ecommerceImg, alt: "" }}
          project={{
            name: "Ecommerce + shopify",
            url: "http://www.travesssa.com",
            description: `Projeto de ecommerce totalmente integrado com API do Shopify. A loja foi desenvolvida com a ideia de ser um ecommerce de cerâmicas.`,
          }}
          // skills={[
          //   "Shopify",
          //   "Next.js",
          //   "React",
          //   "SASS",
          //   "GraphQL",
          //   "SSR",
          //   "SSG",
          // ]}
          githubLink="https://github.com/amauribechtoldjr/shopify-ecommerce"
        />
        <ProjectsCard
          // img={{ src: portfolioImg, alt: "" }}
          project={{
            name: "Este portfólio",
            description: `Meu portofólio pessoal.`,
          }}
          // skills={["RemixJs", "React", "Vanilla CSS"]}
          githubLink="https://github.com/amauribechtoldjr/amauribj"
        />
      </div>
    </Section>
  );
};

export default Projects;
