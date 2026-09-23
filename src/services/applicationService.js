/**
 * Application Service (Single Responsibility: Partner Vetting & Submission Logic)
 */

export const ApplicationService = {
  /**
   * Validate partner application fields
   * @param {import('../core/types').PartnerApplication} application
   * @returns {{ isValid: boolean, errors: Record<string, string> }}
   */
  validate(application) {
    const errors = {};

    if (!application.fullName || application.fullName.trim().length < 2) {
      errors.fullName = 'Full legal name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!application.email || !emailRegex.test(application.email)) {
      errors.email = 'Valid email address is required.';
    }

    if (!application.country || application.country.trim().length < 2) {
      errors.country = 'Please select your country of residence.';
    }

    if (!application.phone || application.phone.trim().length < 6) {
      errors.phone = 'Contact number or WhatsApp is required.';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },

  /**
   * Submit application to endpoint or local pipeline
   * @param {import('../core/types').PartnerApplication} application
   * @returns {Promise<{ success: boolean, message: string, referenceId: string }>}
   */
  async submitApplication(application) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const referenceId = `NX-APP-${Date.now().toString(36).toUpperCase()}`;

    // Store in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('nexo_applications') || '[]');
      existing.push({ ...application, referenceId, submittedAt: new Date().toISOString() });
      localStorage.setItem('nexo_applications', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    return {
      success: true,
      message: 'Application received. An onboarding director will review your profile within 24 hours.',
      referenceId,
    };
  },
};
