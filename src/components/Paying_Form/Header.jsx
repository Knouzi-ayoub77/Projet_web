import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <button className="header__back">
        <span className="header__back-arrow">←</span>
        Retour
      </button>

      <div className="header__logo">
        <div className="header__logo-title">ADESL</div>
        <div className="header__logo-subtitle">
          ASSOCIATION DE DÉVELOPPEMENT<br />
          DES ESPACES SPORTIFS ET LOISIRS
        </div>
      </div>

      <div className="header__secure">
        <span className="header__secure-icon">🛡</span>
        Paiement sécurisé
      </div>
    </header>
  );
}

export default Header;
