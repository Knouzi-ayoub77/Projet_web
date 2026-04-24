import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>
            La gestion inclusive des espaces sportifs
          </h1>

          <p>
            Préparez-vous à vivre des moments intenses avec notre système de réservation.
          </p>

          <button className="btn">Réserver maintenant</button>
        </div>
      </div>
    </section>
  );
}