import React from "react";
import "./PageTitle.css";

type PageTitleProps = {
  title: string;
  breadcrumbs?: string[]; // Exemple: ["Accueil", "Projets", "Détail"]
};

const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="page-title">
      <div className="container">
        <h1>{title}</h1>
        {breadcrumbs.length > 0 && (
          <div className="breadcrumbs">
            <ol>
              {breadcrumbs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageTitle;
