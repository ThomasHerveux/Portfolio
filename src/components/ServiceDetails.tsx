import "./ServiceDetails.css";

interface Service {
  name: string;
  image: string;
  content: string[];
}

interface ServiceDetailsProps {
  service: {
    icon: string;
    title: string;
    description: string;
    details: Service;
  };
  onBack: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack }) => {
  return (
    <section className="service-details section">
      <div className="container">
        <div className="row" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div className="col-lg-4" style={{ flex: 1 }}>
            <div className="services-list">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                }}
                className="back-link"
              >
                <strong>Retour aux services</strong>
              </a>
            </div>
            <img
              src={service.details.image}
              alt={service.details.name}
              className="img-fluid services-img"
            />
          </div>

          <div className="col-lg-8" style={{ flex: 2 }}>
            <h3>{service.details.name}</h3>
            <h4>Notre approche</h4>
            {service.details.content.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
