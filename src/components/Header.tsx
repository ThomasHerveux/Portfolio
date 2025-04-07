import "./Header.css";
import NavMenu from "./NavMenu";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header slide-in-left">
      <div className="profile-img">
        <img src="/my-profile-img.jpg" alt="Profile" />
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/thomas-herveux-6b605322b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/ThomasHerveux"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
      </div>

      <NavMenu />

      <div className="logo-bottom-left">
        <img src="/LogoTRKSolution.png" alt="TRK Solution Logo" />
      </div>
    </header>
  );
};

export default Header;
