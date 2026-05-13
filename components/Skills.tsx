const SKILLS = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Git",
  "Figma",
];

export default function Skills() {
  return (
    <div className="card">
      <p className="cardTitle">Skills</p>
      <div className="skillsGrid">
        {SKILLS.map((skill) => (
          <span key={skill} className="skillTag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
