import "./Services.css";

const services = [
  {
    icon: "bi bi-code-slash",
    title: "Développement Web",
    description: "Création de sites performants, responsives et modernes.",
  },
  {
    icon: "bi bi-phone",
    title: "Applications Mobiles",
    description: "Applications natives et cross-platform sur iOS et Android.",
  },
  {
    icon: "bi bi-palette",
    title: "UI/UX Design",
    description: "Design d’interfaces intuitives centrées sur l’expérience utilisateur.",
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Ce que je propose</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="service-item d-flex">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#">{service.title}</a>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
``
