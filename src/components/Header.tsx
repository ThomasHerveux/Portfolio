import "./Header.css";
import NavMenu from "./NavMenu";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="profile-img">
        <h1>Thomas HERVEUX</h1>
        <img src="/my-profile-img.jpg" alt="Profile" />
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/thomas-herveux-6b605322b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} color="#0A66C2" />
        </a>
        <a
          href="https://github.com/ThomasHerveux"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} color="#000" />
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
