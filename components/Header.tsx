export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <a href="#" className="logoWrap">
          <span className="logoText">민유빈</span>
        </a>
        <nav className="nav">
          <a href="#skills" className="navLink">기술 스택</a>
          <a href="#experience" className="navLink">경력</a>
          <a href="#about" className="navLink">소개</a>
          <a href="#contact" className="navLink navCta">연락하기</a>
        </nav>
      </div>
    </header>
  );
}
