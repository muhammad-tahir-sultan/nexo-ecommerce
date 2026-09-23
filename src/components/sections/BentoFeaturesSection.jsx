import React from 'react';
import {
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
  Headphones,
  CheckCircle2,
  Lock,
  Zap,
  Globe2,
} from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import './BentoFeaturesSection.css';

export default function BentoFeaturesSection() {
  return (
    <section className="section bento-section">
      <div className="container">
        <div className="section-header">
          <Badge variant="cyan" icon={Zap} size="md" className="section-tag">
            Operational Architecture
          </Badge>
          <h2 className="section-title">
            Engineered for <span className="text-gradient">Consistent Store Performance</span>
          </h2>
          <p className="section-desc">
            We combine high-volume catalog algorithms with seasoned e-commerce operators to run your store end-to-end, while you remain the protected owner of record.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Large Span - Catalog Intelligence */}
          <Card className="bento-card bento-hero-item">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Cpu size={24} />
              </div>
              <Badge variant="cyan">Algorithmic Curation</Badge>
            </div>
            <h3 className="bento-title">Autonomous Product Intelligence</h3>
            <p className="bento-desc">
              Our automated crawlers analyze millions of marketplace transactions daily to identify high-demand, low-competition items with verified 25%+ margins before adding them to your catalog.
            </p>
            <div className="bento-stats-row">
              <div className="mini-stat">
                <strong>1.2M+</strong>
                <span>Daily SKUs Scanned</span>
              </div>
              <div className="mini-stat">
                <strong>48h</strong>
                <span>Domestic Carrier Transit</span>
              </div>
              <div className="mini-stat">
                <strong>&lt; 0.08%</strong>
                <span>Defect Tolerance</span>
              </div>
            </div>
          </Card>

          {/* Card 2: Legal Ownership */}
          <Card className="bento-card">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Lock size={24} />
              </div>
              <Badge variant="emerald">100% Client Ownership</Badge>
            </div>
            <h3 className="bento-title">Direct Bank Settlements</h3>
            <p className="bento-desc">
              All marketplace customer payments settle directly into your personal verified bank account. Nexo never holds client funds; fees are settled strictly via post-distribution invoice.
            </p>
          </Card>

          {/* Card 3: Zero Upfront Inventory */}
          <Card className="bento-card">
            <div className="bento-card-top">
              <div className="bento-icon-box violet">
                <Layers size={24} />
              </div>
              <Badge variant="violet">$0 Inventory Outlay</Badge>
            </div>
            <h3 className="bento-title">Zero Inventory Capital Risk</h3>
            <p className="bento-desc">
              You never purchase containers or pallets of stock upfront. Orders are routed directly through pre-negotiated US & European fulfillment suppliers upon buyer purchase.
            </p>
          </Card>

          {/* Card 4: Compliance Shield */}
          <Card className="bento-card">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <ShieldCheck size={24} />
              </div>
              <Badge variant="emerald">Top Rated Plus</Badge>
            </div>
            <h3 className="bento-title">Proactive Policy Shield</h3>
            <p className="bento-desc">
              Marketplaces enforce rigorous operational standards. Our compliance team monitors account defect rates, tracking upload times, and feedback metrics 24/7 to protect your seller standing.
            </p>
          </Card>

          {/* Card 5: Large Span - Multi-Marketplace Reach (eBay, Amazon & TikTok Shop) */}
          <Card className="bento-card bento-wide-item">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Globe2 size={24} />
              </div>
              <Badge variant="cyan">Multi-Channel Expansion</Badge>
            </div>
            <h3 className="bento-title">Multi-Marketplace Ecosystem: eBay, Amazon & TikTok Shop</h3>
            <p className="bento-desc">
              While eBay serves as our core high-liquidity operational engine, our infrastructure actively scales eligible partner accounts into Amazon (FBM/FBA) and high-velocity TikTok Shop social commerce. We deploy verified domestic suppliers and algorithm-curated listings tailored to the strict algorithm requirements of each platform.
            </p>
            <div className="bento-pill-list">
              <span>✓ Primary eBay Store Scaling (US, UK, DE, FR, IT, ES)</span>
              <span>✓ Amazon Storefront Management & FBM / FBA Fulfillment</span>
              <span>✓ TikTok Shop Viral Social-Commerce & Creator Sourcing</span>
              <span>✓ 24/7 Multilingual Customer Care & Dispute Protection</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
