import { useState } from "react";
import "./Portfolio.css";

const portfolioItems = [
  {
    id: 1,
    category: "web",
    title: "Projet Web",
    description: "Site vitrine pour une entreprise locale",
    image: "/portfolio/app-1.jpg",
  },
  {
    id: 2,
    category: "app",
    title: "Application Mobile",
    description: "Application React Native pour le suivi sportif",
    image: "/portfolio/app-2.jpg",
  },
  {
    id: 3,
    category: "design",
    title: "UI/UX Design",
    description: "Maquettes pour un SaaS",
    image: "/portfolio/app-3.jpg",
  },
];

const filters = ["tout", "web", "app", "design"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("tout");

  const filteredItems =
    activeFilter === "tout"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Voici quelques projets que j’ai réalisés récemment</p>
        </div>

        <ul className="portfolio-filters">
          {filters.map((filter) => (
            <li
              key={filter}
              className={filter === activeFilter ? "filter-active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>

        <div className="row">
          {filteredItems.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="portfolio-content">
                <img src={item.image} alt={item.title} className="img-fluid" />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a
                    href={item.image}
                    className="preview-link"
                    title="Aperçu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-eye"></i>
                  </a>
                  <a
                    href="#!"
                    className="details-link"
                    title="Détails"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
