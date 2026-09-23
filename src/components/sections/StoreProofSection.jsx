import React from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  DollarSign,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { useStoreMetrics } from '../../hooks/useStoreMetrics';
import { STORE_CATEGORIES } from '../../data/storesData';
import './StoreProofSection.css';

/**
 * Helper to build smooth SVG path from sparkline points
 */
function buildSvgPath(points, width = 280, height = 70) {
  if (!points || points.length === 0) return '';
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p - min) / range) * (height - 16) - 8;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  return `M ${coords.join(' L ')}`;
}

export default function StoreProofSection({ onOpenApplyModal }) {
  const {
    selectedCategory,
    setSelectedCategory,
    filteredStores,
    summary,
    activeStoreModal,
    setActiveStoreModal,
  } = useStoreMetrics();

  return (
    <section className="section store-proofs-section" id="verified-stores">
      <div className="container">
        <div className="section-header">
          <Badge variant="emerald" icon={ShieldCheck} size="md" className="section-tag">
            Audited Marketplace Proofs
          </Badge>
          <h2 className="section-title">
            Realized GMV & <span className="text-gradient">Verified Partner Payouts</span>
          </h2>
          <p className="section-desc">
            Anonymized performance records from our live managed accounts across US and European marketplaces. Full transparency, audited metrics, zero fabricated screenshots.
          </p>
        </div>

        {/* Aggregate Summary Ticker */}
        <div className="proofs-summary-bar">
          <div className="summary-stat">
            <span className="summary-num text-gradient-cyan">{summary.sampleVolume}</span>
            <span className="summary-lbl">Quarterly Sample GMV</span>
          </div>
          <div className="summary-stat">
            <span className="summary-num text-gradient-emerald">{summary.avgGrowth}</span>
            <span className="summary-lbl">Average Store Growth</span>
          </div>
          <div className="summary-stat">
            <span className="summary-num">{summary.satisfactionRate}</span>
            <span className="summary-lbl">Positive Feedback Rate</span>
          </div>
          <div className="summary-stat">
            <span className="summary-num text-gradient">100%</span>
            <span className="summary-lbl">Bank Ownership Protected</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="category-filters-row">
          {STORE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stores Grid */}
        <div className="stores-grid">
          {filteredStores.map((store) => {
            const svgPath = buildSvgPath(store.sparkline, 300, 80);

            return (
              <Card
                key={store.id}
                className="store-card"
                onClick={() => setActiveStoreModal(store)}
              >
                <div className="store-card-header">
                  <div className="store-identity">
                    <span className="store-code">{store.code}</span>
                    <span className="store-market">{store.marketplace}</span>
                  </div>
                  <Badge variant="cyan" size="sm">
                    {store.periodBadge}
                  </Badge>
                </div>

                <div className="store-cat-badge-row">
                  <span className="store-cat-pill">{store.category}</span>
                  <span className="seller-status-badge">
                    <Award size={13} className="text-emerald" /> {store.sellerBadge}
                  </span>
                </div>

                {/* Primary Metric Box */}
                <div className="store-primary-metric">
                  <span className="metric-label">Verified Total GMV</span>
                  <div className="metric-num-row">
                    <span className="metric-value text-gradient">{store.totalGMV}</span>
                    <span className="growth-tag">{store.growth}</span>
                  </div>
                </div>

                {/* SVG Performance Sparkline */}
                <div className="sparkline-wrapper">
                  <svg viewBox="0 0 300 80" className="sparkline-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`sparkGrad-${store.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#00F2FE" stop-opacity="0.35" />
                        <stop offset="100%" stop-color="#00F2FE" stop-opacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`${svgPath} L 300,80 L 0,80 Z`}
                      fill={`url(#sparkGrad-${store.id})`}
                    />
                    <path
                      d={svgPath}
                      fill="none"
                      stroke="#00F2FE"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Detail Metrics Grid */}
                <div className="store-details-grid">
                  <div className="detail-stat">
                    <span className="detail-name">Orders Shipped</span>
                    <strong className="detail-val">{store.orders}</strong>
                  </div>
                  <div className="detail-stat">
                    <span className="detail-name">Avg. Ticket</span>
                    <strong className="detail-val">{store.avgTicket}</strong>
                  </div>
                  <div className="detail-stat span-full">
                    <span className="detail-name">Partner Net 40% Share</span>
                    <strong className="detail-val text-emerald payout-highlight">
                      {store.partnerTakeHome}
                    </strong>
                  </div>
                </div>

                <div className="store-card-footer">
                  <p className="store-highlight-text">{store.operationalHighlight}</p>
                  <button className="view-audit-link">
                    <span>Inspect Forensic Audit</span> <ChevronRight size={15} />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Proof CTA */}
        <div className="store-proof-bottom-cta">
          <p>
            Ready to deploy an automated, audited marketplace store under your verified legal ownership?
          </p>
          <Button variant="primary" size="md" icon={ChevronRight} onClick={onOpenApplyModal}>
            Apply For Your Store Allocation
          </Button>
        </div>
      </div>

      {/* Forensic Audit Deep-Dive Modal */}
      {activeStoreModal && (
        <Modal
          isOpen={!!activeStoreModal}
          onClose={() => setActiveStoreModal(null)}
          title={`Forensic Audit: ${activeStoreModal.code}`}
          subtitle={`Marketplace: ${activeStoreModal.marketplace} • Verified Seller Status: ${activeStoreModal.sellerBadge}`}
          maxWidth="640px"
        >
          <div className="modal-audit-body">
            <div className="modal-metric-trio">
              <div className="modal-metric-card">
                <span>Audited GMV</span>
                <strong>{activeStoreModal.totalGMV}</strong>
              </div>
              <div className="modal-metric-card">
                <span>Orders</span>
                <strong>{activeStoreModal.orders}</strong>
              </div>
              <div className="modal-metric-card highlight">
                <span>Partner 40% Payout</span>
                <strong className="text-emerald">{activeStoreModal.partnerTakeHome}</strong>
              </div>
            </div>

            <div className="audit-checklist-card">
              <h4 className="checklist-title">Compliance & Health Verification</h4>
              <ul className="audit-checklist">
                <li>
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>Account Owner of Record: <strong>Verified Client Legal Identity</strong></span>
                </li>
                <li>
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>Settlement Bank: <strong>Direct Partner Bank Account Link</strong></span>
                </li>
                <li>
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>Tracking Upload Rate: <strong>99.8% On-Time Carrier Dispatch</strong></span>
                </li>
                <li>
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>Feedback Rating: <strong>{activeStoreModal.feedbackRating}</strong></span>
                </li>
                <li>
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>Operations Model: <strong>Nexo DFY Multi-Specialist Team</strong></span>
                </li>
              </ul>
            </div>

            <p className="audit-disclaimer">
              {activeStoreModal.operationalHighlight} Real-time reporting statements are provided to partner owners on the 1st of every month prior to fee remittance.
            </p>

            <Button
              variant="primary"
              size="md"
              style={{ width: '100%' }}
              onClick={() => {
                setActiveStoreModal(null);
                onOpenApplyModal();
              }}
            >
              Start Similar Store Partnership
            </Button>
          </div>
        </Modal>
      )}
    </section>
  );
}
