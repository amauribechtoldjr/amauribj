interface SkillProps {
  name: string;
}

export default function Skill({ name }: SkillProps) {
  return (
    <div className="inline-block py-1 px-2 bg-black text-1xl text-white">
      {name}
    </div>
  );
}
