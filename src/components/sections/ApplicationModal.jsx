import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Store,
  Sparkles,
  Send,
} from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { PARTNERSHIP_TERMS } from '../../core/constants';
import './ApplicationModal.css';

export default function ApplicationModal({
  isOpen,
  onClose,
  currentStep,
  nextStep,
  prevStep,
  formData,
  updateField,
  errors,
  isSubmitting,
  submissionResult,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        submissionResult
          ? 'Application Dispatched'
          : 'Partner Allocation Application'
      }
      subtitle={
        submissionResult
          ? `Reference ID: ${submissionResult.referenceId}`
          : 'Complete this 2-minute assessment to verify your account eligibility.'
      }
      maxWidth="620px"
    >
      {!submissionResult ? (
        <div className="application-wizard">
          {/* Progress Indicators */}
          <div className="wizard-stepper">
            <div className={`step-node ${currentStep >= 1 ? 'is-active' : ''}`}>
              <span className="node-num">1</span>
              <span className="node-label">Eligibility</span>
            </div>
            <div className={`step-line ${currentStep >= 2 ? 'is-active' : ''}`} />
            <div className={`step-node ${currentStep >= 2 ? 'is-active' : ''}`}>
              <span className="node-num">2</span>
              <span className="node-label">Store State</span>
            </div>
            <div className={`step-line ${currentStep >= 3 ? 'is-active' : ''}`} />
            <div className={`step-node ${currentStep >= 3 ? 'is-active' : ''}`}>
              <span className="node-num">3</span>
              <span className="node-label">Contact</span>
            </div>
          </div>

          {/* Step 1: Residency & Legal Name */}
          {currentStep === 1 && (
            <div className="wizard-step-body">
              <div className="field-group">
                <label className="field-label" htmlFor="fullName">
                  Full Legal Name (as on official ID)
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`field-input ${errors.fullName ? 'has-error' : ''}`}
                  placeholder="e.g. Alexander Vance"
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="email">
                  Primary Email Address
                </label>
                <div className="input-with-icon">
                  <Mail size={16} className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    className={`field-input has-icon ${errors.email ? 'has-error' : ''}`}
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="country">
                  Country of Legal Residence
                </label>
                <select
                  id="country"
                  className="field-select"
                  value={formData.country}
                  onChange={(e) => updateField('country', e.target.value)}
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany (Deutschland)</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy (Italia)</option>
                  <option value="Spain">Spain (España)</option>
                  <option value="Netherlands">Netherlands (Nederland)</option>
                  <option value="Sweden">Sweden (Sverige)</option>
                  <option value="Other European EEA">Other European Union (EEA) Member</option>
                </select>
                <span className="field-hint">
                  * Partnership contracts are limited to verified US and European residents.
                </span>
              </div>

              <div className="step-actions">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={nextStep}
                  style={{ width: '100%' }}
                >
                  Continue to Store Profile
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Account Status */}
          {currentStep === 2 && (
            <div className="wizard-step-body">
              <label className="field-label">Current Marketplace Seller Account Status</label>
              <div className="account-status-cards">
                <label
                  className={`status-option-card ${
                    formData.accountStatus === 'existing' ? 'is-selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="accountStatus"
                    value="existing"
                    checked={formData.accountStatus === 'existing'}
                    onChange={() => updateField('accountStatus', 'existing')}
                  />
                  <div className="status-option-content">
                    <Store size={20} className="status-icon" />
                    <div>
                      <strong>I have an active/dormant seller account (eBay, Amazon, or TikTok Shop)</strong>
                      <span>Ready for audit and catalog deployment</span>
                    </div>
                  </div>
                </label>

                <label
                  className={`status-option-card ${
                    formData.accountStatus === 'new' ? 'is-selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="accountStatus"
                    value="new"
                    checked={formData.accountStatus === 'new'}
                    onChange={() => updateField('accountStatus', 'new')}
                  />
                  <div className="status-option-content">
                    <Sparkles size={20} className="status-icon" />
                    <div>
                      <strong>I will open a fresh verified seller account</strong>
                      <span>I have clean identity and local banking documents</span>
                    </div>
                  </div>
                </label>

                <label
                  className={`status-option-card ${
                    formData.accountStatus === 'needs_guidance' ? 'is-selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="accountStatus"
                    value="needs_guidance"
                    checked={formData.accountStatus === 'needs_guidance'}
                    onChange={() => updateField('accountStatus', 'needs_guidance')}
                  />
                  <div className="status-option-content">
                    <ShieldCheck size={20} className="status-icon" />
                    <div>
                      <strong>I need guidance from an onboarding director</strong>
                      <span>I want to confirm eligibility on a private call first</span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="step-actions dual">
                <Button variant="glass" size="md" icon={ArrowLeft} iconPosition="left" onClick={prevStep}>
                  Back
                </Button>
                <Button variant="primary" size="md" icon={ArrowRight} onClick={nextStep}>
                  Next: Contact Verification
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact & Direct Submission */}
          {currentStep === 3 && (
            <div className="wizard-step-body">
              <div className="field-group">
                <label className="field-label" htmlFor="phone">
                  WhatsApp / Direct Mobile Number (with country code)
                </label>
                <div className="input-with-icon">
                  <Phone size={16} className="input-icon" />
                  <input
                    id="phone"
                    type="tel"
                    className={`field-input has-icon ${errors.phone ? 'has-error' : ''}`}
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="notes">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  id="notes"
                  rows="3"
                  className="field-textarea"
                  placeholder="Share details on previous experience or specific timing..."
                  value={formData.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                />
              </div>

              <div className="review-snapshot-box">
                <div className="snapshot-item">
                  <span>Applicant:</span>
                  <strong>{formData.fullName || 'Anonymous'}</strong>
                </div>
                <div className="snapshot-item">
                  <span>Region:</span>
                  <strong>{formData.country}</strong>
                </div>
                <div className="snapshot-item">
                  <span>Model:</span>
                  <strong className="text-emerald">60% Operations / 40% Passive Yield</strong>
                </div>
              </div>

              {errors.form && <div className="form-global-error">{errors.form}</div>}

              <div className="step-actions dual">
                <Button variant="glass" size="md" icon={ArrowLeft} iconPosition="left" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  icon={Send}
                  onClick={nextStep} // Trigger submission handled in hook
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Evaluating Profile...' : 'Submit Application'}
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Success View */
        <div className="application-success-view">
          <div className="success-icon-wrap">
            <CheckCircle2 size={48} className="text-emerald" />
          </div>
          <h4 className="success-title">Application Dispatched Successfully</h4>
          <p className="success-desc">
            {submissionResult.message} Your application is logged under{' '}
            <strong>{submissionResult.referenceId}</strong>.
          </p>

          <div className="success-checklist">
            <div className="check-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Identity & Residency review underway</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Director allocated for initial strategy briefing</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Zero obligation, non-exclusive agreement terms</span>
            </div>
          </div>

          <Button variant="primary" size="md" onClick={onClose} style={{ width: '100%' }}>
            Return to Overview
          </Button>
        </div>
      )}
    </Modal>
  );
}
