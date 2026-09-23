import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { BRAND_CONFIG, PARTNERSHIP_TERMS } from '../core/constants';
import './Legal.css';

export default function TermsOfService() {
  return (
    <div className="page-wrapper legal-page">
      <section className="section legal-page-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <Card className="legal-document-card" hoverEffect={false}>
            <div className="legal-header">
              <Badge variant="emerald" size="sm">Standard Operational Terms</Badge>
              <h1 className="legal-title">Terms of Service & Partnership Framework</h1>
              <span className="legal-date">Last Updated: September 2026</span>
            </div>

            <div className="legal-body">
              <p>
                Welcome to <strong>{BRAND_CONFIG.name}</strong>. By accessing our website, submitting an application, or entering into an operational management relationship, you agree to comply with the terms set forth below.
              </p>

              <div className="compliance-box">
                <strong>Account Ownership Guarantee</strong>
                <p>
                  Nexo Ecommerce provides operational store management services. Clients remain the sole beneficial owners, legal account holders, and banking recipients of their marketplace seller accounts at all times.
                </p>
              </div>

              <h2>1. Scope of Operational Services</h2>
              <p>
                Nexo Ecommerce acts as an independent operational service provider. Under authorized multi-user staff permissions granted by the client, Nexo executes day-to-day catalog research, SEO listing creation, order routing, domestic carrier coordination, customer inquiry management, and marketplace policy monitoring.
              </p>

              <h2>2. Performance-Based 60/40 Split Structure</h2>
              <p>
                In exchange for managing all daily operations, software tooling, catalog infrastructure, and personnel:
              </p>
              <ul>
                <li><strong>Partner Share (40%):</strong> Retained directly by the client as passive income upon marketplace buyer fund settlement.</li>
                <li><strong>Nexo Share (60%):</strong> Covers operating expenses, staff compensation, and software licensing, invoiced strictly after net realized profits are calculated.</li>
                <li><strong>No Upfront Fees:</strong> Nexo does not charge fixed monthly retainers or setup fees. If the store generates zero profit, zero operational management fee is owed.</li>
              </ul>

              <h2>3. Client Representations & Warranties</h2>
              <p>
                The client represents that they are at least 18 years of age, legally resident in an approved jurisdiction (United States or European EEA member state), and possess the legal right and documentation to operate a marketplace seller account in good standing.
              </p>

              <h2>4. Termination Policy</h2>
              <p>
                Because the store and its underlying assets are owned entirely by the client, the partnership may be concluded by either party upon thirty (30) days written notice in accordance with the definitive service contract.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
