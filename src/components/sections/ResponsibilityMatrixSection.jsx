import React from 'react';
import { Check, CheckCircle2, Shield, UserCheck, ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { COMPARISON_MATRIX } from '../../data/roadmapData';
import './ResponsibilityMatrixSection.css';

export default function ResponsibilityMatrixSection({ onOpenApplyModal }) {
  return (
    <section className="section matrix-section">
      <div className="container">
        <div className="section-header">
          <Badge variant="cyan" icon={Shield} size="md" className="section-tag">
            Operational Matrix
          </Badge>
          <h2 className="section-title">
            What Nexo Executes vs. <span className="text-gradient">Your Protected Role</span>
          </h2>
          <p className="section-desc">
            Complete institutional clarity. We run 100% of day-to-day operations under authorized staff access; you maintain legal ownership and receive direct funds.
          </p>
        </div>

        <div className="matrix-table-wrapper">
          <div className="matrix-table-header">
            <div className="col-feature">Responsibility Domain</div>
            <div className="col-nexo">
              <span className="party-badge nexo">Nexo Operations (60%)</span>
            </div>
            <div className="col-partner">
              <span className="party-badge partner">You as Account Owner (40%)</span>
            </div>
          </div>

          <div className="matrix-rows-list">
            {COMPARISON_MATRIX.map((row, index) => (
              <div key={index} className="matrix-row">
                <div className="col-feature">
                  <strong>{row.feature}</strong>
                </div>
                <div className="col-nexo">
                  <div className="cell-content">
                    <CheckCircle2 size={16} className="text-cyan check-icon" />
                    <span>{row.nexo}</span>
                  </div>
                </div>
                <div className="col-partner">
                  <div className="cell-content">
                    <UserCheck size={16} className="text-emerald check-icon" />
                    <span>{row.partner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="matrix-bottom-note">
          <p>
            * We never ask for full ownership transfer or personal banking passwords. You grant official multi-user staff permissions to our designated operator account.
          </p>
        </div>
      </div>
    </section>
  );
}
