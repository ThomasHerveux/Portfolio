import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src="/hero-bg.jpg" alt="Background" />
      <div className="container">
        <h2>Salut, moi c’est Thomas</h2>
        <p>
        Compétent et curieux, j’apprends en continu pour créer des solutions efficaces.
        </p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/thomas-herveux-6b605322b" target="in/thomas-herveux-6b605322b" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
