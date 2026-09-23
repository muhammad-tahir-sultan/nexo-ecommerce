import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppConcierge from './components/common/WhatsAppConcierge';
import ApplicationModal from './components/sections/ApplicationModal';
import { useApplicationModal } from './hooks/useApplicationModal';

import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Partnership from './pages/Partnership';
import About from './pages/About';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import './styles/index.css';

/**
 * Scroll to top on every navigation
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const {
    isOpen,
    openModal,
    closeModal,
    currentStep,
    nextStep,
    prevStep,
    formData,
    updateField,
    errors,
    isSubmitting,
    submissionResult,
  } = useApplicationModal();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="nexo-app-container">
        {/* Main Navbar */}
        <Navbar onOpenApplyModal={() => openModal()} />

        {/* Dynamic Page Views */}
        <main className="nexo-main-viewport">
          <Routes>
            <Route path="/" element={<Home onOpenApplyModal={() => openModal()} />} />
            <Route
              path="/how-it-works"
              element={<HowItWorks onOpenApplyModal={() => openModal()} />}
            />
            <Route
              path="/partnership"
              element={<Partnership onOpenApplyModal={() => openModal()} />}
            />
            <Route
              path="/about"
              element={<About onOpenApplyModal={() => openModal()} />}
            />
            <Route
              path="/faq"
              element={<FAQ onOpenApplyModal={() => openModal()} />}
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<Home onOpenApplyModal={() => openModal()} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenApplyModal={() => openModal()} />

        {/* Global Floating Concierge */}
        <WhatsAppConcierge />

        {/* Global Partner Application Modal Wizard */}
        <ApplicationModal
          isOpen={isOpen}
          onClose={closeModal}
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          updateField={updateField}
          errors={errors}
          isSubmitting={isSubmitting}
          submissionResult={submissionResult}
        />
      </div>
    </BrowserRouter>
  );
}
