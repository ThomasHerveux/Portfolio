import { useState } from "react";
import "./Services.css";
import ServiceDetails from "./ServiceDetails";

const services = [
  {
    icon: "bi bi-code-slash",
    title: "Développement Web",
    description: "Création de sites performants, responsives et modernes.",
    details: {
      name: "Développement Web",
      image: "/services/services-1.jpg",
      content: [
        "Sites vitrines, e-commerce et applications web sur mesure.",
        "Technologies modernes : React, Node.js, PHP, etc.",
        "Responsive design et SEO-friendly."
      ]
    }
  },
  {
    icon: "bi bi-phone",
    title: "Applications Mobiles",
    description: "Applications natives et cross-platform sur iOS et Android.",
    details: {
      name: "Applications Mobiles",
      image: "/services/services-2.jpg",
      content: [
        "Développement Android et iOS natif ou avec Flutter/React Native.",
        "Expérience fluide et performances optimisées.",
        "Intégration API, notifications push, store publishing."
      ]
    }
  },
  {
    icon: "bi bi-palette",
    title: "UI/UX Design",
    description: "Design d’interfaces intuitives centrées sur l’expérience utilisateur.",
    details: {
      name: "UI/UX Design",
      image: "/services/services-3.jpg",
      content: [
        "Prototypage avec Figma et Adobe XD.",
        "Design centré utilisateur et parcours optimisés.",
        "Création de chartes graphiques et composants UI."
      ]
    }
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h1>Services</h1>
          <p>Ce que je propose</p>
        </div>

        {selectedService === null ? (
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div
                  className="service-item d-flex"
                  onClick={() => setSelectedService(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="service-back">{service.title}</a>
                    </h4>
                    <p className="description">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <ServiceDetails
              service={services[selectedService]}
              onBack={() => setSelectedService(null)}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Services;