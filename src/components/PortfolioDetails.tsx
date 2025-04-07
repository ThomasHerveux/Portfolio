import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./PortfolioDetails.css";

const PortfolioDetails = () => {
  return (
    <section className="portfolio-details section">
      <div className="container">
        <div className="portfolio-details-slider swiper">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <img src="/portfolio/branding-1.jpg" alt="Portfolio 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/portfolio/branding-2.jpg" alt="Portfolio 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/portfolio/branding-3.jpg" alt="Portfolio 3" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="row" style={{ display: "flex", flexWrap: "wrap", marginTop: "30px", gap: "2rem" }}>
          <div className="portfolio-info" style={{ flex: 1 }}>
            <h3>Informations du projet</h3>
            <ul>
              <li><strong>Catégorie</strong>: Web design</li>
              <li><strong>Client</strong>: Exemple Inc.</li>
              <li><strong>Date</strong>: Janvier 2024</li>
              <li><strong>URL</strong>: <a href="#">www.exemple.com</a></li>
            </ul>
          </div>

          <div className="portfolio-description" style={{ flex: 2 }}>
            <h2>Description du projet</h2>
            <p>
              Ce projet est une vitrine moderne et responsive construite avec React et Tailwind.
              Il met en avant les travaux réalisés pour un client dans le domaine du design web.
              Intégration fluide, animations douces et design minimaliste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
