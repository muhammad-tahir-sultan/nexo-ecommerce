import React from 'react';
import LogoMark from './LogoMark';
import './Logo.css';

/**
 * Reusable Master Logo Component for Nexo Ecommerce
 * Renders the interlocking Nexus emblem along with precision typography.
 */
export default function Logo({ size = 'md', showText = true, className = '' }) {
  const markSizes = {
    sm: 28,
    md: 36,
    lg: 46,
  };

  const markSize = markSizes[size] || 36;

  return (
    <div className={`nexo-brand-logo nexo-brand-${size} ${className}`}>
      <div className="nexo-logo-wrapper">
        <LogoMark size={markSize} />
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
