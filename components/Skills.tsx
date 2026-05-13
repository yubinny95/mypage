type Skill = { name: string; level: number };

const SKILL_GROUPS: { category: string; icon: string; skills: Skill[] }[] = [
  {
    category: "데이터 분석",
    icon: "📊",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "R", level: 70 },
    ],
  },
  {
    category: "AI · 머신러닝",
    icon: "🤖",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow / Keras", level: 75 },
      { name: "LLM / Prompt Engineering", level: 80 },
      { name: "MLOps", level: 65 },
    ],
  },
  {
    category: "시각화 · BI",
    icon: "📈",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "Plotly / Dash", level: 75 },
    ],
  },
  {
    category: "개발 · 인프라",
    icon: "💻",
    skills: [
      { name: "Next.js / TypeScript", level: 75 },
      { name: "FastAPI", level: 70 },
      { name: "Docker / AWS", level: 65 },
      { name: "Git", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="sectionInner">
        <p className="sectionLabel">Skills</p>
        <h2 className="sectionTitle">기술 스택</h2>
        <p className="sectionDesc">
          데이터 분석부터 AI 모델 개발, 시각화, 웹 개발까지 폭넓게 다룹니다.
        </p>
        <div className="skillsGrid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skillCard">
              <div className="skillCardHeader">
                <span className="skillIcon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <ul className="skillList">
                {group.skills.map((s) => (
                  <li key={s.name} className="skillItem">
                    <div className="skillMeta">
                      <span className="skillName">{s.name}</span>
                      <span className="skillPct">{s.level}%</span>
                    </div>
                    <div className="skillBar">
                      <div className="skillFill" style={{ width: `${s.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
