export default function Hero() {
  return (
    <section className="hero">
      <div className="heroInner">
        <div className="heroBadge">Data · AI · Developer</div>
        <h1>
          안녕하세요,<br />
          <span>민유빈</span>입니다
        </h1>
        <p className="heroSub">
          데이터와 AI로 문제를 해결하는 개발자입니다.<br />
          복잡한 데이터 속에서 의미 있는 인사이트를 찾아내고,
          이를 실질적인 가치로 만드는 일을 합니다.
        </p>
        <div className="heroBtns">
          <a href="#skills" className="btnPrimary">기술 스택 보기</a>
          <a href="#contact" className="btnSecondary">연락하기</a>
        </div>
      </div>
    </section>
  );
}
