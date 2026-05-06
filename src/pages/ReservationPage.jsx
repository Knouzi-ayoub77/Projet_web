import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import PersonalInfoForm from '../components/PersonalInfoForm/PersonalInfoForm';
import './ReservationPage.css';

const ReservationPage = () => {
  const [isSidePanelMinimized, setIsSidePanelMinimized] = useState(false);
  const navigate = useNavigate();

  const handleContinue = (formData) => {
    console.log('Form data submitted:', formData);
    // Naviguer vers l'étape de paiement ou traiter les données
    alert('Informations enregistrées ! Redirection vers le paiement...');
    navigate('/payment'); // Assurez-vous d'avoir une route pour le paiement
  };

  const handleBack = () => {
    // Retour à l'étape précédente (sélection date/heure)
    console.log('Retour à la sélection date/heure');
    navigate('/date-heure');
  };

  const handleClose = () => {
    // Fermer le modal ou annuler la réservation
    if (window.confirm('Voulez-vous vraiment annuler la réservation ?')) {
      console.log('Réservation annulée');
    }
  };

  const handleToggleMenu = () => {
    setIsSidePanelMinimized(!isSidePanelMinimized);
  };

  return (
    <div className="reservation-container">
      <div className="bg-blur"></div>
      
      <div className={`wrapper ${isSidePanelMinimized ? 'minimized' : ''}`}>
        <Sidebar etapeActive={3} />
        <PersonalInfoForm 
          onContinue={handleContinue}
          onBack={handleBack}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default ReservationPage;