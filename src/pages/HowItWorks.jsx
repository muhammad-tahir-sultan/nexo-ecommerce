import React from 'react';
import {
  ShieldCheck,
  Store,
  Cpu,
  Activity,
  Banknote,
  ArrowRight,
  Clock,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import ResponsibilityMatrixSection from '../components/sections/ResponsibilityMatrixSection';
import { PARTNERSHIP_STEPS } from '../data/roadmapData';
import './HowItWorks.css';

const STEP_ICONS = {
  ShieldCheck,
  Store,
  Cpu,
  Activity,
  Banknote,
};

export default function HowItWorks({ onOpenApplyModal }) {
  return (
    <div className="page-wrapper how-it-works-page">
      {/* Page Header */}
      <section className="section page-hero-section">
        <div className="container">
          <div className="section-header">
            <Badge variant="cyan" icon={Activity} size="md" className="section-tag">
              The 5-Stage Operational Pipeline
            </Badge>
            <h1 className="section-title">
              From Identity Vetting to <span className="text-gradient">Automated Distributions</span>
            </h1>
            <p className="section-desc">
              Every step is designed for maximum security, policy compliance, and total transparency. No hidden charges, no inventory purchases, and zero transfer of account ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="section steps-timeline-section">
        <div className="container">
          <div className="timeline-flow">
            {PARTNERSHIP_STEPS.map((stepItem, idx) => {
              const IconComponent = STEP_ICONS[stepItem.icon] || ShieldCheck;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={stepItem.step}
                  className={`timeline-step-row ${isEven ? 'step-reversed' : ''}`}
                >
                  {/* Left / Content side */}
                  <Card className="step-card">
                    <div className="step-card-top">
                      <div className="step-num-pill">{stepItem.step}</div>
                      <Badge variant="cyan" size="sm">
                        {stepItem.badge}
                      </Badge>
                      <span className="step-duration">
                        <Clock size={13} /> {stepItem.duration}
                      </span>
                    </div>

                    <h3 className="step-title">{stepItem.title}</h3>
                    <p className="step-desc">{stepItem.description}</p>

                    <div className="step-deliverable-box">
                      <div className="deliverable-header">
                        <FileText size={15} className="text-emerald" />
                        <span>Stage Deliverable:</span>
                      </div>
                      <strong className="deliverable-text">{stepItem.deliverable}</strong>
                    </div>
                  </Card>

                  {/* Node & Icon Center */}
                  <div className="timeline-center-node">
                    <div className="node-circle">
                      <IconComponent size={24} className="node-icon" />
                    </div>
                  </div>

                  {/* Empty side for alternating balance */}
                  <div className="timeline-empty-side" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Expectations & Ramp-Up */}
      <section className="section timeline-expectations-section">
        <div className="container">
          <div className="section-header">
            <Badge variant="emerald" size="md" className="section-tag">
              Realistic Trajectory
            </Badge>
            <h2 className="section-title">
              Store Ramp-Up & <span className="text-gradient">Maturity Timeline</span>
            </h2>
            <p className="section-desc">
              We practice honest operational engineering over get-rich-quick hype. Here is how volume builds methodically.
            </p>
          </div>

          <div className="trajectory-grid">
            <Card className="trajectory-card">
              <span className="phase-pill">Weeks 1 – 2</span>
              <h3 className="trajectory-title">Foundation & Initial Listings</h3>
              <p className="trajectory-desc">
                Account audit, authorized staff configuration, and warm-up catalog uploads. Initial 30-50 verified domestic supplier products listed.
              </p>
              <div className="trajectory-stat">
                <span>Target Orders:</span>
                <strong>10 – 30 Orders</strong>
              </div>
            </Card>

            <Card className="trajectory-card">
              <span className="phase-pill">Weeks 3 – 4</span>
              <h3 className="trajectory-title">Feedback & Velocity Building</h3>
              <p className="trajectory-desc">
                First positive feedback badges earned. Algorithmic repricing is deployed to identify fast-moving winners with zero defect rates.
              </p>
              <div className="trajectory-stat">
                <span>Target Volume:</span>
                <strong>$8,000 – $18,000 GMV</strong>
              </div>
            </Card>

            <Card className="trajectory-card highlight">
              <span className="phase-pill emerald">Month 2 & Beyond</span>
              <h3 className="trajectory-title">Maturity & Consistent Payouts</h3>
              <p className="trajectory-desc">
                High-volume catalog scaling. The store reaches Top Rated Seller status, with automated bi-weekly distributions averaging €2,500 – €7,000+ net.
              </p>
              <div className="trajectory-stat">
                <span>Target Volume:</span>
                <strong className="text-emerald">$30,000 – $75,000+ GMV</strong>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsibility Matrix */}
      <ResponsibilityMatrixSection onOpenApplyModal={onOpenApplyModal} />

      {/* Bottom CTA */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner-box">
            <h2 className="section-title">
              Ready to Begin <span className="text-gradient">Step 1?</span>
            </h2>
            <p className="section-desc">
              Submit your 2-minute eligibility application today. Our directors will review your residency profile and reach out within 24 hours.
            </p>
            <div className="cta-banner-actions">
              <Button variant="primary" size="lg" icon={ArrowRight} onClick={onOpenApplyModal}>
                Start Your Store Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
