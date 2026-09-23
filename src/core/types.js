/**
 * Domain Type Definitions (JSDoc)
 * Ensures interface clarity and strong typings throughout the application.
 */

/**
 * @typedef {Object} StorePerformanceMetric
 * @property {string} id - Unique store identifier
 * @property {string} code - Anonymous public designation (e.g. NX-01)
 * @property {string} region - Marketplace geo ('US' | 'EU' | 'UK')
 * @property {string} category - Niche specialization
 * @property {string} periodBadge - Timeframe indicator
 * @property {string} totalGMV - Gross Merchandise Value formatted
 * @property {number} gmvRaw - Numeric GMV for computations
 * @property {string} orders - Fulfilled orders
 * @property {string} avgTicket - Average order value
 * @property {string} growth - Growth percentage
 * @property {string} sellerBadge - Status rating ('Top Rated Plus' | 'Above Standard')
 * @property {string} feedbackRating - Customer feedback score
 * @property {string} partnerTakeHome - 40% Net owner payout
 * @property {number[]} sparkline - 16-point performance curve
 * @property {string} operationalHighlight - Executive summary of performance
 */

/**
 * @typedef {Object} ProfitCalculationResult
 * @property {number} monthlyGMV - Projected gross sales
 * @property {number} estimatedProfit - Total estimated store net profit (avg 25%)
 * @property {number} nexoOperationsShare - 60% operational overhead and management fee
 * @property {number} partnerNetTakeHome - 40% passive owner distribution
 * @property {number} annualPartnerProjection - 12-month projected payout
 * @property {number} estimatedOrders - Approx monthly orders
 */

/**
 * @typedef {Object} PartnerApplication
 * @property {string} fullName - Full legal name
 * @property {string} email - Contact email
 * @property {string} phone - Direct WhatsApp / Mobile
 * @property {string} country - Country of residence
 * @property {string} accountStatus - 'new' | 'existing' | 'needs_guidance'
 * @property {string} notes - Additional context
 */
