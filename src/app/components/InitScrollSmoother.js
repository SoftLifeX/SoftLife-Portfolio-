'use client';

import { useEffect } from 'react';
import { initSmoother } from './smoother';

export default function InitScrollSmoother() {
  useEffect(() => {
    initSmoother();
  }, []);

  return null;
}
