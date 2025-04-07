import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwo7Gk_ouwydll9qBORwP7oWOGHThEGG3v2JCGKQzKLN8OnuPPZMNofVzKcV96LpDCL/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      setFormData({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch (err) {
      console.error("Erreur :", err);
      setStatus("error");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h1>Contact</h1>
          <p>Envie de travailler ensemble ?</p>
        </div>

        <div className="row" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div className="info-wrap" style={{ flex: 1 }}>
            <div className="info-item" style={{ display: "flex", alignItems: "center" }}>
              <i className="bi bi-geo-alt"></i>
              <div>
                <h3>Adresse</h3>
                <p>54670 Millery</p>
              </div>
            </div>

            <div className="info-item" style={{ display: "flex", alignItems: "center" }}>
              <i className="bi bi-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>trk.code@gmail.com</p>
              </div>
            </div>

            <div className="info-item" style={{ display: "flex", alignItems: "center" }}>
              <i className="bi bi-phone"></i>
              <div>
                <h3>Téléphone</h3>
                <p>+33 7 68 02 15 54</p>
              </div>
            </div>
          </div>

          {/* Formulaire avec envoi JS */}
          <form onSubmit={handleSubmit} className="php-email-form" style={{ flex: 1 }}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <textarea
                name="message"
                rows={6}
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>
              {status === "sent" && <p className="success-message">✅ Message envoyé !</p>}
              {status === "error" && <p className="error-message">❌ Une erreur est survenue.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
