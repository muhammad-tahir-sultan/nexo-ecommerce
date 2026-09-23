import React from 'react';
import {
  PieChart,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
  Percent,
  Banknote,
  FileCheck,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProfitCalculatorSection from '../components/sections/ProfitCalculatorSection';
import { PARTNERSHIP_TERMS } from '../core/constants';
import './Partnership.css';

export default function Partnership({ onOpenApplyModal }) {
  return (
    <div className="page-wrapper partnership-page">
      {/* Hero */}
      <section className="section page-hero-section">
        <div className="container">
          <div className="section-header">
            <Badge variant="cyan" icon={Percent} size="md" className="section-tag">
              The 60 / 40 Profit-Share Framework
            </Badge>
            <h1 className="section-title">
              Complete Alignment: <span className="text-gradient">We Only Profit When You Profit</span>
            </h1>
            <p className="section-desc">
              No monthly retainers. Zero upfront inventory risk. Our entire organization is incentivized on the realized net profit of your marketplace store.
            </p>
          </div>
        </div>
      </section>

      {/* Model Breakdown Visual */}
      <section className="section model-breakdown-section">
        <div className="container">
          <div className="model-split-grid">
            {/* Nexo Card (60%) */}
            <Card className="split-card nexo-side" hoverEffect={false}>
              <div className="split-card-header">
                <span className="split-pct cyan">60%</span>
                <div>
                  <h3 className="split-card-title">Nexo Operations & Infrastructure</h3>
                  <span className="split-card-subtitle">Comprehensive Done-For-You Execution</span>
                </div>
              </div>

              <p className="split-card-summary">
                Covers all specialized talent, operational expenses, and proprietary software required to scale a high-volume marketplace storefront.
              </p>

              <ul className="split-bullet-list">
                <li>
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Dedicated Product Research & Trend Analysts</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Algorithmic Repricing & Automated Scrapers</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Pre-Negotiated US & EU Fulfillment Suppliers</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>24/7 Multilingual Customer Care & Return Processing</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Continuous Account Health & Defect Mitigation</span>
                </li>
              </ul>
            </Card>

            {/* Partner Card (40%) */}
            <Card className="split-card partner-side" hoverEffect={false} glow={true}>
              <div className="split-card-header">
                <span className="split-pct emerald">40%</span>
                <div>
                  <h3 className="split-card-title">You: The Verified Account Owner</h3>
                  <span className="split-card-subtitle">Direct Passive Distribution</span>
                </div>
              </div>

              <p className="split-card-summary">
                Your pure take-home yield for being the eligible registered account holder of record and maintaining banking connectivity.
              </p>

              <ul className="split-bullet-list">
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>100% Legal Ownership of Store & Merchant Escrow</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>All Marketplace Funds Settle Directly in Your Bank</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Zero Day-to-Day Operational or Customer Service Labor</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Zero Inventory Capital at Risk ($0 Dropship/Escrow)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Monthly Audited Statements Before Remitting Fees</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Yield Calculator */}
      <ProfitCalculatorSection onOpenApplyModal={onOpenApplyModal} />

      {/* Qualification Criteria: Who Qualifies vs Who Does Not */}
      <section className="section qualification-section" id="eligibility">
        <div className="container">
          <div className="section-header">
            <Badge variant="cyan" size="md" className="section-tag">
              Partner Suitability
            </Badge>
            <h2 className="section-title">
              Clear Criteria: <span className="text-gradient">Who Qualifies</span>
            </h2>
            <p className="section-desc">
              We maintain high institutional standards. Transparent requirements ensure sustainable, compliant store longevity.
            </p>
          </div>

          <div className="qualification-grid">
            {/* Who This Is For */}
            <Card className="qual-card positive">
              <div className="qual-header">
                <CheckCircle2 size={24} className="text-emerald" />
                <h3 className="qual-title">Who This Partnership Is For</h3>
              </div>
              <ul className="qual-list">
                <li>
                  <strong>Legal US or European EEA Residents:</strong> You hold valid government identification and local banking in an eligible country.
                </li>
                <li>
                  <strong>18+ Years Old with Clean Standing:</strong> You are capable of passing standard marketplace identity and tax verification procedures.
                </li>
                <li>
                  <strong>Hands-Off Income Seekers:</strong> You want substantial e-commerce distributions without taking on a second job or learning complex software.
                </li>
                <li>
                  <strong>Reliable Communicators:</strong> You are available 10–15 minutes per month to review statements and confirm occasional security prompts.
                </li>
              </ul>
            </Card>

            {/* Who This Is NOT For */}
            <Card className="qual-card negative">
              <div className="qual-header">
                <XCircle size={24} className="text-red" />
                <h3 className="qual-title">Who This Partnership Is NOT For</h3>
              </div>
              <ul className="qual-list">
                <li>
                  <strong>Guaranteed Fixed Payout Expectations:</strong> Yields are performance-based. We do not offer artificial fixed interest or speculative promises.
                </li>
                <li>
                  <strong>Unverifiable Identities:</strong> Anyone unable to provide verifiable proof of residency, banking, or government-issued ID.
                </li>
                <li>
                  <strong>Zero-Contact Individuals:</strong> Partners must remain reachable for occasional marketplace identity updates or two-factor authorizations.
                </li>
                <li>
                  <strong>Impatience During Ramp-Up:</strong> Real e-commerce stores take 2-4 weeks to establish algorithm trust and organic review velocity.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Ownership Protection Terms */}
      <section className="section ownership-terms-section" id="ownership-terms">
        <div className="container">
          <Card className="ownership-terms-card">
            <div className="terms-header">
              <ShieldCheck size={28} className="text-emerald" />
              <div>
                <h3 className="terms-title">Direct Bank Payouts & Ownership Protection Agreement</h3>
                <span className="terms-sub">Signed non-exclusive operational service contract</span>
              </div>
            </div>

            <div className="terms-body">
              <p>
                Every partnership is formalized through an institutional service agreement. The contract explicitly affirms that:
              </p>
              <div className="terms-clauses-grid">
                <div className="clause-item">
                  <strong>Clause 1: Account Beneficiary</strong>
                  <p>The client is the sole beneficial owner of the eBay store, seller profile, and linked bank accounts.</p>
                </div>
                <div className="clause-item">
                  <strong>Clause 2: Fund Dispersal</strong>
                  <p>100% of marketplace buyer payments deposit into the client’s verified bank. Nexo has zero withdrawal access.</p>
                </div>
                <div className="clause-item">
                  <strong>Clause 3: Fee Settlement</strong>
                  <p>Nexo invoices its 60% operational overhead strictly after profits have already cleared the client’s bank.</p>
                </div>
                <div className="clause-item">
                  <strong>Clause 4: Voluntary Termination</strong>
                  <p>Either party may terminate operations with 30 days written notice, preserving all client asset ownership.</p>
                </div>
              </div>
            </div>

            <div className="terms-cta-row">
              <Button variant="primary" size="lg" icon={ArrowRight} onClick={onOpenApplyModal}>
                Apply to Review Partnership Agreement
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
