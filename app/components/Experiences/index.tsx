import useTransitionEffect from "~/hooks/useTransitionEffect";
import Skill from "../Skill";
import styles from "./styles.css";

interface Experience {
  id: string;
  description: string | string[];
  companyName: string;
  jobTitle: string;
  skills: string[];
  startDate: string;
  endDate: string;
}

const experiences: Experience[] = [
  {
    id: "solides",
    companyName: "Sólides",
    jobTitle: "Desenvolvedor Front-end",
    skills: [
      "React",
      "Next.js",
      "Styled Components",
      "SASS",
      "Remix",
      "Vercel",
      "AWS S3",
      "PHP",
      "GO",
    ],
    description:
      "Sed accumsan urna nec neque lobortis sodales. In hac habitasse platea dictumst.",
    startDate: "Jan 2020",
    endDate: "Current",
  },
  {
    id: "amcom",
    companyName: "AMcom",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description:
      "Cras at viverra libero. Suspendisse rutrum sem id lectus gravida, ut pellentesque neque dictum. Duis nec lorem ac mauris pretium accumsan. Sed accumsan urna nec neque lobortis sodales. In hac habitasse platea dictumst.",
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
  {
    id: "bornlogic",
    companyName: "Bornlogic",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description:
      "Pellentesque vulputate urna ac quam lacinia, quis venenatis velit sodales. Ut eget tortor lacus. Nam est nisi, venenatis commodo vehicula ut, tristique ut augue. Nulla convallis commodo mauris a interdum.",
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
  {
    id: "unimestre",
    companyName: "Unimestre",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description:
      "Aliquam eu elementum augue. Fusce scelerisque pulvinar odio fringilla tristique. Phasellus ut porta mauris. Suspendisse posuere neque eu dictum vehicula. Sed vel urna eleifend, porttitor sem vitae, molestie tellus. Aenean a aliquam nulla. Morbi risus arcu, feugiat id lorem elementum, faucibus porta tortor. Mauris vehicula tellus eu arcu dignissim pellentesque a non massa. Integer quis volutpat massa. Nunc enim velit, tempus ac ligula sit amet, gravida fringilla velit.",
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
  {
    id: "eureca",
    companyName: "Eureca",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description: [
      "Sed accumsan urna nec neque lobortis sodales. In hac habitasse platea dictumst. Aliquam eu elementum augue. Fusce scelerisque pulvinar odio fringilla tristique.",
    ],
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
];

function ExperienceCard({ ...exp }: Experience) {
  const { ref: cardRef, className } = useTransitionEffect({
    originalClassName: "experienceCard",
  });

  return (
    <div className={className} ref={cardRef}>
      <h2 className="experienceCard__title">{exp.jobTitle}</h2>
      <a href={exp.companyName} className="experienceCard__company">
        {exp.companyName}
      </a>
      <span className="experienceCard__timing">
        {exp.startDate} - {exp.endDate}
      </span>
      <p className="experienceCard__description">{exp.description}</p>
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
    <section className={"experiences"}>
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
