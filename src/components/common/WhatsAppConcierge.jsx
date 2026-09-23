import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_CONFIG } from '../../core/constants';
import './WhatsAppConcierge.css';

export default function WhatsAppConcierge() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BRAND_CONFIG.whatsappMessage
  )}`;

  return (
    <div className="wa-float-container">
      {showTooltip && (
        <div className="wa-bubble">
          <button
            className="wa-bubble-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
          <div className="wa-bubble-header">
            <span className="wa-bubble-status-dot" />
            <span className="wa-bubble-title">Nexo Chat</span>
          </div>
          <p className="wa-bubble-msg">
            Questions? Chat with us on WhatsApp.
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Chat with Nexo Operations on WhatsApp"
      >
        <span className="wa-ping-glow" />
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
