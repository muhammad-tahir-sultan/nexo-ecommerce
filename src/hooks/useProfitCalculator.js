import { useState, useMemo } from 'react';
import { CalculatorService } from '../services/calculatorService';

/**
 * Hook for managing reactive profit calculator state
 * @param {number} [initialGMV=35000]
 */
export function useProfitCalculator(initialGMV = 35000) {
  const [monthlyGMV, setMonthlyGMV] = useState(initialGMV);
  const [currency, setCurrency] = useState('USD');

  const projection = useMemo(() => {
    return CalculatorService.calculateBreakdown(monthlyGMV);
  }, [monthlyGMV]);

  const formattedValues = useMemo(() => {
    return {
      monthlyGMV: CalculatorService.formatCurrency(projection.monthlyGMV, currency),
      estimatedProfit: CalculatorService.formatCurrency(projection.estimatedProfit, currency),
      nexoOperationsShare: CalculatorService.formatCurrency(projection.nexoOperationsShare, currency),
      partnerNetTakeHome: CalculatorService.formatCurrency(projection.partnerNetTakeHome, currency),
      annualPartnerProjection: CalculatorService.formatCurrency(projection.annualPartnerProjection, currency),
      estimatedOrders: projection.estimatedOrders.toLocaleString(),
    };
  }, [projection, currency]);

  return {
    monthlyGMV,
    setMonthlyGMV,
    currency,
    setCurrency,
    projection,
    formattedValues,
  };
}
