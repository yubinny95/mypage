export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <span className="footerLogo">민유빈</span>
        <div className="footerLinks">
          <a href="#skills" className="footerLink">기술 스택</a>
          <a href="#experience" className="footerLink">경력</a>
          <a href="#about" className="footerLink">소개</a>
          <a href="mailto:judy@dmate.kr" className="footerLink">judy@dmate.kr</a>
        </div>
        <p className="footerCopy">© 2026 민유빈. All rights reserved.</p>
      </div>
    </footer>
  );
}
