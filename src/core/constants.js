/**
 * Global Constants & Brand Configuration for Nexo Ecommerce
 * Adheres to SRP by centralizing immutable domain and brand parameters.
 */

export const BRAND_CONFIG = {
  name: 'Nexo Ecommerce',
  shortName: 'NEXO',
  tagline: 'Autonomous Marketplace Operations. Institutional E-Commerce Growth.',
  description:
    'Institutional-grade eBay and multi-marketplace store management for US and European account holders. You own the store, we operate the entire infrastructure, profits are shared 60/40.',
  url: 'https://nexoecommerce.com',
  contactEmail: 'nexoecommece@gmail.com',
  whatsappNumber: '923051658777',
  whatsappMessage: 'Hello! I am interested in partnering with Nexo Ecommerce for automated store operations.',
  hours: '24/7 Operations Desk',
  location: 'Global Operations • US & EU Partner Network',
};

export const PARTNERSHIP_TERMS = {
  nexoSharePercent: 60,
  partnerSharePercent: 40,
  upfrontCost: 0,
  inventoryRisk: 'Zero ($0 upfront inventory commitment)',
  payoutCadence: 'Direct Bank Deposits via Marketplace Escrow',
  eligibilityRegions: ['United States', 'United Kingdom', 'Germany', 'France', 'European Union (All EEA)'],
  contractType: 'Performance-Based Non-Exclusive Service Agreement',
  ownershipGuarantee: '100% Client Legal & Financial Account Ownership',
};

export const REGIONAL_ACCOUNTS = [
  { region: 'Germany', count: '63+', flag: '🇩🇪', activeStores: 63, label: 'Germany Accounts' },
  { region: 'United Kingdom', count: '34+', flag: '🇬🇧', activeStores: 34, label: 'UK Accounts' },
  { region: 'United States', count: '22+', flag: '🇺🇸', activeStores: 22, label: 'US Accounts' },
  { region: 'Other EU Countries', count: '27+', flag: '🇪🇺', activeStores: 27, label: 'Other EU Accounts' },
];

export const OPERATIONAL_STATISTICS = [
  { label: 'Cumulative GMV Managed', value: '$4.2M+', change: '+38% YoY' },
  { label: 'Active Managed Stores', value: '146+', change: 'DE (63) · UK (34) · US (22) · Other (27)' },
  { label: 'Industry Experience', value: '5+ Years', change: 'Marketplace Mastery' },
  { label: 'Account Defect Rate', value: '< 0.08%', change: 'Top Rated Plus' },
];
