import React from 'react';
import { ShieldCheck, Award, TrendingUp, Users, DollarSign, CheckCircle2 } from 'lucide-react';
import { OPERATIONAL_STATISTICS } from '../../core/constants';
import './TrustTicker.css';

export default function TrustTicker() {
  return (
    <section className="trust-ticker-wrapper">
      <div className="container">
        <div className="trust-ticker-grid">
          <div className="ticker-item">
            <div className="ticker-icon cyan">
              <TrendingUp size={22} />
            </div>
            <div className="ticker-meta">
              <span className="ticker-val">$4.2M+ GMV</span>
              <span className="ticker-lbl">Processed Under Management</span>
            </div>
          </div>

          <div className="ticker-item">
            <div className="ticker-icon emerald">
              <ShieldCheck size={22} />
            </div>
            <div className="ticker-meta">
              <span className="ticker-val">100% Client Ownership</span>
              <span className="ticker-lbl">Direct Personal Bank Escrow</span>
            </div>
          </div>

          <div className="ticker-item">
            <div className="ticker-icon cyan">
              <Users size={22} />
            </div>
            <div className="ticker-meta">
              <span className="ticker-val">US & EU Eligible</span>
              <span className="ticker-lbl">Verified Account Holders</span>
            </div>
          </div>

          <div className="ticker-item">
            <div className="ticker-icon emerald">
              <Award size={22} />
            </div>
            <div className="ticker-meta">
              <span className="ticker-val">60/40 Split</span>
              <span className="ticker-lbl">Zero Upfront Inventory Cost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
