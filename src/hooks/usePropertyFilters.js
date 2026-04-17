import { useState, useMemo } from 'react';

const DEFAULT_FILTERS = {
  search: '',
  status: 'all',
  sort: 'default',
  minBeds: 0,
  minBaths: 0,
  minPrice: 0,
  maxPrice: Infinity,
  homeType: 'all',
};

/**
 * usePropertyFilters — manages filter state and returns filtered list.
 * @param {Array} properties  Full list of property objects
 */
export function usePropertyFilters(properties) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const updateFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    let list = [...properties];

    // Text search (address)
    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.fullAddress.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.zip.includes(q)
      );
    }

    // Status filter
    if (filters.status !== 'all') {
      list = list.filter((p) => p.status === filters.status);
    }

    // Home type
    if (filters.homeType !== 'all') {
      list = list.filter((p) => p.type === filters.homeType);
    }

    // Beds / Baths
    if (filters.minBeds > 0)
      list = list.filter((p) => p.beds >= filters.minBeds);
    if (filters.minBaths > 0)
      list = list.filter((p) => p.baths >= filters.minBaths);

    // Price range
    list = list.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // Sort
    if (filters.sort === 'price-asc')
      list.sort((a, b) => a.price - b.price);
    else if (filters.sort === 'price-desc')
      list.sort((a, b) => b.price - a.price);
    else if (filters.sort === 'newest')
      list.sort((a, b) => (a.daysOnZillow ?? 99) - (b.daysOnZillow ?? 99));

    return list;
  }, [properties, filters]);

  return { filters, updateFilter, resetFilters, filtered };
}
