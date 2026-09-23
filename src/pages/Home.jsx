import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Award,
  ChevronRight,
  DollarSign,
  Users,
  Store,
  Globe,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import TrustTicker from '../components/sections/TrustTicker';
import BentoFeaturesSection from '../components/sections/BentoFeaturesSection';
import ProfitCalculatorSection from '../components/sections/ProfitCalculatorSection';
import StoreProofSection from '../components/sections/StoreProofSection';
import ResponsibilityMatrixSection from '../components/sections/ResponsibilityMatrixSection';
import { BRAND_CONFIG, PARTNERSHIP_TERMS } from '../core/constants';
import './Home.css';

export default function Home({ onOpenApplyModal }) {
  return (
    <div className="page-wrapper home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <Badge variant="cyan" icon={Sparkles} size="md">
                Institutional Marketplace Operations
              </Badge>
            </div>

            <h1 className="hero-title">
              We Run Your Marketplace Store. <br />
              <span className="text-gradient">You Retain 40% Net Profit.</span>
            </h1>

            <p className="hero-subtitle">
              Turn your seller eligibility into an automated, profitable digital asset. We are actively working and accepting store partners across Germany, Italy, France, the UK, Spain, all European countries, and the USA. Our dedicated operations team manages product research, SEO listings, supplier fulfillment, and 24/7 client care while you maintain 100% legal account and banking ownership.
            </p>

            <div className="hero-cta-group">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onOpenApplyModal}
                className="hero-main-cta"
              >
                Apply for Store Partnership
              </Button>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  BRAND_CONFIG.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="hero-trust-bullets">
              <div className="trust-bullet">
                <ShieldCheck size={16} className="text-emerald" />
                <span>Zero Upfront Inventory Capital</span>
              </div>
              <div className="trust-bullet">
                <ShieldCheck size={16} className="text-emerald" />
                <span>100% Legal & Bank Ownership</span>
              </div>
              <div className="trust-bullet">
                <ShieldCheck size={16} className="text-emerald" />
                <span>Performance-Aligned 60/40 Split</span>
              </div>
            </div>

            {/* Markets Acceptance Bar */}
            <div className="hero-markets-acceptance">
              <div className="markets-badge-label">
                <span className="live-dot" />
                <Globe size={13} className="text-cyan" />
                <span>Actively working and accepting partners from:</span>
              </div>
              <div className="markets-list">
                <span className="country-chip"><span className="flag">🇩🇪</span> Germany</span>
                <span className="country-chip"><span className="flag">🇮🇹</span> Italy</span>
                <span className="country-chip"><span className="flag">🇫🇷</span> France</span>
                <span className="country-chip"><span className="flag">🇬🇧</span> UK</span>
                <span className="country-chip"><span className="flag">🇪🇸</span> Spain</span>
                <span className="country-chip highlight-chip"><span className="flag">🇪🇺</span> All Europe Countries</span>
                <span className="country-chip"><span className="flag">🇺🇸</span> USA</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual">
            <div className="hero-glass-dashboard">
              <div className="dash-glow-ambient" />
              
              <div className="dash-top-bar">
                <div className="dash-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="dash-live-badge">
                  <span className="live-dot" /> Live Operations Engine
                </span>
              </div>

              {/* Founder Photo */}
              <div className="founder-img-box">
                <img
                  src="/Kashif_Hanif_Founder.jpg"
                  alt="Kashif Hanif, Founder & Operations Lead"
                  className="founder-photo"
                />
                <div className="founder-tag-pill">
                  <ShieldCheck size={13} className="text-emerald" />
                  <span>Founder-Supervised Ops</span>
                </div>
              </div>

              {/* Founder Info Row */}
              <div className="dash-founder-meta">
                <div className="meta-top">
                  <div>
                    <strong className="founder-name">Kashif Hanif</strong>
                    <span className="founder-role">Founder & Chief Operational Officer</span>
                  </div>
                  <Badge variant="emerald" size="sm">Verified</Badge>
                </div>

                {/* KPI Stats */}
                <div className="dash-kpis-row">
                  <div className="kpi-box">
                    <span>Managed Volume</span>
                    <strong>$4.2M+</strong>
                  </div>
                  <div className="kpi-box">
                    <span>Defect Rate</span>
                    <strong className="text-emerald">&lt; 0.08%</strong>
                  </div>
                  <div className="kpi-box">
                    <span>Partner Share</span>
                    <strong className="text-cyan">40% Net</strong>
                  </div>
                </div>

                {/* Trust row: clean inline indicators */}
                <div className="dash-trust-row">
                  <div className="dash-trust-item">
                    <Award size={14} className="text-emerald" />
                    <span>Top Rated Plus · eBay</span>
                  </div>
                  <div className="dash-trust-item">
                    <TrendingUp size={14} className="text-cyan" />
                    <span>Bi-Weekly Bank Payouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST TICKER */}
      <TrustTicker />

      {/* BENTO OPERATIONAL FEATURES */}
      <BentoFeaturesSection />

      {/* INTERACTIVE PROFIT CALCULATOR */}
      <ProfitCalculatorSection onOpenApplyModal={onOpenApplyModal} />

      {/* VERIFIED STORE PROOFS & CHARTS */}
      <StoreProofSection onOpenApplyModal={onOpenApplyModal} />

      {/* WHAT WE HANDLE VS YOU */}
      <ResponsibilityMatrixSection onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
}

