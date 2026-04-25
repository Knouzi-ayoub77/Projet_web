import './DateHeure.css'
import { useEffect } from 'react'//supprimer
import { useNavigate } from 'react-router-dom'
import { initCalendrier } from './calendrier'//supprimer

function DateHeure() {
  const navigate = useNavigate()
    // Lance le calendrier après que le composant est affiché
  useEffect(() => {
    initCalendrier()
  }, [])

  return (
    <main className="booking-main-date">

      <div className="form-header-date">
        <button className="btn-back" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <h1>Date et heure</h1>
      </div>
      <div className="header-line"></div>

      <div className="calendar-section">

        <div className="calendar-controls">
          <div className="select-wrapper-cal">
            <select id="select-mois" defaultValue="3">
              <option value="0">janvier</option>
              <option value="1">février</option>
              <option value="2">mars</option>
              <option value="3">avril</option>
              <option value="4">mai</option>
              <option value="5">juin</option>
              <option value="6">juillet</option>
              <option value="7">août</option>
              <option value="8">septembre</option>
              <option value="9">octobre</option>
              <option value="10">novembre</option>
              <option value="11">décembre</option>
            </select>
            <svg className="select-arrow-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>

          <div className="select-wrapper-cal">
            <select id="select-annee" defaultValue="2026">
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
            <svg className="select-arrow-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>

          <div className="nav-arrows">
            <button className="nav-btn" id="prev-month">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="nav-btn" id="next-month">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="timezone-badge">Africa/Casablanca</div>

        <div className="calendar-grid">
          <div className="cal-header">lun.</div>
          <div className="cal-header">mar.</div>
          <div className="cal-header">mer.</div>
          <div className="cal-header">jeu.</div>
          <div className="cal-header">ven.</div>
          <div className="cal-header">sam.</div>
          <div className="cal-header">dim.</div>
        </div>

        {/* Les jours sont injectés ici par JS */}
        <div id="calendar-days" className="calendar-days-container"></div>

      </div>

      {/* Horaires — cachés par défaut, JS enlève 'hidden' */}
      <div className="horaires-section hidden" id="horaires-section">
        <p className="horaires-date" id="horaires-date"></p>
        <div className="horaires-grid" id="horaires-grid"></div>
      </div>

      <div className="form-actions-date">
        <button className="btn-continuer-date" onClick={() => navigate('/informations')}>
          Continuer
        </button>
      </div>

    </main>
  )
}

export default DateHeure