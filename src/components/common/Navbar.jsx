import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { NAV_LINKS } from '../../data/navigation';
import { BRAND_CONFIG } from '../../core/constants';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar({ onOpenApplyModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader(20);
  const location = useLocation();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-pill">
              <span className="live-dot" /> Live
            </span>
            <span className="top-bar-text">Working with Germany, Italy, France, UK, Spain & All Europe</span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-guarantee">
              <ShieldCheck size={12} className="text-emerald" /> 100% Client Account Ownership
            </span>
          </div>
        </div>
      </div>

      <nav className="navbar-main">
        <div className="container navbar-container">
          {/* Master Brand Logo */}
          <Link to="/" className="navbar-brand-link" onClick={handleLinkClick}>
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Items */}
          <div className="navbar-links">
            {NAV_LINKS.map((item) => {
              const isAnchor = item.href.includes('#');
              const isActive = !isAnchor && location.pathname === item.href;

              return isAnchor ? (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="navbar-actions">
            <Button
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              onClick={onOpenApplyModal}
              className="navbar-cta"
            >
              Apply for Partnership
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-links-list">
            {NAV_LINKS.map((item) => {
              const isAnchor = item.href.includes('#');
              return isAnchor ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="mobile-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mobile-drawer-cta">
            <Button
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              style={{ width: '100%' }}
            >
              Apply for Partnership
            </Button>
            <div className="mobile-guarantee-note">
              <ShieldCheck size={14} className="text-emerald" /> 100% Client Legal Ownership
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
