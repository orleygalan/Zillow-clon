import { useState, useCallback } from 'react';

/**
 * useCarousel — Gestiona el estado del índice para un carrusel horizontal.
 * @param {number} total  Numero total de elementos
 * @param {number} visibleCount  Numero de elementos visibles a la vez
 */
export function useCarousel(total, visibleCount = 3) {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, total - visibleCount);

  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx((i) => Math.min(max, i + 1)), [max]);

  return { idx, prev, next, canPrev: idx > 0, canNext: idx < max };
}