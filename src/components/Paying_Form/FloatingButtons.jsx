import React from 'react';
import './FloatingButtons.css';

const BUTTONS = [
  { icon: '📍', label: 'Location',  color: '#2ecc71', action: () => {} },
  { icon: '📞', label: 'Call',      color: '#2ecc71', action: () => {} },
  { icon: '💬', label: 'WhatsApp',  color: '#25d366', action: () => {} },
  { icon: '✕',  label: 'Close',     color: '#555',    action: () => {} },
];

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      {BUTTONS.map((btn) => (
        <button
          key={btn.label}
          className="floating-btn"
          style={{ background: btn.color }}
          onClick={btn.action}
          aria-label={btn.label}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
}

export default FloatingButtons;
