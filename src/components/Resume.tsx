import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <div className="container">
        <div className="section-title">
          <h1>Résumé</h1>
          <p>Voici un aperçu de mon parcours académique et professionnel</p>
        </div>

        <div className="resume-title">Formation</div>

        <div className="resume-item fade-in">
          <h4>Programme Grande École – Diplôme d'Expert en Technologies de l'Information</h4>
          <h5>Epitech, Nancy</h5>
          <p><em>2021 - 2026</em></p>
          <ul>
            <li>Apprentissage approfondi de la programmation</li>
            <li>Pédagogie active basée sur les projets</li>
          </ul>
        </div>

        <div className="resume-item fade-in">
          <h4>Baccalauréat – Mention Assez Bien</h4>
          <h5>Lycée Saint Léon IX, Nancy</h5>
          <p><em>2018 - 2021</em></p>
          <ul>
            <li>Spécialités : Mathématiques et Physique-Chimie</li>
          </ul>
        </div>

        <div className="resume-title">Expérience professionnelle</div>

        <div className="resume-item fade-in">
          <h4>Stagiaire développeur</h4>
          <h5>Enginest, Nancy</h5>
          <p><em>Décembre 2023 – Juin 2024</em></p>
          <ul>
            <li>Intégration d’algorithmes Python en C#</li>
            <li>Intégration de Google Maps et de programmes NCL</li>
            <li>Résolution de bugs visuels et fonctionnels</li>
          </ul>
        </div>

        <div className="resume-item fade-in">
          <h4>Stagiaire développeur</h4>
          <h5>Advanced System of Protection, Eulmont</h5>
          <p><em>Juillet – Décembre 2022</em></p>
          <ul>
            <li>Refonte de l’ergonomie d’une application interne</li>
            <li>Intégration de données entre deux applications</li>
            <li>Amélioration du système de drag and drop</li>
            <li>Création d’interfaces pour les commerciaux</li>
          </ul>
        </div>

        <div className="resume-item fade-in">
          <h4>Vendeur</h4>
          <h5>Feuillette, Essey-lès-Nancy</h5>
          <p><em>Septembre – Décembre 2022</em></p>
          <ul>
            <li>Vente de produits et gestion de la caisse</li>
            <li>Entretien de la boutique</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
