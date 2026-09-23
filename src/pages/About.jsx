import React from 'react';
import {
  Users,
  ShieldCheck,
  Award,
  Globe2,
  TrendingUp,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { BRAND_CONFIG, OPERATIONAL_STATISTICS, REGIONAL_ACCOUNTS } from '../core/constants';
import './About.css';

export default function About({ onOpenApplyModal }) {
  return (
    <div className="page-wrapper about-page">
      {/* Hero */}
      <section className="section page-hero-section">
        <div className="container">
          <div className="section-header">
            <Badge variant="cyan" icon={Users} size="md" className="section-tag">
              5+ Years Operations · 146+ Stores
            </Badge>
            <h1 className="section-title">
              We Build & Operate <span className="text-gradient">Marketplace Cash-Flow Assets</span>
            </h1>
            <p className="section-desc">
              Bridging the gap between qualified account holders and high-margin algorithmic e-commerce. You provide the verified store ownership; we provide 5+ years of operational machinery.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="story-kicker">Our Origins</span>
              <h2 className="story-title">
                The Missing Link in Digital Asset Creation
              </h2>
              <p className="story-para">
                Across the United States and Europe, millions of individuals possess verified identity and residency credentials capable of opening high-trust seller accounts on leading global marketplaces. Yet, 98% of these individuals lack the 60+ hours per week, deep catalog software, and supply-chain logistics required to scale a profitable operation.
              </p>
              <p className="story-para">
                Meanwhile, our team spent 5+ years engineering algorithmic catalog discovery, domestic US/EU fulfillment relationships, and proactive account compliance protocols across 146+ active partner accounts.
              </p>
              <p className="story-para">
                <strong>Nexo Ecommerce was engineered to unite these two strengths:</strong> Your legitimate ownership and banking escrow combined with our multi-disciplinary operational execution, bonded by an uncompromising 60/40 performance split.
              </p>
            </div>

            <div className="story-metrics-card">
              <Card className="metrics-box" hoverEffect={false}>
                <div className="metrics-box-header">
                  <Sparkles size={20} className="text-cyan" />
                  <h3>Operational Footprint</h3>
                </div>
                <div className="metric-pills-list">
                  {OPERATIONAL_STATISTICS.map((stat) => (
                    <div key={stat.label} className="metric-pill-item">
                      <div className="pill-top">
                        <span className="pill-lbl">{stat.label}</span>
                        <span className="pill-chg">{stat.change}</span>
                      </div>
                      <strong className="pill-val text-gradient">{stat.value}</strong>
                    </div>
                  ))}
                </div>

                {/* Regional Distribution */}
                <div className="regional-distribution-box">
                  <span className="regional-box-title">Active Partner Distribution</span>
                  <div className="regional-pill-grid">
                    {REGIONAL_ACCOUNTS.map((acc) => (
                      <div key={acc.region} className="regional-pill-card">
                        <span className="regional-flag">{acc.flag}</span>
                        <div className="regional-meta">
                          <strong className="regional-count">{acc.count}</strong>
                          <span className="regional-label">{acc.region}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Showcase */}
      <section className="section leadership-section" id="leadership">
        <div className="container">
          <div className="section-header">
            <Badge variant="emerald" icon={ShieldCheck} size="md" className="section-tag">
              Executive Leadership
            </Badge>
            <h2 className="section-title">
              Steered by Seasoned <span className="text-gradient">E-Commerce Operators</span>
            </h2>
            <p className="section-desc">
              Direct accountability. Our founding partners oversee every active partner store, ensuring flawless fulfillment and strict policy compliance.
            </p>
          </div>

          <div className="leadership-grid">
            {/* Founder: Kashif Hanif */}
            <Card className="leader-card">
              <div className="leader-img-wrapper">
                <img
                  src="/Kashif_Hanif_Founder.jpg"
                  alt="Kashif Hanif, Founder & COO"
                  className="leader-img"
                />
                <div className="leader-badge-pill">
                  <ShieldCheck size={14} className="text-emerald" />
                  <span>Founding Partner</span>
                </div>
              </div>

              <div className="leader-meta">
                <h3 className="leader-name">Kashif Hanif</h3>
                <span className="leader-role">Founder & Chief Operational Officer</span>
                <p className="leader-bio">
                  Architect of Nexo's automated catalog sourcing and algorithmic repricing frameworks. Kashif supervises multi-marketplace logistics, carrier dispatch health, and day-to-day operations across our partner portfolio.
                </p>
                <div className="leader-skills">
                  <span>eBay & Amazon Logistics</span>
                  <span>TikTok Shop Social Selling</span>
                  <span>Compliance Architecture</span>
                  <span>Repricing Algorithms</span>
                </div>
              </div>
            </Card>

            {/* Leader 2: Tehseen Sajjad */}
            <Card className="leader-card">
              <div className="leader-img-wrapper">
                <img
                  src="/Tehseen_Sajjad_Account_Manager.jpg"
                  alt="Tehseen Sajjad, Account Manager at Nexo Ecommerce"
                  className="leader-img"
                />
                <div className="leader-badge-pill">
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>Account Manager</span>
                </div>
              </div>

              <div className="leader-meta">
                <h3 className="leader-name">Tehseen Sajjad</h3>
                <span className="leader-role">Account Manager at Nexo Ecommerce</span>
                <p className="leader-bio">
                  Dedicated Account Manager overseeing partner onboarding, day-to-day storefront communications, and operational health. Tehseen ensures seamless coordination between store owners and our technical fulfillment departments, maintaining consistent store performance and client satisfaction.
                </p>
                <div className="leader-skills">
                  <span>Account Management</span>
                  <span>Partner Success</span>
                  <span>Store Performance</span>
                  <span>Client Care</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section principles-section" id="values">
        <div className="container">
          <div className="section-header">
            <Badge variant="cyan" size="md" className="section-tag">
              Foundational Values
            </Badge>
            <h2 className="section-title">
              The Nexo Operational Standard
            </h2>
          </div>

          <div className="principles-grid">
            <Card className="principle-card">
              <div className="principle-icon-box">
                <ShieldCheck size={22} className="text-emerald" />
              </div>
              <h3 className="principle-title">Sanctity of Client Ownership</h3>
              <p className="principle-desc">
                Your account is your legal asset. We operate exclusively through authorized staff privileges and never ask for banking credentials or account ownership transfers.
              </p>
            </Card>

            <Card className="principle-card">
              <div className="principle-icon-box">
                <TrendingUp size={22} className="text-cyan" />
              </div>
              <h3 className="principle-title">Uncompromising Transparency</h3>
              <p className="principle-desc">
                Clear monthly forensic accounting reports before any fee remittance. Every sale, fee deduction, and shipping label is accessible on your live marketplace dashboard.
              </p>
            </Card>

            <Card className="principle-card">
              <div className="principle-icon-box">
                <Cpu size={22} className="text-cyan" />
              </div>
              <h3 className="principle-title">Algorithmic Excellence</h3>
              <p className="principle-desc">
                We replace guesswork with data. Proprietary catalog bots scan millions of marketplace listings daily to curate fast-shipping winners that preserve account health.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner-box">
            <h2 className="section-title">
              Partner with an <span className="text-gradient">Institutional Team</span>
            </h2>
            <p className="section-desc">
              Book an evaluation call or apply online to explore allocating a managed marketplace store under your verified legal ownership.
            </p>
            <div className="cta-banner-actions">
              <Button variant="primary" size="lg" icon={ArrowRight} onClick={onOpenApplyModal}>
                Apply For Store Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
