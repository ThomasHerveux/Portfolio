import { useState } from "react";
import "./ServiceDetails.css";

const services = [
  { name: "Design UX/UI", active: true },
  { name: "Développement Web", active: false },
  { name: "SEO", active: false },
  { name: "Maintenance", active: false },
];

const ServiceDetails = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="service-details section">
      <div className="container">
        <div className="row" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {/* Liste latérale */}
          <div className="col-lg-4" style={{ flex: 1 }}>
            <div className="services-list">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelected(index);
                  }}
                  className={selected === index ? "active" : ""}
                >
                  {service.name}
                </a>
              ))}
            </div>
            <img
              src={`/services/services-${selected + 1}.jpg`}
              alt={`Service ${selected + 1}`}
              className="img-fluid services-img"
            />
          </div>

          {/* Détails */}
          <div className="col-lg-8" style={{ flex: 2 }}>
            <h3>{services[selected].name}</h3>
            <h4>Notre approche</h4>
            <p>
              Nous adoptons une approche centrée utilisateur pour offrir un service de qualité, aligné avec vos besoins métier et vos objectifs stratégiques.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Analyse des besoins personnalisée</li>
              <li><i className="bi bi-check-circle"></i> Solutions évolutives et modernes</li>
              <li><i className="bi bi-check-circle"></i> Accompagnement tout au long du projet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
