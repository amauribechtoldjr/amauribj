import { useState } from "react";
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
    description: "123123",
    startDate: "Jan 2020",
    endDate: "Current",
  },
  {
    id: "amcom",
    companyName: "AMcom",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description: "2",
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
  {
    id: "bornlogic",
    companyName: "Bornlogic",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description: "3",
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
  {
    id: "unimestre",
    companyName: "Unimestre",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description: "4",
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
  {
    id: "eureca",
    companyName: "Eureca",
    jobTitle: "Desenvolvedor Front-end",
    skills: ["React", "Next.js", "Styled Components"],
    description: ["5", "tteste um dois três"],
    startDate: "Oct 2018",
    endDate: "Set 2019",
  },
];

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );

  const { ref, isVisible } = useTransitionEffect();

  const handleJobExperienceClick = (exp: Experience) => {
    setSelectedExperience(exp);
  };

  return (
    <section
      className={`experiences ${
        isVisible ? "transitionVisible" : "transitionHide"
      }`}
      ref={ref}
    >
      <div>
        <h2 className="kungfuheading experiences__title">Experiência</h2>
      </div>
      <div className="cards_wrapper">
        <div className="experiences__cards">
          {experiences.map((exp) => (
            <div
              className={`experiences__card`}
              key={exp.id}
              onClick={() => handleJobExperienceClick(exp)}
            >
              {selectedExperience.id === exp.id && (
                <span className="experiences__card__activeIcon">{`>`}</span>
              )}
              <span className="experiences__card__title">
                {`${exp.jobTitle} - ${exp.companyName}`}
              </span>
              <span className="experiences__card__date">
                {`${exp.startDate} - ${exp.endDate}`}
              </span>
            </div>
          ))}
        </div>
        <div className={`experiences__cardsContent`}>
          <div className="experiences__descriptionsContainer">
            {Array.isArray(selectedExperience.description) ? (
              selectedExperience.description.map((exp, index) => (
                <p key={index} className="experiences__cards__description">
                  {exp}
                </p>
              ))
            ) : (
              <p className="experiences__cards__description">
                {selectedExperience.description}
              </p>
            )}
          </div>
          <div className="experiences__contentSkills">
            {selectedExperience.skills.map((skill) => (
              <Skill key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
