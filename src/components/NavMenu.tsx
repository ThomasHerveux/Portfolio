import "./NavMenu.css";

const NavMenu = () => {
  return (
    <nav className="navmenu">
      <ul>
        <li>
          <a href="#about">
            <span className="navicon">🧑‍💼</span> {/* Profil */}
            À propos
          </a>
        </li>
        <li>
          <a href="#skills">
            <span className="navicon">🧠</span> {/* Compétences */}
            Compétences
          </a>
        </li>
        <li>
          <a href="#resume">
            <span className="navicon">📄</span> {/* Résumé CV */}
            Résumé
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <span className="navicon">🎨</span> {/* Portfolio */}
            Portfolio
          </a>
        </li>
        <li>
          <a href="#services">
            <span className="navicon">🛠️</span> {/* Services */}
            Services
          </a>
        </li>
        <li>
          <a href="#contact">
            <span className="navicon">📬</span> {/* Contact */}
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
