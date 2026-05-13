const CONTACTS = [
  {
    icon: "✉️",
    label: "이메일",
    value: "judy@dmate.kr",
    href: "mailto:judy@dmate.kr",
  },
  {
    icon: "🌐",
    label: "회사 웹사이트",
    value: "dmate.kr",
    href: "https://dmate.kr",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/yubinny95",
    href: "https://github.com/yubinny95",
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="sectionInner">
        <div className="contactWrap">
          <p className="sectionLabel">Contact</p>
          <h2 className="sectionTitle">함께 이야기해요</h2>
          <p className="sectionDesc" style={{ margin: "0 auto" }}>
            데이터, AI, 개발 관련 협업이나 문의는 언제든지 연락 주세요.
            빠르게 답변드리겠습니다.
          </p>
          <div className="contactCards">
            {CONTACTS.map((c) => (
              <a key={c.label} href={c.href} className="contactCard" target="_blank" rel="noopener noreferrer">
                <div className="contactCardIcon">{c.icon}</div>
                <div className="contactCardLabel">{c.label}</div>
                <div className="contactCardValue">{c.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
