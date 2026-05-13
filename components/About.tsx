const STATS = [
  { number: "4+", label: "년 경력" },
  { number: "30+", label: "프로젝트 완료" },
  { number: "2020", label: "DMATE 합류" },
  { number: "100%", label: "열정" },
];

export default function About() {
  return (
    <section className="section sectionAlt" id="about">
      <div className="sectionInner">
        <div className="aboutGrid">
          <div>
            <p className="sectionLabel">About Me</p>
            <h2 className="sectionTitle">데이터로 가치를<br />만들어냅니다</h2>
            <p className="aboutText">
              데이터 분석과 AI 개발을 통해 기업의 디지털 전환을 지원하고 있습니다.
              숫자 뒤에 숨겨진 인사이트를 찾아내고, 이를 실제 비즈니스 성과로
              연결하는 과정에서 보람을 느낍니다.
            </p>
            <p className="aboutText" style={{ marginTop: "14px" }}>
              DMATE에서 다양한 산업군의 고객사와 함께 데이터 파이프라인 구축,
              머신러닝 모델 개발, BI 대시보드 설계 등의 프로젝트를 수행해왔습니다.
              기술과 비즈니스를 함께 이해하는 것이 저의 강점입니다.
            </p>
          </div>
          <div className="statsGrid">
            {STATS.map((s) => (
              <div key={s.label} className="statCard">
                <div className="statNumber">{s.number}</div>
                <div className="statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
