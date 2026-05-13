const EXPERIENCES = [
  {
    company: "DMATE",
    role: "Data Analyst & Developer",
    period: "2020.01 — 현재",
    desc: "데이터 분석, AI 모델 개발, 데이터 파이프라인 구축 등 다양한 프로젝트 수행. 고객사의 디지털 전환을 위한 기술 컨설팅 및 솔루션 개발을 담당.",
    tags: ["Python", "SQL", "ML", "Next.js", "AWS"],
  },
];

const PROJECTS = [
  {
    title: "고객 이탈 예측 모델",
    desc: "통신사 고객 데이터를 분석해 이탈 가능성이 높은 고객을 사전에 탐지하는 ML 모델 개발. 이탈률 18% 감소 달성.",
    tags: ["Python", "XGBoost", "Tableau"],
  },
  {
    title: "실시간 매출 대시보드",
    desc: "대형 유통사의 POS 데이터를 실시간 수집·집계하여 경영진이 즉시 의사결정할 수 있는 BI 대시보드 구축.",
    tags: ["SQL", "Power BI", "FastAPI"],
  },
  {
    title: "사내 AI 어시스턴트",
    desc: "사내 문서와 업무 매뉴얼을 기반으로 직원 질의에 자동 응답하는 RAG 기반 LLM 어시스턴트 개발 및 배포.",
    tags: ["LangChain", "OpenAI API", "Next.js"],
  },
];

export default function Experience() {
  return (
    <section className="section sectionAlt" id="experience">
      <div className="sectionInner">
        <p className="sectionLabel">Experience</p>
        <h2 className="sectionTitle">경력 및 프로젝트</h2>

        <div className="expList">
          {EXPERIENCES.map((e) => (
            <div key={e.company} className="expCard">
              <div className="expLeft">
                <span className="expPeriod">{e.period}</span>
              </div>
              <div className="expRight">
                <h3 className="expRole">{e.role}</h3>
                <p className="expCompany">{e.company}</p>
                <p className="expDesc">{e.desc}</p>
                <div className="tagList">
                  {e.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subSectionTitle">주요 프로젝트</h3>
        <div className="projectGrid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="projectCard">
              <h4 className="projectTitle">{p.title}</h4>
              <p className="projectDesc">{p.desc}</p>
              <div className="tagList">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
