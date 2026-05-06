import React, { useState } from 'react';
import './OrderSummary.css';

function OrderSummary() {
  const [open, setOpen] = useState(false);

  return (
    <div className="order-summary">
      <button
        className="order-summary__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="order-summary__left">
          <span className="order-summary__cart-icon">🛒</span>
          <span className="order-summary__label">Résumé de l'ordre de spectacle</span>
        </div>
        <div className="order-summary__right">
          <span className="order-summary__price">150,00 د.م.</span>
          <span className={`order-summary__chevron ${open ? 'open' : ''}`}>▾</span>
        </div>
      </button>

      {open && (
        <div className="order-summary__details">
          <div className="order-summary__item">
            <span>Billet d'entrée × 1</span>
            <span>150,00 د.م.</span>
          </div>
          <div className="order-summary__total">
            <span>Total</span>
            <span>150,00 د.م.</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
