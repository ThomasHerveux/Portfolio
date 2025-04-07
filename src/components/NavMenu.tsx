import "./NavMenu.css";

const menuItems = [
  { href: "#about", icon: "🧑‍💼", label: "À propos" },
  { href: "#skills", icon: "🧠", label: "Compétences" },
  { href: "#resume", icon: "📄", label: "Résumé" },
  { href: "#portfolio", icon: "🎨", label: "Portfolio" },
  { href: "#services", icon: "🛠️", label: "Services" },
  { href: "#contact", icon: "📬", label: "Contact" },
];

const NavMenu = () => {
  return (
    <nav className="navmenu">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={item.href}
            className="navmenu-item fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <a href={item.href}>
              <span className="navicon">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
