import { useState, useMemo } from 'react';
import { StoreMetricsService } from '../services/storeMetricsService';

/**
 * Hook for filterable store proofs and audit modal preview
 */
export function useStoreMetrics() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [activeStoreModal, setActiveStoreModal] = useState(null);

  const filteredStores = useMemo(() => {
    return StoreMetricsService.filterStores(selectedCategory, selectedRegion);
  }, [selectedCategory, selectedRegion]);

  const summary = useMemo(() => {
    return StoreMetricsService.getAggregateSummary();
  }, []);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedRegion,
    setSelectedRegion,
    filteredStores,
    summary,
    activeStoreModal,
    setActiveStoreModal,
  };
}
