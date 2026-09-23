import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG, OPERATIONAL_STATISTICS } from '../../core/constants';
import { FOOTER_SECTIONS } from '../../data/navigation';
import Logo from './Logo';
import './Footer.css';

export default function Footer({ onOpenApplyModal }) {
  return (
    <footer className="footer-wrapper">
      {/* Upper Pre-Footer CTA Bar */}
      <div className="container">
        <div className="footer-cta-card">
          <div className="cta-card-content">
            <span className="cta-pill">Limited Partnership Allocations</span>
            <h3 className="cta-card-title">
              Ready to Turn Your Account Into a <span className="text-gradient">High-Yield E-Commerce Asset?</span>
            </h3>
            <p className="cta-card-desc">
              Zero upfront inventory investment. 100% legal ownership retained. Our operational team handles product research, listings, fulfillment, and customer support.
            </p>
          </div>
          <div className="cta-card-actions">
            <button className="btn btn-primary btn-lg" onClick={onOpenApplyModal}>
              Apply For Partnership <ArrowUpRight size={18} />
            </button>
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} /> Direct WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-link">
              <Logo size="lg" />
            </Link>

            <p className="footer-brand-desc">{BRAND_CONFIG.description}</p>

            <div className="footer-ownership-badge">
              <ShieldCheck className="text-emerald" size={20} />
              <div>
                <strong>Ownership Guarantee</strong>
                <span>100% Client Legal & Banking Control</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="footer-links-col">
              <h4 className="footer-col-title">{section.title}</h4>
              <ul className="footer-links-list">
                {section.links.map((link) => {
                  const isAnchor = link.href.includes('#');
                  return (
                    <li key={link.label}>
                      {isAnchor ? (
                        <a href={link.href} className="footer-link">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Contact & Status Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Operations Desk</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${BRAND_CONFIG.contactEmail}`}>{BRAND_CONFIG.contactEmail}</a>
              </div>
              <div className="footer-contact-item">
                <MessageCircle size={16} className="contact-icon" />
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +{BRAND_CONFIG.whatsappNumber} (WhatsApp)
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
            </div>

            <div className="desk-status-box">
              <span className="live-dot" />
              <span>Operations Live: US & EU Shifts On-Duty</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className="footer-legal-notice">
          <p>
            <strong>Regulatory & Operational Disclaimer:</strong> Nexo Ecommerce provides non-exclusive e-commerce store management, listing optimization, catalog research, and customer support operations. Clients and partners remain the sole registered account holders and beneficial owners of their marketplace accounts, funds, and bank accounts at all times. Payouts from eBay or marketplaces settle directly into the partner’s personal bank account. Nexo Ecommerce never makes representations of guaranteed financial returns; yields depend on marketplace catalog dynamics and compliant store health.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service">Terms of Service</Link>
            <span>•</span>
            <Link to="/partnership#ownership-terms">Legal Ownership Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
