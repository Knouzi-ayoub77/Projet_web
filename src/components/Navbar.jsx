import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Association Sportive
      </div>

      <ul className="menu">
        <li>Accueil</li>
        <li>À propos</li>
        <li>Nos activités</li>
        <li>Mes réservations</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}