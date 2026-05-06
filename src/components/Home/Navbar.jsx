import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "accueil",      label: "Accueil" },
  { id: "apropos",      label: "À propos" },
  { id: "activites",    label: "Nos activités" },
  { id: "reservations", label: "Mes réservations" },
  { id: "contact",      label: "Contact" },
];

export default function Navbar() {
  const [lang, setLang]           = useState("fr");
  const [activeLink, setActiveLink] = useState("accueil");

  return (
    <>
      {/* Frise décorative islamique */}
      <div className="top-strip" />

      <nav className="navbar">
        {/* Barre de sélection de langue */}
        <div className="lang-bar">
          <span>Sélectionner la langue :</span>
          <div
            className="lang-toggle"
            onClick={() => setLang(l => (l === "fr" ? "ar" : "fr"))}
          >
            <span
              className="lang-fr"
              style={{ color: lang === "fr" ? "#c8e063" : "rgba(255,255,255,0.7)" }}
            >
              FR
            </span>
            <div className="toggle-switch">
              <div className={`toggle-thumb ${lang === "ar" ? "ar" : ""}`} />
            </div>
            <span className="lang-label">AR</span>
          </div>
        </div>

        {/* Ligne principale : logo + liens */}
        <div className="nav-main">
          {/* Marque */}
          <div className="nav-brand">
            <svg
              className="nav-icon"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="21" cy="21" r="20"
                fill="rgba(255,255,255,0.15)"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
              <circle cx="26" cy="11" r="3.5" fill="white" />
              <path
                d="M24 15 L20 22 L15 26 M24 15 L28 20 L32 18 M20 22 L18 30 M22 22 L24 30"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="nav-title">
              L'Association de Développement des Espaces Sportifs<br />
              et Loisirs Sidi Bernoussi – Sidi Moumen
            </p>
          </div>

          {/* Liens de navigation */}
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href="#"
                  className={activeLink === link.id ? "active" : ""}
                  onClick={e => {
                    e.preventDefault();
                    setActiveLink(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Icône loupe */}
            <li>
              <button className="nav-search" aria-label="Rechercher">
                <svg
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="white"
                  strokeWidth="2.2" strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}