import React from "react";
import "./Section.css";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, description, children }) => {
  return (
    <section id={id} className="section">
      <div className="container">
        {(title || description) && (
          <div className="section-title">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
