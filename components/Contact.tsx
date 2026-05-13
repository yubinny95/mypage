interface ContactItem {
  icon: string;
  label: string;
  href: string;
}

const CONTACTS: ContactItem[] = [
  { icon: "✉️", label: "judy@dmate.kr", href: "mailto:judy@dmate.kr" },
  { icon: "💼", label: "linkedin.com/in/yubinmin", href: "#" },
  { icon: "🐙", label: "github.com/yubinny95", href: "https://github.com/yubinny95" },
];

export default function Contact() {
  return (
    <div className="card">
      <p className="cardTitle">Contact</p>
      <ul className="contactList">
        {CONTACTS.map((item) => (
          <li key={item.label} className="contactItem">
            <div className="contactIcon">{item.icon}</div>
            <a href={item.href} className="contactLink">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
