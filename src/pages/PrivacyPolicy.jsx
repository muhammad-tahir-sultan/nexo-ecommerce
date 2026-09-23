import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { BRAND_CONFIG } from '../core/constants';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="page-wrapper legal-page">
      <section className="section legal-page-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <Card className="legal-document-card" hoverEffect={false}>
            <div className="legal-header">
              <Badge variant="cyan" size="sm">Legal & Compliance</Badge>
              <h1 className="legal-title">Privacy & Data Governance Policy</h1>
              <span className="legal-date">Last Updated: September 2026</span>
            </div>

            <div className="legal-body">
              <p>
                At <strong>{BRAND_CONFIG.name}</strong>, we are committed to safeguarding the privacy and confidential personal data of all partnership applicants and active store partners. This Privacy Policy details how we collect, process, and protect your information.
              </p>

              <div className="compliance-box">
                <strong>Core Data Principle</strong>
                <p>
                  Nexo Ecommerce collects application data solely for identity verification, residency screening, and executing official marketplace store operations. We never sell, monetize, or transfer your personal credentials to third-party marketing brokers.
                </p>
              </div>

              <h2>1. Information We Collect</h2>
              <p>During the onboarding and store operation lifecycle, we may collect:</p>
              <ul>
                <li><strong>Identity & Contact Information:</strong> Full legal name, email address, phone number, and physical country/jurisdiction of residence.</li>
                <li><strong>Eligibility Verification Data:</strong> Marketplace seller account standing, registration status, and confirmation of legal age (18+).</li>
                <li><strong>Operational Data:</strong> Authorized multi-user staff account usernames to facilitate inventory and catalog management.</li>
              </ul>

              <h2>2. Financial & Banking Confidentiality</h2>
              <p>
                Nexo Ecommerce never requests or retains your personal online banking passwords, debit card PINs, or direct withdrawal authorizations. Marketplace payouts flow through the marketplace’s official encrypted escrow directly into your verified bank account.
              </p>

              <h2>3. Data Security Safeguards</h2>
              <p>
                All transmitted application communications are protected via TLS 1.3 encryption. Internal access to partner records is restricted to authorized operations directors bound by strict non-disclosure agreements.
              </p>

              <h2>4. Contact & Inquiries</h2>
              <p>
                For data access requests or questions regarding this policy, contact our compliance officer at{' '}
                <a href={`mailto:${BRAND_CONFIG.contactEmail}`}>{BRAND_CONFIG.contactEmail}</a>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
