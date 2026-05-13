import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <a href="#" className="logoWrap">
          <Image src="/logo.png" alt="DMATE" width={120} height={36} priority />
        </a>
        <nav className="nav">
          <a href="#services" className="navLink">서비스</a>
          <a href="#about" className="navLink">회사소개</a>
          <a href="#contact" className="navLink">연락처</a>
          <a href="#contact" className="navLink navCta">문의하기</a>
        </nav>
      </div>
    </header>
  );
}
