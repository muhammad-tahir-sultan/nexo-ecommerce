/**
 * Calculator Service (Single Responsibility: Financial & Yield Computations)
 * Pure, isolated functions free of DOM and UI state.
 */

import { PARTNERSHIP_TERMS } from '../core/constants';

const DEFAULT_NET_MARGIN_PERCENT = 0.25; // 25% average realized marketplace net margin after COGS & platform fees

export const CalculatorService = {
  /**
   * Calculate exact profit breakdown given a gross monthly GMV
   * @param {number} monthlyGMV - Monthly gross merchandise volume
   * @param {number} [netMarginRate=0.25] - Projected store net margin rate
   * @returns {import('../core/types').ProfitCalculationResult}
   */
  calculateBreakdown(monthlyGMV, netMarginRate = DEFAULT_NET_MARGIN_PERCENT) {
    const safeGMV = Math.max(0, Number(monthlyGMV) || 0);
    const estimatedProfit = Math.round(safeGMV * netMarginRate);
    const partnerNetTakeHome = Math.round(estimatedProfit * (PARTNERSHIP_TERMS.partnerSharePercent / 100));
    const nexoOperationsShare = Math.round(estimatedProfit * (PARTNERSHIP_TERMS.nexoSharePercent / 100));
    const annualPartnerProjection = partnerNetTakeHome * 12;
    const estimatedOrders = Math.round(safeGMV / 39.5); // Approx ~$39.50 average order value

    return {
      monthlyGMV: safeGMV,
      estimatedProfit,
      nexoOperationsShare,
      partnerNetTakeHome,
      annualPartnerProjection,
      estimatedOrders,
    };
  },

  /**
   * Format currency values nicely with symbol
   * @param {number} amount
   * @param {string} [currency='USD']
   * @returns {string}
   */
  formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  },
};
