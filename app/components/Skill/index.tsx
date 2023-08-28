import styles from "./styles.css";

interface SkillProps {
  name: string;
}

export default function Skill({ name }: SkillProps) {
  return <div className="skill">{name}</div>;
}

export const links = () => [{ rel: "stylesheet", href: styles }];
