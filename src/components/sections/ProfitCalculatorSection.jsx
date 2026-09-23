import React from 'react';
import { TrendingUp, DollarSign, ArrowUpRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import RangeSlider from '../ui/RangeSlider';
import { useProfitCalculator } from '../../hooks/useProfitCalculator';
import './ProfitCalculatorSection.css';

export default function ProfitCalculatorSection({ onOpenApplyModal }) {
  const { monthlyGMV, setMonthlyGMV, formattedValues, projection } = useProfitCalculator(38000);

  return (
    <section className="section calculator-section" id="profit-simulator">
      <div className="container">
        <div className="section-header">
          <Badge variant="cyan" icon={TrendingUp} size="md" className="section-tag">
            Dynamic Yield Simulator
          </Badge>
          <h2 className="section-title">
            Calculate Your <span className="text-gradient">40% Passive Distribution</span>
          </h2>
          <p className="section-desc">
            Model your estimated monthly earnings based on projected store gross sales. We handle 100% of operations; you retain 40% of net profits directly into your bank.
          </p>
        </div>

        <div className="calculator-grid">
          {/* Controls Column */}
          <Card className="calc-controls-card" hoverEffect={false}>
            <div className="calc-card-header">
              <span className="calc-step-label">Step 1: Adjust Monthly GMV Target</span>
              <h3 className="calc-controls-title">Store Gross Merchandise Volume</h3>
              <p className="calc-controls-desc">
                Drag the slider to adjust expected monthly sales. Average mature stores operate between $30,000 and $75,000/month.
              </p>
            </div>

            <div className="gmv-display-box">
              <span className="gmv-label">Simulated Monthly Sales</span>
              <div className="gmv-value-row">
                <span className="gmv-value">{formattedValues.monthlyGMV}</span>
                <span className="gmv-period">/ month</span>
              </div>
            </div>

            <RangeSlider
              min={10000}
              max={120000}
              step={2500}
              value={monthlyGMV}
              onChange={setMonthlyGMV}
              ariaLabel="Monthly Gross Merchandise Volume"
            />

            <div className="calc-parameters-box">
              <div className="param-item">
                <span className="param-name">Target Net Margin</span>
                <strong className="param-val">~25% (Realized Avg)</strong>
              </div>
              <div className="param-item">
                <span className="param-name">Estimated Orders</span>
                <strong className="param-val">{formattedValues.estimatedOrders} orders/mo</strong>
              </div>
              <div className="param-item">
                <span className="param-name">Inventory Capital Outlay</span>
                <strong className="param-val text-emerald">$0 (Dropship / Supplier Escrow)</strong>
              </div>
            </div>
          </Card>

          {/* Results Column */}
          <Card className="calc-results-card" hoverEffect={false} glow={true}>
            <div className="split-badge-row">
              <Badge variant="emerald" dot={true}>
                The Transparent 60 / 40 Model
              </Badge>
              <Badge variant="neutral">Verified Escrow Model</Badge>
            </div>

            <div className="takehome-headline-box">
              <span className="takehome-label">Your Estimated Net Take-Home (40%)</span>
              <div className="takehome-value-row">
                <span className="takehome-number">{formattedValues.partnerNetTakeHome}</span>
                <span className="takehome-freq">/ month</span>
              </div>
              <span className="takehome-annual">
                Projected Annual Yield: <strong>{formattedValues.annualPartnerProjection}</strong> / year
              </span>
            </div>

            {/* Split Visual Bar */}
            <div className="split-bar-container">
              <div className="split-bar-label-row">
                <span>Partner Payout (40%)</span>
                <span>Nexo Operations (60%)</span>
              </div>
              <div className="split-visual-bar">
                <div className="bar-segment partner" style={{ width: '40%' }}>
                  <span>40%</span>
                </div>
                <div className="bar-segment nexo" style={{ width: '60%' }}>
                  <span>60%</span>
                </div>
              </div>
              <div className="split-amount-row">
                <span className="amount-partner">{formattedValues.partnerNetTakeHome}</span>
                <span className="amount-nexo">{formattedValues.nexoOperationsShare}</span>
              </div>
            </div>

            {/* Breakdown List */}
            <div className="breakdown-details-list">
              <div className="breakdown-row">
                <span className="row-title">Estimated Gross Store Profit (25%)</span>
                <span className="row-num">{formattedValues.estimatedProfit}</span>
              </div>
              <div className="breakdown-row">
                <span className="row-title">Nexo Operational Overhead (60%)</span>
                <span className="row-num text-muted">-{formattedValues.nexoOperationsShare}</span>
              </div>
              <div className="breakdown-row total-highlight">
                <span className="row-title">Direct Partner Distribution (40%)</span>
                <span className="row-num text-emerald">{formattedValues.partnerNetTakeHome}</span>
              </div>
            </div>

            <div className="results-cta-box">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowUpRight}
                onClick={onOpenApplyModal}
                style={{ width: '100%' }}
              >
                Apply for Store Partnership
              </Button>
              <span className="risk-guarantee-note">
                <ShieldCheck size={14} className="text-emerald" /> 100% legal ownership & direct bank settlements
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
