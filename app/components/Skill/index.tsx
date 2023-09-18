interface SkillProps {
  name: string;
}

export default function Skill({ name }: SkillProps) {
  return (
    <div className="inline-block py-2 px-4 bg-black text-1xl text-white">
      {name}
    </div>
  );
}
