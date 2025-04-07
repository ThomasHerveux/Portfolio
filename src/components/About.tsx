import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>À propos</h2>
          <p>Je suis développeur, spécialisé dans le développement de jeux vidéo et d’applications sur mesure.</p>
          <p>Grâce à mes expériences en <strong>C++, Unreal Engine, Unity, et en développement logiciel (C#, Windev, SQL)</strong>, j’ai acquis une solide base technique que je mets au service de projets variés.</p>
          <p>Curieux, adaptable et autonome, <strong>j’apprends rapidement</strong> pour répondre à des besoins nouveaux, même en dehors de ma spécialité.</p>
          <p><strong>Mon objectif : </strong>proposer des solutions fiables, efficaces et adaptées à chaque client.</p>
        </div>

        <div className="content">
          <h2>Développeur passionné</h2>
          <ul>
            <li>
              <i className="fas fa-user"></i>
              <strong>Nom :</strong> Thomas HERVEUX
            </li>
            <li>
              <i className="fas fa-calendar"></i>
              <strong>Âge :</strong> 21 ans
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <strong>Localisation :</strong> Millery, France
            </li>
            <li>
              <i className="fas fa-laptop-code"></i>
              <strong>Spécialité :</strong> Game dev, backend & outils métier
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
