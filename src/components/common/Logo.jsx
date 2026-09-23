import React from 'react';
import './Logo.css';

/**
 * Nexo Ecommerce - Master 3D Brand Logo
 * Features the signature 3D interlocking chrome & neon emblem with typography.
 */
export default function Logo({ size = 'md', showText = true, className = '' }) {
  return (
    <div className={`nexo-brand-logo nexo-brand-${size} ${className}`}>
      <div className="nexo-logo-wrapper">
        <img
          src="/nexo_symbol.png"
          alt="Nexo Ecommerce Emblem"
          className="nexo-logo-img"
        />
        <div className="nexo-logo-aura" />
      </div>
      {showText && (
        <div className="nexo-brand-text">
          <span className="nexo-brand-name">
            NEX<span className="nexo-name-accent">O</span>
          </span>
          <span className="nexo-brand-domain">ECOMMERCE</span>
        </div>
      )}
    </div>
  );
}
