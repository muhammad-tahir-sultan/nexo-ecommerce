import { useState, useCallback } from 'react';
import { ApplicationService } from '../services/applicationService';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  country: 'United States',
  accountStatus: 'existing',
  notes: '',
};

/**
 * Hook for managing application modal, multi-step progress, and submission
 */
export function useApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const openModal = useCallback((prefillCountry = 'United States') => {
    setFormData((prev) => ({ ...prev, country: prefillCountry }));
    setCurrentStep(1);
    setErrors({});
    setSubmissionResult(null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const nextStep = useCallback(() => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.email.trim()) {
        setErrors({
          fullName: !formData.fullName.trim() ? 'Name is required' : '',
          email: !formData.email.trim() ? 'Email is required' : '',
        });
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  }, [currentStep, formData]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const submit = useCallback(async () => {
    const validation = ApplicationService.validate(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await ApplicationService.submitApplication(formData);
      setSubmissionResult(result);
      setCurrentStep(3); // success view
    } catch {
      setErrors({ form: 'Submission error. Please try again or reach out on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return {
    isOpen,
    openModal,
    closeModal,
    currentStep,
    nextStep,
    prevStep,
    formData,
    updateField,
    errors,
    isSubmitting,
    submissionResult,
  };
}
