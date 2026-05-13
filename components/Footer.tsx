import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <Image src="/logo.png" alt="DMATE" width={100} height={30} style={{ opacity: 0.7 }} />
        <div className="footerLinks">
          <a href="#services" className="footerLink">서비스</a>
          <a href="#about" className="footerLink">회사소개</a>
          <a href="#contact" className="footerLink">연락처</a>
          <a href="mailto:judy@dmate.kr" className="footerLink">judy@dmate.kr</a>
        </div>
        <p className="footerCopy">© 2026 DMATE. All rights reserved.</p>
      </div>
    </footer>
  );
}
