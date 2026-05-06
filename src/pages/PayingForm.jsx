import React from 'react';
import Header from '../components/Paying_Form/Header';
import HeroSection from '../components/Paying_Form/HeroSection';
import OrderSummary from '../components/Paying_Form/OrderSummary';
import CheckoutForm from '../components/Paying_Form/CheckoutForm';
import FloatingButtons from '../components/Paying_Form/FloatingButtons';
import '../pages/PayingForm.css';

export default function PayingForm() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroSection />
        <div className="checkout-card">
          <OrderSummary />
          <CheckoutForm />
        </div>
      </main>
      <FloatingButtons />
    </div>
  );
}
