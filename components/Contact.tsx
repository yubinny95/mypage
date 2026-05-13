const CONTACTS = [
  {
    icon: "✉️",
    label: "이메일",
    value: "judy@dmate.kr",
    href: "mailto:judy@dmate.kr",
  },
  {
    icon: "🌐",
    label: "웹사이트",
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
    <section className="section sectionAlt" id="contact">
      <div className="sectionInner">
        <div className="contactWrap">
          <p className="sectionLabel">Contact</p>
          <h2 className="sectionTitle">함께 시작해보세요</h2>
          <p className="sectionDesc" style={{ margin: "0 auto" }}>
            데이터와 AI로 비즈니스를 성장시키고 싶다면 지금 바로 문의하세요.
            빠르게 연락드리겠습니다.
          </p>
          <div className="contactCards">
            {CONTACTS.map((c) => (
              <a key={c.label} href={c.href} className="contactCard">
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
