// ─── Number / Currency ────────────────────────────────────────────────────────
export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

// ─── Mortgage calculator ──────────────────────────────────────────────────────
/**
 * Monthly mortgage payment (principal + interest)
 * @param {number} principal   Loan amount in dollars
 * @param {number} annualRate  Annual interest rate as a percentage (e.g. 6.5)
 * @param {number} years       Loan term in years
 */
export function calcMonthlyPayment(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

//  Property helpers 
export function getStatusColor(status) {
  switch (status) {
    case 'For Sale': return { bg: '#e8f5e9', color: '#1a7c3e' };
    case 'For Rent': return { bg: '#e3f2fd', color: '#1565c0' };
    case 'Sold': return { bg: '#f5f5f5', color: '#555' };
    default: return { bg: '#f5f5f5', color: '#555' };
  }
}

export function daysLabel(days) {
  if (days === 0) return 'Sold';
  if (days === 1) return '1 day on Zillow';
  return `${days} days on Zillow`;
}

//  Validation
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
