import React, { useState } from 'react';
import './CheckoutForm.css';

const COUNTRIES = [
  { code: 'MA', dial: '+212', flag: '🇲🇦' },
  { code: 'FR', dial: '+33',  flag: '🇫🇷' },
  { code: 'US', dial: '+1',   flag: '🇺🇸' },
];

function CheckoutForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: COUNTRIES[0],
  });

  const [showCountries, setShowCountries] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectCountry = (c) => {
    setForm({ ...form, country: c });
    setShowCountries(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${form.firstName} ${form.lastName}`);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      {/* ─── Informations clients ─── */}
      <section className="checkout-form__section">
        <h2 className="checkout-form__section-title">Informations sur les clients</h2>

        <div className="checkout-form__row">
          <div className="checkout-form__field">
            <label className="checkout-form__label">Prénom *</label>
            <input
              className="checkout-form__input"
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Prénom"
              required
            />
          </div>
          <div className="checkout-form__field">
            <label className="checkout-form__label">Nom *</label>
            <input
              className="checkout-form__input"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Nom"
              required
            />
          </div>
        </div>

        <div className="checkout-form__row">
          <div className="checkout-form__field">
            <label className="checkout-form__label">Téléphone *</label>
            <div className="checkout-form__phone-wrapper">
              <button
                type="button"
                className="checkout-form__country-btn"
                onClick={() => setShowCountries(!showCountries)}
              >
                <span>{form.country.flag}</span>
                <span>{form.country.dial}</span>
                <span className="checkout-form__country-chevron">▾</span>
              </button>

              {showCountries && (
                <div className="checkout-form__country-dropdown">
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      className="checkout-form__country-option"
                      onClick={() => selectCountry(c)}
                    >
                      {c.flag} {c.dial}
                    </button>
                  ))}
                </div>
              )}

              <input
                className="checkout-form__input checkout-form__input--phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="688898512"
                required
              />
            </div>
          </div>

          <div className="checkout-form__field">
            <label className="checkout-form__label">E-mail (optional)</label>
            <input
              className="checkout-form__input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="exemple@gmail.com"
            />
          </div>
        </div>
      </section>

      {/* ─── Informations paiements ─── */}
      <section className="checkout-form__section">
        <h2 className="checkout-form__section-title">Informations sur les paiements</h2>

        <div className="checkout-form__payment-logos">
          <PaymentBadge label="VISA" color="#1a1f71" textColor="#fff" />
          <PaymentBadge label="Maestro" color="#007bc1" textColor="#fff" />
          <PaymentBadge label="MasterCard" color="#eb001b" textColor="#fff" />
          <PaymentBadge label="CMI" color="#e85d04" textColor="#fff" />
        </div>

        <p className="checkout-form__privacy">
          Vos données personnelles seront utilisées pour le traitement de votre commande, vous
          accompagner au cours de votre visite du site web, et pour d'autres raisons décrites dans
          notre{' '}
          <a href="#privacy" className="checkout-form__link">
            privacy policy
          </a>
          .
        </p>

        <button type="submit" className="checkout-form__submit">
          <span className="checkout-form__submit-check">✓</span>
          Réservez Dès Maintenant &nbsp; 150,00 د.م.
        </button>
      </section>

      {/* ─── Security badges ─── */}
      <div className="checkout-form__security-badges">
        <div className="checkout-form__badge checkout-form__badge--visa">
          <span className="badge-verified">Verified by</span>
          <span className="badge-brand badge-brand--blue">VISA</span>
        </div>
        <div className="checkout-form__badge checkout-form__badge--mc">
          <span className="badge-brand badge-brand--red">MasterCard</span>
          <span className="badge-secure">SecureCode.</span>
        </div>
      </div>
    </form>
  );
}

function PaymentBadge({ label, color, textColor }) {
  return (
    <div className="payment-badge" style={{ background: color, color: textColor }}>
      {label}
    </div>
  );
}

export default CheckoutForm;
