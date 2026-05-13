interface ExperienceItem {
  period: string;
  title: string;
  description: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 — 현재",
    title: "프론트엔드 개발자 · ○○○ 회사",
    description: "사용자 인터페이스 개발 및 성능 최적화를 담당했습니다.",
  },
  {
    period: "2022 — 2024",
    title: "웹 개발 인턴 · ○○○ 회사",
    description: "React 기반 대시보드 개발 및 API 연동 작업을 했습니다.",
  },
];

export default function Experience() {
  return (
    <div className="card">
      <p className="cardTitle">Experience</p>
      <div className="timeline">
        {EXPERIENCES.map((exp) => (
          <div key={exp.period} className="timelineItem">
            <div className="timelineDot" />
            <div className="timelineBody">
              <p className="timelineMeta">{exp.period}</p>
              <h4>{exp.title}</h4>
              <p className="timelineDesc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
