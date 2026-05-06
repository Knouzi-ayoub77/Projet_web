import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Fond avec overlay vert */}
      <div className="hero-bg" />

      {/* Contenu principal */}
      <div className="hero-content">
        <h1 className="hero-title">
          La gestion inclusive des espaces sportifs de la préfecture
          des arrondissements de Sidi Bernoussi
        </h1>
        <p className="hero-sub">
          Préparez-vous à vivre des moments intenses avec<br />
          notre système de réservation en ligne.
        </p>
        <button className="btn-reserve">Réserver maintenant</button>
      </div>

      {/* Bouton lecture vidéo */}
      <button className="play-btn" aria-label="Lire la vidéo">
        <div className="play-icon" />
      </button>

      {/* Bouton chat */}
      <button className="chat-btn" aria-label="Ouvrir le chat">
        <svg
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="white"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </section>
  );
}