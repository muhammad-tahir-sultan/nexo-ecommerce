import React, { useState } from 'react';
import {
  HelpCircle,
  MessageCircle,
  Mail,
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '../data/faqData';
import { BRAND_CONFIG } from '../core/constants';
import { ApplicationService } from '../services/applicationService';
import './FAQ.css';

export default function FAQ({ onOpenApplyModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [inlineForm, setInlineForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    accountStatus: 'existing',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [formError, setFormError] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (selectedCategory === 'All Questions') return true;
    return item.category === selectedCategory;
  });

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    const validation = ApplicationService.validate(inlineForm);
    if (!validation.isValid) {
      setFormError(Object.values(validation.errors)[0] || 'Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await ApplicationService.submitApplication(inlineForm);
      setSubmitSuccess(res);
    } catch {
      setFormError('Submission issue. Please reach out via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper faq-page">
      {/* Hero */}
      <section className="section page-hero-section">
        <div className="container">
          <div className="section-header">
            <Badge variant="cyan" icon={HelpCircle} size="md" className="section-tag">
              Knowledge Base & Verification
            </Badge>
            <h1 className="section-title">
              Clear Questions. <span className="text-gradient">Total Institutional Transparency.</span>
            </h1>
            <p className="section-desc">
              Understand our legal protections, daily operating workflows, and bank settlement structures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section faq-main-section">
        <div className="container">
          <div className="faq-layout-grid">
            {/* FAQ Accordion Side */}
            <div className="faq-accordion-col">
              {/* Category Filter Pills */}
              <div className="faq-pills-row">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`faq-pill-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <Accordion items={filteredFaqs} defaultIndex={0} />

              <div className="faq-extra-contact-box">
                <div className="extra-contact-content">
                  <h4>Have a question not listed here?</h4>
                  <p>Our operational onboarding desk is available to answer any questions directly.</p>
                </div>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    BRAND_CONFIG.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-md"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Direct Application Card */}
            <div className="faq-form-col">
              <Card className="inline-apply-card" hoverEffect={false} glow={true}>
                <div className="apply-card-top">
                  <Badge variant="emerald" dot={true}>
                    Direct Application Portal
                  </Badge>
                  <h3 className="apply-card-title">Apply for Store Allocation</h3>
                  <p className="apply-card-desc">
                    Submit your details directly to our onboarding desk to verify US/EU account eligibility.
                  </p>
                </div>

                {!submitSuccess ? (
                  <form onSubmit={handleInlineSubmit} className="inline-form">
                    <div className="field-group">
                      <label className="field-label" htmlFor="faq-fullName">Full Legal Name</label>
                      <input
                        id="faq-fullName"
                        type="text"
                        className="field-input"
                        placeholder="John Doe"
                        value={inlineForm.fullName}
                        onChange={(e) => setInlineForm({ ...inlineForm, fullName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="faq-email">Email Address</label>
                      <input
                        id="faq-email"
                        type="email"
                        className="field-input"
                        placeholder="john@example.com"
                        value={inlineForm.email}
                        onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="faq-phone">WhatsApp / Mobile Number</label>
                      <input
                        id="faq-phone"
                        type="tel"
                        className="field-input"
                        placeholder="+1 (555) 000-0000"
                        value={inlineForm.phone}
                        onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="faq-country">Residency Location</label>
                      <select
                        id="faq-country"
                        className="field-select"
                        value={inlineForm.country}
                        onChange={(e) => setInlineForm({ ...inlineForm, country: e.target.value })}
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany (Deutschland)</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Other European EEA">Other European Union (EEA) Member</option>
                      </select>
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="faq-notes">Do you have an existing account? (Optional)</label>
                      <textarea
                        id="faq-notes"
                        rows="2"
                        className="field-textarea"
                        placeholder="e.g. Existing active account or fresh identity ready to register..."
                        value={inlineForm.notes}
                        onChange={(e) => setInlineForm({ ...inlineForm, notes: e.target.value })}
                      />
                    </div>

                    {formError && <div className="form-global-error">{formError}</div>}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      disabled={isSubmitting}
                      style={{ width: '100%', marginTop: '0.5rem' }}
                    >
                      {isSubmitting ? 'Evaluating Profile...' : 'Submit Partnership Application'}
                    </Button>

                    <div className="form-legal-microcopy">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>100% legal ownership & direct bank settlements guaranteed.</span>
                    </div>
                  </form>
                ) : (
                  <div className="inline-success-box">
                    <Badge variant="emerald">Dispatched</Badge>
                    <h4>Application Received</h4>
                    <p>{submitSuccess.message}</p>
                    <span className="ref-tag">Ref: {submitSuccess.referenceId}</span>
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={() => setSubmitSuccess(null)}
                      style={{ marginTop: '1rem' }}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
